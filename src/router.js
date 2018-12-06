import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';
import {fb} from './firebase-config';

import Home from '@/views/Home';
import Edit from '@/views/Edit';
import Login from '@/views/Login';
import SignUp from '@/views/SignUp';
import Santa from '@/views/Santa';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit:wish',
      name: 'edit',
      component: Edit
    },
    {
      path: '/santa',
      name: 'Santa',
      component: Santa,
      meta: {
        requiresAuth: true
      }
    }
  ]
});


router.beforeEach((to, from, next) => {

  const currentUser = fb.auth().currentUser;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!currentUser) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
    else if (currentUser) {
      next()
    }
  }
  else {
    next() // make sure to always call next()!
  }
})

export default router;
