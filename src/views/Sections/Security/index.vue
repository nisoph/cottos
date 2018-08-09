<template>
  <div>
    <app-nav-simple></app-nav-simple>

    <b-container class="mt-3">
        <b-row>
            <b-col><h3 class="text-center">Panel de Seguridad</h3></b-col>
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
import AppNavSimple from '../../../components/AppNavSimple';

export default {
  name: 'security-home',
  components: {
    AppNavSimple,
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
