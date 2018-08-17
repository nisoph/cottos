<template>
  <div>
    <app-nav-s-admin></app-nav-s-admin>

    <b-container class="mt-3">
        <b-row>
            <b-col><h3 class="text-center">Super Admin Dashboard</h3></b-col>
        </b-row>
    </b-container>

    <hr/>

    <b-container>
      <b-row>
          <b-col>
              <b-card header="Lista de Cotos" header-text-variant="white" header-tag="header" header-bg-variant="dark" align="center" header-class="h5 font-weight-bold">
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
                <b-button href="#" variant="primary"><icon name="plus-square"></icon> Nuevo Coto</b-button>
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
    fullName(value) {
      return `${value.nombre} ${value.apellido}`;
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
