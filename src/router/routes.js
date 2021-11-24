
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/Comprar', component: () => import('pages/Comprar.vue') },
      { path: '/Vender', component: () => import('pages/Vender.vue') },
      { path: '/Produto', component: () => import('pages/Produto.vue') },
      { path: '/Estoque', component: () => import('pages/Estoque.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
