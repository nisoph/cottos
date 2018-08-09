<template>
  <b-navbar toggleable="md" type="dark" variant="dark" sticky>
    <b-navbar-brand href="#" to="/">
      <img src="../assets/nisoph_logo.png" class="d-inline-block align-top" alt="Konddos"> <span>Konddos</span>
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto text-right">
        <div class="logo d-md-none d-lg-none d-xl-none"></div>
        <!-- <b-nav-item href="#" to="/"><icon name="home"></icon> Inicio</b-nav-item> -->
        <b-nav-item href="#" to="/info/profile"><icon name="user"></icon> Perfil</b-nav-item>
        <b-nav-item href="#" to="/resident/notifications"><icon name="bell"></icon> Avisos <b-badge variant="danger" style="vertical-align: super;">2</b-badge></b-nav-item>
        <b-nav-item href="#" to="/resident/promotions"><icon name="shopping-bag"></icon> Servicios</b-nav-item>
        <b-nav-item href="#" to="/resident/bookings"><icon name="calendar"></icon> Reservar</b-nav-item>
        <b-nav-item href="#" to="/resident/regulation"><icon name="gavel"></icon> Reglamentos</b-nav-item>
        <b-nav-item href="#" to="/resident/reports"><icon name="file"></icon> Reportes</b-nav-item>
        <div class="logo d-md-none mb-2 d-lg-none d-xl-none"></div>
        <b-button variant="danger" size="sm" type="submit"><icon name="exclamation-triangle"></icon> Emergencia</b-button>
        <div class="logo d-md-none mt-2 d-lg-none d-xl-none"></div>
        <b-nav-item href="#" @click="handleLogout()" v-if="isLoggedIn"><icon name="sign-out"></icon> Salir</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { isLoggedIn, logout } from '../utils/auth';

export default {
  name: 'app-nav',
  methods: {
    handleLogout() {
      logout();
      this.$router.push('/');
    },
    isLoggedIn() {
      return isLoggedIn();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>

.logo {
  border-bottom: 1px solid hsla(0,0%,100%,.2);
}

</style>
