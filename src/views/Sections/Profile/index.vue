<template>
  <div>
    <app-nav v-if="isResidentRole"></app-nav>
    <app-nav-simple v-if="!isResidentRole"></app-nav-simple>

    <b-container class="mt-3">
        <b-row>
            <b-col><h3 class="text-center">Mi Perfil</h3></b-col>
        </b-row>
    </b-container>

    <hr/>

    <b-container>
        <b-row>
            <b-col>
              <b-row>
                <b-col class="mb-3">
                  <b-img center rounded="circle" thumbnail fluid src="https://picsum.photos/150/150/?image=58" alt="Thumbnail" />
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-table stacked :items="items"></b-table>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="mb-3">
                  <b-button class="btn-block" size="md" variant="danger">Editar</b-button>
                </b-col>
              </b-row>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNav from '../../../components/AppNav';
import AppNavSimple from '../../../components/AppNavSimple';
import { isSuperAdmin, isResidentAdmin, isResident, isResidentSecurity } from '../../../utils/auth';

export default {
  name: 'profile',
  components: {
    AppNav, AppNavSimple,
  },
  data() {
    return {
      items: [
        { first_name: 'Erik', last_name: 'Macias', email: 'erik.macias@gmail.com', password: '********' },
      ],
    };
  },
  methods: {
    isSAdminRole() {
      return isSuperAdmin();
    },
    isAdminRole() {
      return isResidentAdmin();
    },
    isResidentRole() {
      return isResident();
    },
    isSecurityRole() {
      return isResidentSecurity();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
