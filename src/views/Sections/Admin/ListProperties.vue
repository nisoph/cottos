<template>
  <div>
    <app-nav-admin></app-nav-admin>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-card class="mt-4 mb-2" header-tag="header" header-bg-variant="white">
            <h6 slot="header" class="mb-0">Lista de Propiedades</h6>
            <div class="card-text">
              <b-table responsive striped hover :items="items" :fields="fields" @row-clicked="propertyDetails">
              </b-table>
              <hr />
              <b-button class="btn-block" size="md" href="#" to="/admin/addProp" variant="primary"><icon name="plus-square"></icon> Nueva Propiedad</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNavAdmin from '../../../components/AppNavAdmin';
import { getProperties } from '../../../utils/admin-api';

export default {
  name: 'admin-list-propierties',
  components: {
    AppNavAdmin,
  },
  data() {
    return {
      items: [],
      fields: [
        'calle', 'numero_int',
      ],
    };
  },
  methods: {
    getPropertiesList() {
      getProperties().then((res) => {
        this.items = res.properties;
      });
    },
    propertyDetails(item) {
      const propertyInfo = item;
      this.$router.push({ name: 'admin-view-property', params: { propertyId: propertyInfo.id } });
    },
  },
  mounted() {
    this.getPropertiesList();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
