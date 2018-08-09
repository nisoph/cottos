import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/views/Login/index';
import Unauthorized from '@/views/Unauthorized/index';
import Profile from '@/views/Profile/index';
import ResidentHome from '@/views/Sections/Resident/Home/index';
import ResidentNotifications from '@/views/Sections/Resident/Notifications/index';
import ResidentPromotions from '@/views/Sections/Resident/Promotions/index';
import ResidentBookings from '@/views/Sections/Resident/Bookings/index';
import ResidentRegulation from '@/views/Sections/Resident/Regulation/index';
import ResidentReports from '@/views/Sections/Resident/Reports/index';
import SAdminHome from '@/views/Sections/SAdmin/index';
import AdminHome from '@/views/Sections/Admin/index';
import SecurityHome from '@/views/Sections/Security/index';

import { ID_TOKEN_KEY, ROLE_SADMIN, ROLE_ADMIN, ROLE_RESIDENT, ROLE_SECURITY } from '../app.config';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: Unauthorized,
  },
  {
    path: '/info/profile',
    name: 'info-profile',
    component: Profile,
    meta: {
      requiresAuth: true,
      sAdminAuth: true,
      adminAuth: true,
      residentAuth: true,
      securityAuth: true },
  },
  {
    path: '/resident/home',
    name: 'resident-home',
    component: ResidentHome,
    meta: {
      requiresAuth: true,
      sAdminAuth: false,
      adminAuth: false,
      residentAuth: true,
      securityAuth: false },
  },
  {
    path: '/resident/notifications',
    name: 'resident-notifications',
    component: ResidentNotifications,
    meta: {
      requiresAuth: true,
      sAdminAuth: false,
      adminAuth: false,
      residentAuth: true,
      securityAuth: false },
  },
  {
    path: '/resident/promotions',
    name: 'resident-promotions',
    component: ResidentPromotions,
    meta: {
      requiresAuth: true,
      sAdminAuth: false,
      adminAuth: false,
      residentAuth: true,
      securityAuth: false },
  },
  {
    path: '/resident/bookings',
    name: 'resident-bookings',
    component: ResidentBookings,
    meta: {
      requiresAuth: true,
      sAdminAuth: false,
      adminAuth: false,
      residentAuth: true,
      securityAuth: false },
  },
  {
    path: '/resident/regulation',
    name: 'resident-regulation',
    component: ResidentRegulation,
    meta: {
      requiresAuth: true,
      sAdminAuth: false,
      adminAuth: false,
      residentAuth: true,
      securityAuth: false },
  },
  {
    path: '/resident/reports',
    name: 'resident-reports',
    component: ResidentReports,
    meta: {
      requiresAuth: true,
      sAdminAuth: false,
      adminAuth: false,
      residentAuth: true,
      securityAuth: false },
  },
  {
    path: '/sadmin/home',
    name: 'sadmin-home',
    component: SAdminHome,
    meta: {
      requiresAuth: true,
      sAdminAuth: true,
      adminAuth: false,
      residentAuth: false,
      securityAuth: false },
  },
  {
    path: '/admin/home',
    name: 'admin-home',
    component: AdminHome,
    meta: {
      requiresAuth: true,
      sAdminAuth: false,
      adminAuth: true,
      residentAuth: false,
      securityAuth: false },
  },
  {
    path: '/security/home',
    name: 'security-home',
    component: SecurityHome,
    meta: {
      requiresAuth: true,
      sAdminAuth: false,
      adminAuth: false,
      residentAuth: false,
      securityAuth: true },
  },
];

const router = new Router({ routes, mode: 'history' });

router.beforeEach((to, from, next) => {
  const authUser = JSON.parse(window.localStorage.getItem(ID_TOKEN_KEY));
  if (to.meta.requiresAuth) {
    if (!authUser || !authUser.token) {
      next({ name: 'login' });
    } else if (to.meta.sAdminAuth && authUser.data.role === ROLE_SADMIN) {
      next();
    } else if (to.meta.adminAuth && authUser.data.role === ROLE_ADMIN) {
      next();
    } else if (to.meta.residentAuth && authUser.data.role === ROLE_RESIDENT) {
      next();
    } else if (to.meta.securityAuth && authUser.data.role === ROLE_SECURITY) {
      next();
    } else {
      next('/unauthorized');
    }
  } else {
    next();
  }
});

export default router;
