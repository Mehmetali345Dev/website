---

title: TırıVırıŞeyler - Devlog#1

description: TırıVırıŞeyler'de nedir? Nasıl geliştiriyorum hepsi bu devlogda!

banner: https://i.vgy.me/HiUmKw.png

date: 2021-12-31

image: https://i.vgy.me/EjANoe.png

---



# Nedir bu?

Bu gönderiyi açtığınızda emin olun aklınıza ilk gelen şey "Nedir bu TırıVırıŞeyler?" olacaktır eminim ki. TırıVırıŞeyler benim arkadaşım ile beraber açtığım kolektif bir blogdur. Herkesin yazı yazacak ve editörler tarafından onaylanacaktır.

# Ne ile geliştiriyorum?

Nuxt.js, WindiCSS ve Firebase ile! Neden mi Firebase peki, kullanması bir hayli kolay ve bu büyük çaplı bir proje olmasına rağmen herhangi bir custom backend'e ihtiyacım yok, olması dahilinde ise zamanla bunuda geliştireceğim.



O zaman devlog'a başlayabiliriz!

# Devlog#1

**İlk Yapmam Gerekenler**

- Kaydolma

- Giriş yapma gibi basit şeyler

Bunları yapması pek de uzun sürmedi, Firebase Authtentication sağolsun.



### Giriş yapmak

Bunun için iki problemi çözmem gerekliydi

- Kullanıcının giriş bilgisinin saklamak

- Ve aktif kullanıcı olup olmadığını belirtmek



Neyseki kullanıcının giriş bilgisini saklamak için Firebase bana kolay bir yöntem sağlıyor [Authentication State Persistence &nbsp;|&nbsp; Firebase Documentation](https://firebase.google.com/docs/auth/web/auth-state-persistence) dokümentasyonda bahsedildiği gibi `setPersistence` methodu ile cookienin nasıl kaydedilebildiğini seçebiliyorum

```js [login.vue]
    login() {
      this.$fire.auth.setPersistence('local').then(() => {
        return this.$fire.auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push('/')
          })
          .catch((error) => {
            alert(error.message)
          })
      })
    },
```

Yukarıda gördüğünüz gibi bu şekilde giriş sağlanıyor fakat ya kullanıcıyı saklamak ve giriş yapıp yapmadığını anlamak?

Burada ise Vuex ve Firebase Auth içinde bulunan `onAuthStateChanged` ile kullanıcının giriş yapması veya çıkış yapması sürekli denetleniyor.

```js [config/firebase.js]
 auth: {
      initialize: {
        onAuthStateChangedMutation: 'isAuthStateChange',
      },
      ssr: true,
    },
```

Burada ise `@nuxtjs/firebase` modülü ile bunu sürekli takip ediyoruz. Herhangi bir kullanıcı durumu değişimi olduğunda Vuex ile bunu güncelliyoruz.

```js [store/index.js]
export const state = () => ({
  user: [],
  isLoggedIn: false,
})

export const mutations = {
  isAuthStateChange: (state, { authUser, claims }) => {
    if (!authUser) {
      state.isLoggedIn = false
      state.user = []
    } else {
      state.isLoggedIn = true
      const { uid, email, emailVerified } = authUser
      state.user = { uid, email, emailVerified }
    }
  },
}
```

Burada görüldüğü gibi kullanıcı durumu değiştiğinde isAuthStateChange methodu çağrılıyor, burada ise kullanıcının giriş yapıp - yapmadığı ve "UID, Email" gibi veriler aktarılıyor.

**Giriş yapmak buraya kadardı sırada kaydolmak var!**

### Kaydolmak

Kaydolurken bize 3 şey gerekli

- Kullanıcı Adı

- Email

- Şifre

Bunları bir form ile aldıktan sonra Firebase Auth kullanarak kullanıcıyı kaydediyoruz, kullanıcı adını kaydediyoruz ve kullanıcı için gerekli olan

- Email

- Kullanıcı adı

- Kaydolma tarihi

- UID

- Profil fotoğrafı

- Biyografi

gibi verileri saklamak için kullanıcı UID'si ile bir giriş oluşturuyoruz. 

```js [register.vue]
await this.$fire.auth
  .createUserWithEmailAndPassword(this.email, this.password)
  .then((cred) => {
    this.$fire.firestore.collection("users").doc(cred.user.uid).set({
      email: this.email,
      username: this.username,
      uid: cred.user.uid,
      createdAt: new Date(),
    });
  });
this.$fire.firestore
  .collection("usernames")
  .doc(this.username.toLowerCase())
  .set({
    username: this.username.toLowerCase(),
  });


```

Buradada yapılan girişler var.

### Sonuncusu ise arayüz

Kullanıcının arayüzde giriş yapıp yapmadığını, Navbarda ise giriş ve kaydol gibi butonları gizlememiz gerekli bunun için WordPress gibi tepeye bir bar ekliyorum.

![vgy.me](https://i.vgy.me/r3aszP.png)

Bu verileri daha önce belirttiğim gibi state manager (Vuex) sayesinde kontrol ediyorum.

```html [components/UserBar.vue]
<template>
  <div class="w-full bg-green-600 text-white flex justify-center items-center p-1">
    <div class="w-11/12 md:w-7/12 flex items-center justify-between">
      <h1>Merhaba {{ $store.state.user.email }}</h1>
      <div class="gap-2 flex items-center">
        <nuxt-link
          to="/dashboard"
          class="focus:outline-none rounded-md hover:(text-red-400 transition-ease duration-300) font-bold px-2 py-1"
          >Panele Git</nuxt-link
        >
        <button
          class="focus:outline-none rounded-md hover:(text-red-400 transition-ease duration-300) font-bold px-2 py-1"
          @click="signOut()"
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      this.$fire.auth.signOut().then(() => {
        window.location.reload()
      })
    },
  },
}
</script>

<style></style>
```

Bu kod ile kullanıcıyı belirtiyorum.



# Şimdilik bu kadar

Sonraki devlogda basit kullanıcı ayarlarına gireceğim.
