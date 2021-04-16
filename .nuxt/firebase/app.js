

export default async function createApp(config, {res}) {
  const firebaseModule = await import(/* webpackChunkName: 'firebase-app' */'firebase/app')
  const firebase = firebaseModule.default

  /*****************************************************
  * Without "Auth SSR serverLogin Option" -> normal init
  *****************************************************/
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
  const session = firebase.apps[0]

  return {
    firebase,
    session
  }
}
