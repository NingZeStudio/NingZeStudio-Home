import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { updateSeoMeta } from '@/lib/useSeoMeta'
import { siteConfig } from '@/lib/config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: ['/index', '/index.html'],
      name: 'home',
      component: HomeView,
      meta: { title: '首页' }
    },
    {
      path: '/projects',
      alias: ['/projects/index', '/projects/index.html'],
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
      meta: { title: '项目矩阵' }
    },
    {
      path: '/community',
      alias: ['/community/index', '/community/index.html'],
      name: 'community',
      component: () => import('@/views/CommunityView.vue'),
      meta: { title: '社区交流' }
    },
    {
      path: '/about',
      alias: ['/about/index', '/about/index.html'],
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { title: '关于团队' }
    },
    {
      path: '/sponsor',
      alias: ['/sponsor/index', '/sponsor/index.html'],
      name: 'sponsor',
      component: () => import('@/views/SponsorView.vue'),
      meta: { title: '赞助支持' }
    },
    {
      path: '/showcase',
      alias: ['/showcase/index', '/showcase/index.html'],
      name: 'showcase',
      component: () => import('@/views/ShowcaseView.vue'),
      meta: { title: '范式展台' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { title: '404' }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, _from, next) => {
  const rawPath = to.path

  // 处理带有 /index.html 或 /index 或 .html 后缀的访问
  if (
    rawPath !== '/' &&
    (rawPath.endsWith('/index.html') ||
      rawPath.endsWith('/index') ||
      rawPath.endsWith('.html') ||
      rawPath === '/index.html' ||
      rawPath === '/index')
  ) {
    let cleanPath = rawPath
      .replace(/\/(?:index(?:\.html)?)[\/]?$/i, '')
      .replace(/\.html$/i, '')
    if (!cleanPath) cleanPath = '/'
    return next({ path: cleanPath, query: to.query, hash: to.hash, replace: true })
  }

  const title = (to.meta.title as string) || '页面'
  updateSeoMeta({ title }, siteConfig.name)
  next()
})

export default router
