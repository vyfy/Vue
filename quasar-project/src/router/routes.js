const routes = [
  {
    path: '/',
    component: () => import('layouts/SearchLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/test-info', component: () => import('pages/TestPage.vue') },
      { path: '/profile-post', component: () => import('pages/ProfilePage.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes // () => import('../pages/404')
