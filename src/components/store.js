import Vue from 'vue';
import Vuex from 'vuex';
import { getLSData } from '../app.config';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isLoggedIn: !!getLSData(),
  },
});

/**
 * TO Remove (Quick Fix)
 */
export const foo = '';
