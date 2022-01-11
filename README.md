# 345dev.me
![Preview](https://raw.githubusercontent.com/Mehmetali345Dev/website/master/preview.png)

[![CodeFactor](https://www.codefactor.io/repository/github/mehmetali345dev/website/badge)](https://www.codefactor.io/repository/github/mehmetali345dev/website)

My personal portfolio and blog made with Nuxt.js, Vue.js, WindiCSS.


# What it have?

- Realtime Discord and Spotify status!
- Page for freelancers
    - Works, projects and repos!
- Custom and re-usable components
    - 20+ components
    - Skeleton loaders, cards etc.
- Static blog
    - Comments with Disqus
    - Write blog posts with markdown!
- Real-world apps
    - Firebase integration!
    - Turkish Dictionary for awkward words (Firestore)
    - Recommendations (Firestore)
    - Utilities like metatag generator (WIP)
- Most of styling job is made with WindiCSS
    - JIT!
    - Except some transitions and blog most of styling is made with WindiCSS
# Getting Started

## Requirements

- Nodejs 12.17.1 or higher version.
- Yarn package manager (It not need but I prefer this.)

## Compiling Source Code

### First
 1. Download code and unzip folder
 2. Open terminal or CMD (Windows) on project folder.  
### Second
Install packages with your preffered package manager

Write these command CMD or Terminal
 - With Yarn: ```yarn```
 - With NPM: ```npm install```

### Third
For running app on development server

Write these command CMD or Terminal

 - With Yarn: ```yarn dev```
 - With NPM: ```npm run dev```

For build and compile:

 - With Yarn: ```yarn generate (or yarn build)```
 - With NPM: ```npm run generate or (npm run build)```

and open [localhost:3000](http://localhost:3000) on your browser and your app is ready.

If you are want host on **paid or free services**. I recommend Vercel or Netlify. My app is hosted by [Vercel](https://vercel.com).

# Firebase
I have two special pages, a Dictionary and Recommendations. If you don't need these pages you can remove this pages.

- First, remove `firebase` and `@nuxtjs/firebase` modules
- Second delete firebase.js file from `config` directory
- Third remove `@nuxtjs/firebase` in `modules` array from `nuxt.config.js` and delete firebase import.
- After that you can delete these two pages

# To-do
- [x] Add share options to blog posts
- [ ] Add works
- [x] Custom error page
- Recommandations
    - [x] Create page
    - [ ] Add weekly book recommandation
    - [x] Add daily song recommandation

# Special Thanks
to [Eggsy](https://github.com/eggsy), [Ven](https://ven.earth) and [Tarık Coşkun](https://github.com/tarikcoskun). I'm very inspired by them, and i used some of their code.
