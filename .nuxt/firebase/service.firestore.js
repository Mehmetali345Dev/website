

export default async function (session) {
  await import(/* webpackChunkName: 'firebase-firestore' */'firebase/firestore')

  const firestoreService = session.firestore()

  return firestoreService
}
