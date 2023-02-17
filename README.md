# !THE FIX
### For 345dev.me's Nuxtjs project

I created this project after cloning thinking it was going to be pretty simple, come to find out that this project is slightly deprecated, outdated, and a bit of discouraging to new developers who wants to use a nice Blog like this.
However, this project is still a good project and IS Still usable. Below is a list of fixes to this project that will help you to be about to use this project.

I personally used `yarn install` so that I can see easier on whats causing issues, it will complete the installation through this repo. Once it was done, I was just curious so, I also ran `npm run build` right after to actually build some files if any was needed, I was unsure what I was dealing with so... let it be!
Once it was one building, I ran `set NODE_OPTIONS=--openssl-legacy-provider` next to fix the  code: 'ERR_OSSL_EVP_UNSUPPORTED' issue, see below other options.

And finally, run `npm run dev` to see the work :) I hope these fixes will help everyone. Enjoy and, you can thank him for making this blog, I just fixed it without firebase and `yarn` issues. I personally believe when creating a project, pick only 1 package and stick without, do not have 2 other options as it WILL or CAN cause issues for other developers, especially if they are new, they arent going to know the problems it causes let alone, reading the `.log` files and using google to help with the errors.

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

# Firebase(removed from the project)
Mehmetali has two special pages, a Dictionary and Recommendations. If you don't need these pages in-which you can remove. However, I have modified these codes and settings so that it will prevent any issues running this blog without firebase enabled.

Disclaimer: If you plan on using Firebase and are knowing what you're doing, please feel free, however, I have removed it for now.

- First, remove `firebase` and `@nuxtjs/firebase` modules
- Second delete firebase.js file from `config` directory
- Third remove `@nuxtjs/firebase` in `modules` array from `nuxt.config.js` and delete firebase import.
- After that you can delete these two pages

# !FixIt
**Fixing major build issues**
When getting an error:
```
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
```

**You can fix this by Enabling the legacy OpenSSL provider.**

- On Unix-like (Linux, macOS, Git bash, etc.):
`export NODE_OPTIONS=--openssl-legacy-provider`

- On Windows command prompt:
`set NODE_OPTIONS=--openssl-legacy-provider`

- On PowerShell:
`$env:NODE_OPTIONS = "--openssl-legacy-provider"`
[Reference](https://github.com/webpack/webpack/issues/14532#issuecomment-947012063)

# Special Thanks
to [Eggsy](https://github.com/eggsy). I'm very inspired by them, and i used some of their codes. 
