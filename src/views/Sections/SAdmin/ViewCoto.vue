<template>
  <div>
    <app-nav-s-admin></app-nav-s-admin>
    <b-container fluid>
      <b-row>
          <b-col>
            <b-table stacked :items="items">
            </b-table>
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
      cotoId: '',
    };
  },
  methods: {
    getCoto() {
      this.cotoId = this.$route.params.cotoId;
      getCoto(this.cotoId).then((res) => {
        this.items = res.coto;
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
