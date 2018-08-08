<template>
  <div>
    <app-nav></app-nav>

    <b-container class="mt-3">
        <b-row>
            <b-col><h3 class="text-center">Unauthorized</h3></b-col>
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
import AppNav from '../../components/AppNav';

export default {
  name: 'unauthorized',
  components: {
    AppNav,
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
