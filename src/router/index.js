import Vue from 'vue'
import Router from 'vue-router'

const TimeLine = resolve => {
  import('components/time-line/time-line').then(module => {
    resolve(module)
  })
}
const Contact = resolve => {
  import('components/contact/contact').then(module => {
    resolve(module)
  })
}
const Design = resolve => {
  import('components/design/design').then(module => {
    resolve(module)
  })
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/timeline'
    },
    {
      path: '/timeline',
      component: TimeLine
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/design',
      component: Design
    }
  ]
})
