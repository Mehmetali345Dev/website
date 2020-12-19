export { default as SocialMedia } from '../..\\src\\components\\SocialMedia.vue'
export { default as PostCard } from '../..\\src\\components\\blog\\PostCard.vue'
export { default as Sidebar } from '../..\\src\\components\\blog\\Sidebar.vue'

export const LazySocialMedia = import('../..\\src\\components\\SocialMedia.vue' /* webpackChunkName: "components_SocialMedia" */).then(c => c.default || c)
export const LazyPostCard = import('../..\\src\\components\\blog\\PostCard.vue' /* webpackChunkName: "components_blog/PostCard" */).then(c => c.default || c)
export const LazySidebar = import('../..\\src\\components\\blog\\Sidebar.vue' /* webpackChunkName: "components_blog/Sidebar" */).then(c => c.default || c)
