import type { VercelRequest, VercelResponse } from '@vercel/node';
import admin from 'firebase-admin';
import twilio from 'twilio';

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

// Initialize Twilio Client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { secret, message } = req.body;

  // Verify Admin Secret to prevent unauthorized blasts
  if (secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized: Invalid Admin Secret' });
  }

  if (!message) {
    return res.status(400).json({ error: 'Message payload is required' });
  }

  try {
    // 1. Fetch all subscribers from Firestore
    const snapshot = await db.collection('subscribers').get();

    if (snapshot.empty) {
      return res.status(200).json({ success: true, count: 0, message: 'No subscribers found' });
    }

    const subscribers: string[] = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.phone_number) {
        subscribers.push(data.phone_number);
      }
    });

    // 2. Broadcast SMS via Twilio
    let sentCount = 0;
    const errors: any[] = [];

    // Loop through each subscriber and send the message
    for (const phone of subscribers) {
      try {
        await twilioClient.messages.create({
          body: message,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: phone
        });
        sentCount++;
      } catch (err: any) {
        errors.push({ phone, error: err.message });
      }
    }

    return res.status(200).json({ 
      success: true, 
      sent: sentCount, 
      errors: errors.length > 0 ? errors : undefined 
    });

  } catch (err: any) {
    console.error("SMS Broadcast Error:", err);
    return res.status(500).json({ error: 'Internal server error', details: err.message });
  }
}
