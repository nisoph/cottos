import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home/index';
import Notifications from '@/views/Notifications/index';
import Profile from '@/views/Profile/index';
import Promotions from '@/views/Promotions/index';
import Bookings from '@/views/Bookings/index';
import Regulation from '@/views/Regulation/index';
import Reports from '@/views/Reports/index';
import WebChat from '@/views/WebChat/index';

import PrivateInfo from '@/components/privateInfo';
import PublicInfo from '@/components/publicInfo';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notifications,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/promotions',
      name: 'promotions',
      component: Promotions,
    },
    {
      path: '/bookings',
      name: 'bookings',
      component: Bookings,
    },
    {
      path: '/regulation',
      name: 'regulation',
      component: Regulation,
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports,
    },
    {
      path: '/chat',
      name: 'chat',
      component: WebChat,
    },
    {
      path: '/public-info',
      name: 'PublicInfo',
      component: PublicInfo,
    },
    {
      path: '/private-info',
      name: 'PrivateInfo',
      component: PrivateInfo,
    },
  ],
});
