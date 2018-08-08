import Vue from 'vue';
import Vuex from 'vuex';
import { ID_TOKEN_KEY } from '../app.config';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem(ID_TOKEN_KEY),
  },
});

/**
 * TO Remove (Quick Fix)
 */
export const foo = '';
