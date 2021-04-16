import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  ColorSwitcher: () => import('../..\\src\\components\\ColorSwitcher.vue' /* webpackChunkName: "components/color-switcher" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\src\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  GoTop: () => import('../..\\src\\components\\GoTop.vue' /* webpackChunkName: "components/go-top" */).then(c => wrapFunctional(c.default || c)),
  Icon: () => import('../..\\src\\components\\Icon.vue' /* webpackChunkName: "components/icon" */).then(c => wrapFunctional(c.default || c)),
  SkeletonLoader: () => import('../..\\src\\components\\SkeletonLoader.vue' /* webpackChunkName: "components/skeleton-loader" */).then(c => wrapFunctional(c.default || c)),
  Socials: () => import('../..\\src\\components\\Socials.vue' /* webpackChunkName: "components/socials" */).then(c => wrapFunctional(c.default || c)),
  Status: () => import('../..\\src\\components\\Status.vue' /* webpackChunkName: "components/status" */).then(c => wrapFunctional(c.default || c)),
  CardPost: () => import('../..\\src\\components\\Card\\Post.vue' /* webpackChunkName: "components/card-post" */).then(c => wrapFunctional(c.default || c)),
  CardProject: () => import('../..\\src\\components\\Card\\Project.vue' /* webpackChunkName: "components/card-project" */).then(c => wrapFunctional(c.default || c)),
  CardRepository: () => import('../..\\src\\components\\Card\\Repository.vue' /* webpackChunkName: "components/card-repository" */).then(c => wrapFunctional(c.default || c)),
  CardSkill: () => import('../..\\src\\components\\Card\\Skill.vue' /* webpackChunkName: "components/card-skill" */).then(c => wrapFunctional(c.default || c)),
  CardSong: () => import('../..\\src\\components\\Card\\Song.vue' /* webpackChunkName: "components/card-song" */).then(c => wrapFunctional(c.default || c)),
  BlogNotification: () => import('../..\\src\\components\\Blog\\Notification.vue' /* webpackChunkName: "components/blog-notification" */).then(c => wrapFunctional(c.default || c)),
  BlogPrevNext: () => import('../..\\src\\components\\Blog\\PrevNext.vue' /* webpackChunkName: "components/blog-prev-next" */).then(c => wrapFunctional(c.default || c)),
  BlogRating: () => import('../..\\src\\components\\Blog\\Rating.vue' /* webpackChunkName: "components/blog-rating" */).then(c => wrapFunctional(c.default || c)),
  BlogShare: () => import('../..\\src\\components\\Blog\\Share.vue' /* webpackChunkName: "components/blog-share" */).then(c => wrapFunctional(c.default || c)),
  NavbarBlog: () => import('../..\\src\\components\\Navbar\\Blog.vue' /* webpackChunkName: "components/navbar-blog" */).then(c => wrapFunctional(c.default || c)),
  NavbarDefault: () => import('../..\\src\\components\\Navbar\\Default.vue' /* webpackChunkName: "components/navbar-default" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
