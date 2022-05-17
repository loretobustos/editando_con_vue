import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Agregar from '../components/Agregar.vue'
import Editar from '../components/Editar.vue'
import Eliminar from '../components/Eliminar.vue'


const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            autenticado: true,
        }
    },
    {
        path: '/agregar',
        name: 'Agregar',
        component: Agregar,
        meta: {
            autenticado: true,
        }
    },
    {
        path: '/editar',
        name: 'Editar',
        component: Editar,
        meta: {
            autenticado: true,
        }
    },
    {
        path: '/eliminar',
        name: 'Eliminar',
        component: Eliminar,
        meta: {
            autenticado: true,
        }
    },
    {
        path: '/juguetes',
        name: 'Juguetes',
        component: Juguetes,
        meta: {
            autenticado: true,
        }
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router