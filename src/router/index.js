/* eslint-disable eol-last */
/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import adm from '@/components/adm'
import verify from '@/components/verify'
import Login from '@/components/login'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'adm',
        component: adm
    }, {
        path: '/verify',
        name: 'verify',
        component: verify
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }
]
})