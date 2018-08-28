<template>
  <b-container>
    <b-row>
      <b-col class="mt-5">
        <b-card class="mt-4 mb-2" header-bg-variant="white">
          <div class="card-text">
            <b-form class="form-signin" @submit="onSubmit" v-if="show">
            <b-alert variant="danger" dismissible :show="loginError" @dismissed="true">{{this.errMessage}}</b-alert>
            <div class="text-center">
              <img class="mb-4" src="../../assets/konddify_logo.png" alt="" height="72">
              <h3 class="mb-4 mt-5 text-muted">Inicio de Sesión</h3>
            </div>
                <b-form-group 
                        id="exampleInputGroup1"
                        label="Email:" label-for="email" class="text-muted font-weight-bold">
                  <b-form-input 
                          id="email"
                          class="form-control"
                          type="email" 
                          v-model="form.email" 
                          required 
                          placeholder="Email para acceso">
                  </b-form-input>
                </b-form-group>
                <b-form-group 
                        id="exampleInputGroup2"
                        label="Contraseña:" 
                        label-for="password" class="text-muted font-weight-bold">
                  <b-form-input 
                            id="password" 
                            class="form-control"
                            type="password" 
                            v-model="form.password" 
                            required 
                            placeholder="Contraseña de acceso">
                  </b-form-input>
                </b-form-group>
                <b-button class="btn-block" type="submit" size="lg" variant="primary" :disabled="isLoading"><icon name="check"></icon>  {{btnLabel}}</b-button>
              </b-form>
              </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { login } from '../../utils/auth-api';
import { getJSONLSData, ID_LS_KEY, ROLE_SADMIN, ROLE_ADMIN, ROLE_SECURITY } from '../../app.config';

export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      loginError: false,
      errMessage: '',
      show: true,
      isLoading: false,
      btnLabel: 'Entrar',
    };
  },
  methods: {
    onSubmit(evt) {
      this.isLoading = true;
      this.btnLabel = 'Verificando...';
      evt.preventDefault();
      login(this.form).then((res) => {
        const authUser = {};
        const app = this;
        if (res.auth) {
          authUser.auth = res.auth;
          authUser.token = res.token;
          authUser.data = res.user_info;
          app.$store.state.isLoggedIn = true;
          window.localStorage.setItem(ID_LS_KEY, JSON.stringify(authUser));
          if (authUser.data.role === ROLE_SADMIN) {
            app.$router.push('/sadmin/home');
          } else if (authUser.data.role === ROLE_ADMIN) {
            app.$router.push('/admin/home');
          } else if (authUser.data.role === ROLE_SECURITY) {
            app.$router.push('/security/home');
          } else {
            app.$router.push('/resident/home');
          }
        } else {
          app.$store.state.isLoggedIn = false;
          this.loginError = true;
          this.errMessage = res.message;
          this.isLoading = false;
          this.btnLabel = 'Entrar';
        }
      },
        (err) => {
          this.loginError = true;
          this.errMessage = err.message;
          this.isLoading = false;
          this.btnLabel = 'Entrar';
        },
      );
    },
    loginAuth() {
      const app = this;
      const status = getJSONLSData();
      if (status === null || status === undefined) {
        app.$router.push('/');
      } else if (status.data.role === ROLE_SADMIN) {
        app.$router.push('/sadmin/home');
      } else if (status.data.role === ROLE_ADMIN) {
        app.$router.push('/admin/home');
      } else if (status.data.role === ROLE_SECURITY) {
        app.$router.push('/security/home');
      } else {
        app.$router.push('/resident/home');
      }
    },
  },
  created() {
    this.loginAuth();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import './style.css';
</style>
