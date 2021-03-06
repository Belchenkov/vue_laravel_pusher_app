
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(Vuetify);

// Markdown
import md from 'marked';
window.md = md;

import User from './Helpers/User';
window.User = User;
window.EventBus = new Vue();

Vue.component('app-home', require('./components/AppHome.vue'));

import router from './Router/router';

const app = new Vue({
    el: '#app',
    router
});
