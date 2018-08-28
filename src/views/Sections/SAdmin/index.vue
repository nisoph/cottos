<template>
  <div>
    <app-nav-s-admin></app-nav-s-admin>
    <b-container>
      <b-row>
          <b-col>
            <b-card class="mt-3 mb-2" header-tag="header" header-bg-variant="white">
                  <h6 slot="header" class="mb-0">Lista de Cotos</h6>
                  <div class="card-text">
                    <b-table responsive striped hover :items="items">
                      <template slot="coto" slot-scope="data">
                        <a class="text-danger" href="#">{{data.value}}</a>
                      </template>
                      <template slot="telefono" slot-scope="data">
                        <a class="text-danger" :href="`tel:${data.value}`">{{data.value}}</a>
                      </template>
                      <template slot="correo" slot-scope="data">
                        <a class="text-danger" :href="`mailto:${data.value}`">{{data.value}}</a>
                      </template>
                    </b-table>
                    <hr />
                    <b-button class="btn-block" size="md" href="#" to="/sadmin/addCoto" variant="primary"><icon name="plus-square"></icon> Nuevo Coto</b-button>
                  </div>
            </b-card>
          </b-col>
      </b-row>
      <b-row>
          <b-col>
            <b-card class="mt-2 mb-2" header-tag="header" header-bg-variant="white" header-text-variant="bold">
                  <h6 slot="header" class="mb-0">Propiedades por Coto</h6>
                  <div class="card-text">
                    <hr />
                    <b-button class="btn-block" size="md" href="#" variant="primary"><icon name="plus"></icon> Detalles</b-button>
                  </div>
            </b-card>
          </b-col>
      </b-row>
      <b-row>
          <b-col>
            <b-card class="mt-2 mb-2" header-tag="header" header-bg-variant="white">
                  <h6 slot="header" class="mb-0">Publiciad por Coto</h6>
                  <div class="card-text">
                    <hr />
                    <b-button class="btn-block" size="md" href="#" variant="primary"><icon name="plus"></icon> Detalles</b-button>
                  </div>
            </b-card>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNavSAdmin from '../../../components/AppNavSAdmin';
import { getCotos } from '../../../utils/sadmin-api';

export default {
  name: 'sadmin-home',
  components: {
    AppNavSAdmin,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    getCotoList() {
      getCotos().then((res) => {
        this.items = res.cotos;
      });
    },
  },
  mounted() {
    this.getCotoList();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
