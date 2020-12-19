import Vue from 'vue'
import NuxtContent from './nuxt-content'
import QueryBuilder from './query-builder'

Vue.component(NuxtContent.name, NuxtContent)

export default (ctx, inject) => {
  const $content = function () {
    let options
    const paths = []
    Array.from(arguments).forEach((argument) => {
      if (typeof argument === 'string') {
        paths.push(argument)
      } else if (typeof argument === 'object') {
        options = argument
      }
    })

    let path = paths.join('/').replace(/\/+/g, '/')
    if (!path.startsWith('/')) {
      path = `/${path}`
    }

    return new QueryBuilder(`/_content${path}`, options)
  }

  inject('content', $content)
  ctx.$content = $content
}
