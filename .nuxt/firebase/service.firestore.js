

export default async function (session) {
  await import('firebase/firestore')

  const firestoreService = session.firestore()

  return firestoreService
}
