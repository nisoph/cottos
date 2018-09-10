<template>
  <div>
    <app-nav-s-admin></app-nav-s-admin>
    <b-container fluid v-if="infoLoaded">
      <b-row>
        <b-col class="mb-3 mt-3">
          <b-img v-if="coto_logo" center rounded="circle" thumbnail fluid :src="coto_logo" alt="Thumbnail" />
          <b-img v-else center rounded="circle" thumbnail fluid src="https://picsum.photos/150/150/?image=58" alt="Thumbnail" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table stacked :items="items" :fields="fields">
            <template slot="direcccioncompleta" slot-scope="data">
              {{data.item.direccion}} #{{data.item.numero_ext}}, Col. {{data.item.colonia}}, 
              C.P. {{data.item.cp}}, {{data.item.ciudad}}, {{data.item.estado}}.
            </template>
            <template slot="propiedades" slot-scope="data">
              {{data.item.no_propiedades}}
            </template>
            <template slot="tel_contacto" slot-scope="data">
              <a class="text-danger" :href="`tel:${data.value}`">{{data.value}}</a>
            </template>
            <template slot="tel_emergencia" slot-scope="data">
              <a class="text-danger" :href="`tel:${data.value}`">{{data.value}}</a>
            </template>
            <template slot="email" slot-scope="data">
              <a class="text-danger" :href="`mailto:${data.value}`">{{data.value}}</a>
            </template>
            <template slot="administrador" slot-scope="data">
              {{data.item.nombre}} {{data.item.apellido}}
            </template>
            <template slot="estatus" slot-scope="data">
              <span v-if="data.item.status === 0">Inactivo</span>
              <span v-else>Activo</span>
            </template>
          </b-table>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mb-3">
          <b-button class="btn-block" size="md" variant="primary" disabled>Editar</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNavSAdmin from '../../../components/AppNavSAdmin';
import { getCoto } from '../../../utils/sadmin-api';

export default {
  name: 'sadmin-view-coto',
  components: {
    AppNavSAdmin,
  },
  data() {
    return {
      items: [],
      fields: [
        'id', 'coto', { key: 'direcccioncompleta', label: 'Dirección' }, { key: 'propiedades', label: 'Propiedades' },
        { key: 'estatus', label: 'Estatus' }, 'creado', { key: 'administrador', label: 'Administrador' },
        'tel_contacto', 'tel_emergencia', 'email',
      ],
      cotoId: '',
      coto_logo: '',
      infoLoaded: false,
    };
  },
  methods: {
    getCoto() {
      this.cotoId = this.$route.params.cotoId;
      getCoto(this.cotoId).then((res) => {
        this.items = res.coto;
        this.coto_logo = this.items[0].coto_img;
        this.infoLoaded = true;
      });
    },
  },
  mounted() {
    this.getCoto(this.cotoId);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
