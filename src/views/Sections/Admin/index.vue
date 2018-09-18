<template>
  <div>
    <app-nav-admin></app-nav-admin>

    <b-container fluid>
      <b-row>
        <b-col>
          <b-card class="mt-4 mb-2" header-tag="header" header-bg-variant="white">
            <h6 slot="header" class="mb-0">Adeudos</h6>
            <div class="card-text">
              <hr />
              <b-button class="btn-block" size="md" href="#" variant="success"><icon name="money"></icon> Agregar Pago</b-button>
            </div>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="mt-4 mb-2" header-tag="header" header-bg-variant="white">
            <h6 slot="header" class="mb-0">Incidentes</h6>
            <div class="card-text">
              <hr />
              <b-button class="btn-block" size="md" href="#" variant="primary"><icon name="plus"></icon> Nuevo</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card class="mt-4 mb-2" header-tag="header" header-bg-variant="white">
            <h6 slot="header" class="mb-0">Eventos</h6>
            <div class="card-text">
              <hr />
              <b-button class="btn-block" size="md" href="#" variant="primary"><icon name="plus"></icon> Nuevo</b-button>
            </div>
          </b-card>
        </b-col>
        <b-col>
        <b-card class="mt-4 mb-2" header-tag="header" header-bg-variant="white">
          <h6 slot="header" class="mb-0">Avisos</h6>
          <div class="card-text">
            <hr />
            <b-button class="btn-block" size="md" href="#" variant="primary"><icon name="plus"></icon> Nuevo</b-button>
          </div>
        </b-card>
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
