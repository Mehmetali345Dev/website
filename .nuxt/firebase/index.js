import createApp from './app.js'

import firestoreService from './service.firestore.js'

const appConfig = {"appId":"1:421378367280:web:8441c7e608d40a3ea572f5","apiKey":"AIzaSyBWSgd5G5H8YWV8i9eaRitMoo468SUXcos","databaseURL":"https:\u002F\u002Fmehmetali345site-default-rtdb.firebaseio.com","projectId":"mehmetali345site","authDomain":"mehmetali345site.firebaseapp.com","storageBucket":"mehmetali345site.appspot.com","messagingSenderId":undefined}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      firestoreService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      firestoreService(session, firebase, ctx, inject),

    ]
  }

  const [
    firestore
  ] = await Promise.all(servicePromises)

  const fire = {
    firestore: firestore
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}