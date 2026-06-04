import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import admin from 'firebase-admin';

// Initialize Firebase Admin (only once per instance)
if (!admin.apps.length) {
  try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (err) {
    console.error("Firebase Admin Initialization Error:", err);
  }
}

const db = admin.firestore();

// We need the raw body for Stripe signature verification
export const config = {
  api: {
    bodyParser: false,
  },
};

const getRawBody = async (req: VercelRequest): Promise<Buffer> => {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeKey || !webhookSecret) {
    return res.status(500).send('Stripe keys are missing.');
  }

  const stripe = new Stripe(stripeKey, {
    apiVersion: '2023-10-16',
  });

  const sig = req.headers['stripe-signature'];
  const rawBody = await getRawBody(req);

  let event: Stripe.Event;

  try {
    if (!sig) throw new Error('No signature found');
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // Save ticket purchase to Firebase
    try {
      await db.collection('tickets').add({
        checkout_session_id: session.id,
        customer_email: session.customer_details?.email || null,
        customer_name: session.customer_details?.name || null,
        customer_phone: session.customer_details?.phone || null,
        amount_total: session.amount_total,
        currency: session.currency,
        payment_status: session.payment_status,
        created_at: admin.firestore.FieldValue.serverTimestamp(),
      });
      console.log(`Ticket saved for session ${session.id}`);
    } catch (dbErr) {
      console.error("Firebase insert error during webhook:", dbErr);
      return res.status(500).send('Database Error');
    }
  }

  // Return a 200 response to acknowledge receipt of the event
  res.json({ received: true });
}
