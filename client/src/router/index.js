import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index';
import admin from '../store/Admin';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/author',
      name: 'author',
      component: () => import('../views/Author.vue'),
      meta: {
      }
    },

      {
        path: '/browse',
        name: 'browse',
        component: () => import('../views/Browse.vue'),
        meta: {
        }
      },
      {
        path: '/organization',
        name: 'organization',
        component: () => import('../views/Organization.vue'),
        meta: {
        }
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/Profile.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path:'/add-post',
        name:'add-post',
        component: () => import('../components/Createpost.vue'),
        meta : {
          requiresAuth:true
        }
      },
      {
      path:'/post-edit',
      name:'post-edit',
      component: () => import('../components/EditPost.vue')
      },
    {path:'/admin',
  name:admin,
component:()=> import('../views/Adminpanel.vue')
}]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/profile');
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router;