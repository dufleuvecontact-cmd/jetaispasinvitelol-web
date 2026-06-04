import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return res.status(500).json({ 
      error: 'Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment variables.' 
    });
  }

  const stripe = new Stripe(stripeKey, {
    // @ts-expect-error
    apiVersion: '2023-10-16', // Use a stable API version
  });

  const origin = req.headers.origin || `https://${req.headers.host}`;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'cad', // Assuming CAD, but can be configured later
            product_data: {
              name: '#001 – HANGAR PARTY Ticket',
              description: 'Soirée house/indiesleaze dans un hangar secret à Québec',
              // images: ['https://your-domain.com/path-to-image.jpg'], // Optional
            },
            unit_amount: 1500, // 15.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`,
      // Optional: collect phone numbers if you want to SMS them later via Stripe
      phone_number_collection: {
        enabled: true,
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe Session Creation Error:", err);
    return res.status(500).json({ error: 'Internal server error', details: err.message });
  }
}
