import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource';
Vue.use(VueResource);

import App from './App.vue'

const AllKontak = require('./assets/js/components/all-kontak.vue');
const CreateKontak = require('./assets/js/components/create-kontak.vue');
const EditKontak = require('./assets/js/components/edit-kontak.vue');
const DeleteKontak = require('./assets/js/components/delete-kontak.vue');

const routes = [
    {
        name: 'all_kontak',
        path: '/',
        component: AllKontak
    },
    {
        name: 'create_kontak',
        path: '/kontak/create',
        component: CreateKontak
    },
    {
        name: 'edit_kontak',
        path: '/kontak/edit/:id',
        component: EditKontak
    },
    {
        name: 'delete_kontak',
        path: '/kontak/delete/:id',
        component: DeleteKontak
    }
];
var router = new VueRouter({ routes: routes, mode: 'history' });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');