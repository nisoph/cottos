<template>
  <div>
    <app-nav-admin></app-nav-admin>

    <b-container class="mt-3">
        <b-row>
            <b-col><h3 class="text-center">Panel de Administración</h3></b-col>
        </b-row>
    </b-container>

    <hr/>

    <b-container>
        <b-row>
            <b-col>

            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNavAdmin from '../../../components/AppNavAdmin';

export default {
  name: 'admin-home',
  components: {
    AppNavAdmin,
  },
  methods: {
    isLoggedIn() {
      // return isLoggedIn();
      return true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
