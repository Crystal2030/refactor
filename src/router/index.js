import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import home from '@/components/home/home.vue';
import product from '@/components/product/product.vue';
import service from '@/components/service/service.vue';
import training from '@/components/training/training.vue';
import about from '@/components/about/about.vue';

import '@/common/scss/index.scss';

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/product',
      component: product
    },
    {
      path: '/service',
      component: service
    },
    {
      path: '/training',
      component: training
    },
    {
      path: '/about',
      component: about
    }
  ]
});
