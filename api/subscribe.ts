import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { phone_number } = req.body;
  if (!phone_number) {
    return res.status(400).json({ error: 'phone_number is required' });
  }

  const apiKey = process.env.KLAVIYO_API_KEY;
  const listId = process.env.KLAVIYO_LIST_ID;

  if (!apiKey || !listId) {
    return res.status(500).json({ error: 'Klaviyo is not configured.' });
  }

  try {
    const response = await fetch('https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/', {
      method: 'POST',
      headers: {
        'Authorization': `Klaviyo-API-Key ${apiKey}`,
        'revision': '2024-02-15',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          type: "profile-subscription-bulk-create-job",
          attributes: {
            custom_source: "Jetaispasinvite Web SMS Form",
            profiles: [
              {
                phone_number: phone_number,
                subscriptions: {
                  sms: { marketing: { consent: "SUBSCRIBED" } }
                }
              }
            ]
          },
          relationships: {
            list: {
              data: { type: "list", id: listId }
            }
          }
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Klaviyo error:", errorData);
      return res.status(response.status).json({ error: 'Failed to subscribe via Klaviyo', details: errorData });
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("Subscription Error:", err);
    return res.status(500).json({ error: 'Internal server error', details: err.message });
  }
}
