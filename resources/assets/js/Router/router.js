import Vue from 'Vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '../components/login/Login';
import Logout from '../components/login/Logout';
import Signup from '../components/login/Signup';
import Forum from '../components/forum/Forum';
import Read from '../components/forum/Read';
import Create from '../components/forum/Create';
import CreateCategory from '../components/category/CreateCategory';

const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/question/:slug', component: Read, name: 'read' },
    { path: '/ask', component: Create, name: 'create' },
    { path: '/category', component: CreateCategory, name: 'create-category' },
];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
});

export default router;