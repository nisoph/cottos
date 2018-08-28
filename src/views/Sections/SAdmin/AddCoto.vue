<template>
  <div>
    <app-nav-s-admin></app-nav-s-admin>
    <b-container>
      <b-row>
          <b-col>
              <b-card class="mt-3 mb-3" header-tag="header" footer-tag="footer" header-bg-variant="white">
                  <h6 slot="header" class="mb-0">Agregar Nuevo Coto</h6>
                  <div class="card-text">
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                      <b-form-group id="nombreCotoGroup" label="Nombre del Coto:" label-for="nombreCoto">
                        <b-form-input id="nombreCoto" type="text" v-model="form.nombreCoto" required placeholder="Nombre del nuevo Coto a dar de alta"></b-form-input>
                      </b-form-group>
                      <b-form-group id="direccionCotoGroup" label="Dirección:" label-for="direccionCoto">
                        <b-form-input id="direccionCoto" type="text" v-model="form.direccionCoto" required placeholder="Dirección del Coto"></b-form-input>
                      </b-form-group>
                      <b-form-group id="numeroExtCotoGroup" label="Número Exterior:" label-for="numeroExtCoto">
                        <b-form-input id="numeroExtCoto" type="text" v-model="form.numeroExtCoto" required placeholder="Número Exterior"></b-form-input>
                      </b-form-group>
                      <b-form-group id="coloniaCotoGroup" label="Colonia:" label-for="coloniaCoto">
                        <b-form-input id="coloniaCoto" type="text" v-model="form.coloniaCoto" required placeholder="Colonia"></b-form-input>
                      </b-form-group>
                      <b-form-group id="estadoCotoGroup" label="Estado:" label-for="estadoCoto">
                        <b-form-input id="estadoCoto" type="text" v-model="form.estadoCoto" required placeholder="Estado"></b-form-input>
                      </b-form-group>
                      <b-form-group id="ciudadCotoGroup" label="Ciudad:" label-for="ciudadCoto">
                        <b-form-input id="ciudadCoto" type="text" v-model="form.ciudadCoto" required placeholder="Ciudad"></b-form-input>
                      </b-form-group>
                      <b-form-group id="cpCotoGroup" label="Código Postal:" label-for="cpCoto">
                        <b-form-input id="cpCoto" type="number" v-model="form.cpCoto" required placeholder="Código Postal"></b-form-input>
                      </b-form-group>
                      <b-form-group id="telContactoCotoGroup" label="Teléfono de Contacto:" label-for="telContactoCoto">
                        <b-form-input id="telContactoCoto" type="number" v-model="form.telContactoCoto" required placeholder="Teléfono de Contacto"></b-form-input>
                      </b-form-group>
                      <b-form-group id="telEmergenciaCotoGroup" label="Teléfono de Emergencia:" label-for="telEmergenciaCoto">
                        <b-form-input id="telEmergenciaCoto" type="number" v-model="form.telEmergenciaCoto" required placeholder="Teléfono de Emergencia"></b-form-input>
                      </b-form-group>
                      <b-form-group id="adminCotoEmailGroup" label="Correo del Administrador:" label-for="adminCotoEmail">
                        <b-form-input id="adminCotoEmail" type="email" v-model="form.adminCotoEmail" required placeholder="Correo del Administrador"></b-form-input>
                      </b-form-group>
                      <b-form-group id="adminCotoPasswdGroup" label="Contraseña del Administrador:" label-for="adminCotoPasswd">
                        <b-form-input autocomplete="new-password" id="adminCotoPasswd" type="password" v-model="form.adminCotoPasswd" required placeholder="Contraseña del Administrador"></b-form-input>
                      </b-form-group>
                      <b-form-group id="imgCotoGroup" label="Logo del Coto:" label-for="imgCoto">
                        <b-form-file id="imgCoto" v-model="form.imgCoto" accept="image/*" required placeholder="Seleccionar Logo..."></b-form-file>
                      </b-form-group>
                      <b-button type="submit" class="mt-4 btn-block" size="md" variant="primary"><icon name="check"></icon> Crear</b-button>
                      <b-button type="reset" class="mb-2 btn-block" size="md" variant="danger"><icon name="eraser"></icon> Borrar</b-button>
                    </b-form>
                  </div>
              </b-card>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNavSAdmin from '../../../components/AppNavSAdmin';
import { addCoto } from '../../../utils/sadmin-api';

export default {
  name: 'sadmin-add-coto',
  components: {
    AppNavSAdmin,
  },
  data() {
    return {
      form: {
        nombreCoto: '',
        direccionCoto: '',
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      addCoto(this.form).then((res) => {
        // console.log(res);
        this.nombreCoto = res;
      },
        (err) => {
          this.nombreCoto = err;
        },
      );
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.nombreCoto = '';
      this.form.direccionCoto = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
