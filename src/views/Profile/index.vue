<template>
  <div>
    <app-nav v-if="isResidentRole()"></app-nav>
    <app-nav-s-admin v-else-if="isSAdminRole()"></app-nav-s-admin>
    <app-nav-admin v-else-if="isAdminRole()"></app-nav-admin>
    <app-nav-simple v-else></app-nav-simple>

    <b-container class="mt-3">
      <b-row>
        <b-col><h3 class="text-center">Mi Perfil</h3></b-col>
      </b-row>
    </b-container>

    <hr/>

    <b-container>
      <b-row v-if="profileLoaded">
        <b-col>
          <b-row>
            <b-col class="mb-3">
              <b-img v-if="profileImgUrl" center rounded="circle" thumbnail fluid :src="profileImgUrl" alt="Thumbnail" />
              <b-img v-else center rounded="circle" thumbnail fluid src="https://picsum.photos/150/150/?image=58" alt="Thumbnail" />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-table stacked :items="profileInfo"></b-table>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="mb-3">
              <b-button class="btn-block" size="md" variant="primary" disabled>Editar</b-button>
            </b-col>
          </b-row>
        </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNav from '../../components/AppNav';
import AppNavSAdmin from '../../components/AppNavSAdmin';
import AppNavAdmin from '../../components/AppNavAdmin';
import AppNavSimple from '../../components/AppNavSimple';
import { isSuperAdmin, isResidentAdmin, isResident, isResidentSecurity } from '../../utils/auth-api';
import { getProfile } from '../../utils/info-api';

export default {
  name: 'info-profile',
  components: {
    AppNav, AppNavSAdmin, AppNavAdmin, AppNavSimple,
  },
  data() {
    return {
      profileInfo: [
        { nombre: '', apellido: '', email: '', password: '********' },
      ],
      profileImgUrl: '',
      profileLoaded: false,
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
    getProfileInfo() {
      getProfile().then((profile) => {
        this.profileInfo[0].nombre = profile.user.nombre;
        this.profileInfo[0].apellido = profile.user.apellido;
        this.profileInfo[0].email = profile.user.email;
        this.profileImgUrl = profile.user.perfil_img;
        this.profileLoaded = true;
      });
    },
  },
  mounted() {
    this.getProfileInfo();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
