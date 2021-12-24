export default {
    config: {
        appId: process.env.FIREBASE_APP_ID,
        apiKey: process.env.FIREBASE_API_KEY,
        projectId: process.env.FIREBASE_PROJECT_ID,
    },
    services: {
        firestore: true,
    },
}