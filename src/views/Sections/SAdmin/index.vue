<template>
  <div>
    <app-nav-s-admin></app-nav-s-admin>
    <b-container fluid>
      <b-row>
          <b-col>
            <b-card class="mt-4 mb-2" header-tag="header" header-bg-variant="white">
                  <h6 slot="header" class="mb-0">Lista de Cotos</h6>
                  <div class="card-text">
                    <b-table responsive striped hover :items="items" :fields="fields" @row-clicked="cotoDetails">
                      <template slot="nombrecompleto" slot-scope="data">
                        {{data.item.nombre}} {{data.item.apellido}}
                      </template>
                    </b-table>
                    <hr />
                    <b-button class="btn-block" size="md" href="#" to="/sadmin/addCoto" variant="primary"><icon name="plus-square"></icon> Nuevo Coto</b-button>
                  </div>
            </b-card>
          </b-col>
          <b-col>
            <b-card class="mt-4 mb-2" header-tag="header" header-bg-variant="white" header-text-variant="bold">
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
            <b-card class="mt-3 mb-2" header-tag="header" header-bg-variant="white">
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
      fields: [
        'id', 'coto', 'colonia', { key: 'nombrecompleto', label: 'Administrador' },
      ],
    };
  },
  methods: {
    getCotoList() {
      getCotos().then((res) => {
        this.items = res.cotos;
      });
    },
    cotoDetails(item) {
      const cotoInfo = item;
      this.$router.push({ name: 'sadmin-view-coto', params: { cotoId: cotoInfo.id } });
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
