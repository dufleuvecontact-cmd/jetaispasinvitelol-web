const admin = require('firebase-admin');
const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables
const envConfig = dotenv.parse(fs.readFileSync('.env.local'));
for (const k in envConfig) {
  process.env[k] = envConfig[k];
}

const serviceAccountStr = process.env.FIREBASE_SERVICE_ACCOUNT;
if (!serviceAccountStr) {
  console.error("Missing FIREBASE_SERVICE_ACCOUNT in .env.local");
  process.exit(1);
}

const serviceAccount = JSON.parse(serviceAccountStr);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function seed() {
  const event = {
    title: "#001 – HANGAR PARTY",
    date: "",
    location: "",
    tickets_text: "",
    image_url: "/forever_young.jpg",
    likes: 1420,
    reposts: 342,
    tags: ["#2016", "#la", "#houseparty"],
    username: "jetaispasinvitelol",
    created_at: admin.firestore.FieldValue.serverTimestamp()
  };

  try {
    const docRef = await db.collection('events').add(event);
    console.log("Seeded event with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  process.exit(0);
}

seed();
