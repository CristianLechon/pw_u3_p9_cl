// Aqui es donde se crea toda la configuracion por defecto
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import HolaMundo from '@/views/HolaMundo.vue';
import PokemonView from '@/views/PokemonView.vue';

const routes = [
  // carga iger
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // carga peresoza (lazy-loaded)
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hola',
    name: 'hola',
    component: HolaMundo
  },
  {
    path: '/pregunta',
    name: 'pregunta',
    component: () => import('../views/PreguntaView.vue')
  },
   {
    path: '/pokemon',
    name: 'pokemon',
    component: PokemonView
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router