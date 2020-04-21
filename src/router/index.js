/* eslint-disable eol-last */
/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import adm from '@/components/adm'
import verify from '@/components/verify'
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
    }]
})