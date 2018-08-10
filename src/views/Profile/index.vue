<template>
  <div>
    <app-nav v-if="isResidentRole()"></app-nav>
    <app-nav-simple v-if="!isResidentRole()"></app-nav-simple>

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
                  <b-img v-if="profileImgUrl" center rounded="circle" thumbnail fluid :src="profileImgUrl" alt="Thumbnail" />
                  <b-img v-if="!profileImgUrl" center rounded="circle" thumbnail fluid src="https://picsum.photos/150/150/?image=58" alt="Thumbnail" />
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-table stacked :items="profileInfo"></b-table>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="mb-3">
                  <b-button class="btn-block" size="md" variant="danger" disabled>Editar</b-button>
                </b-col>
              </b-row>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNav from '../../components/AppNav';
import AppNavSimple from '../../components/AppNavSimple';
import { isSuperAdmin, isResidentAdmin, isResident, isResidentSecurity } from '../../utils/auth-api';
import { getProfile } from '../../utils/info-api';

export default {
  name: 'info-profile',
  components: {
    AppNav, AppNavSimple,
  },
  data() {
    return {
      profileInfo: [
        { first_name: '', last_name: '', email: '', password: '********' },
      ],
      profileImgUrl: '',
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
        this.profileInfo[0].first_name = profile.user.first_name;
        this.profileInfo[0].last_name = profile.user.last_name;
        this.profileInfo[0].email = profile.user.email;
        this.profileImgUrl = profile.user.profile_img;
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
