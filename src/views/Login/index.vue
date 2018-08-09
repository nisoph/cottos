<template>
  <b-form class="form-signin" validated @submit="onSubmit" v-if="show">
    <div class="text-center">
      <img class="mb-4" src="../../../static/img/icons/apple-icon-114x114.png" alt="" width="72" height="72">
      <h3 class="mb-4 text-muted">Inicio de Sesión</h3>
    </div>
    <b-form-group 
                id="exampleInputGroup1"
                label="Email:" label-for="email" class="text-muted font-weight-bold"
                invalid-feedback="Ingresa un Email correcto">
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
    <b-button class="btn-block" type="submit" size="lg" variant="primary">Entrar</b-button>
  </b-form>
</template>

<script>
import { login } from '../../utils/auth';
import { ID_TOKEN_KEY, ROLE_SADMIN, ROLE_ADMIN, ROLE_SECURITY } from '../../app.config';

export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      loginError: true,
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      login(this.form).then((res) => {
        const authUser = {};
        const app = this;
        if (res.auth) {
          authUser.auth = res.auth;
          authUser.token = res.token;
          authUser.data = res.user_info;
          app.$store.state.isLoggedIn = true;
          window.localStorage.setItem(ID_TOKEN_KEY, JSON.stringify(authUser));
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
        }
      });
    },
    loginAuth() {
      const app = this;
      const status = JSON.parse(window.localStorage.getItem(ID_TOKEN_KEY));
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
