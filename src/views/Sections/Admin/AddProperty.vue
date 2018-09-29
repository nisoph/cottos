<template>
  <div>
    <app-nav-admin></app-nav-admin>
    <b-container>
      <b-row>
        <b-col>
          <b-card class="mt-3 mb-3" header-tag="header" footer-tag="footer" header-bg-variant="white">
            <h6 slot="header" class="font-weight-bold mb-0">Agregar Nueva Propiedad</h6>
            <div class="card-text">
              <b-form enctype="multipart/form-data" @submit="onSubmit" v-if="show">
                <b-form-group horizontal breakpoint="lg" label="Datos del Coto" label-size="md" label-class="font-weight-bold pt-0" class="mb-0">
                  <b-form-group horizontal id="nombreCotoGroup" label="Nombre del Coto:" label-for="nombreCoto">
                    <b-form-input id="nombreCoto" type="text" v-model="form.nombreCoto" disabled></b-form-input>
                  </b-form-group>
                   <b-form-group horizontal id="callePropCotoGroup" label="Calle Interior:" label-for="callePropCoto">
                    <b-form-input id="callePropCoto" type="text" v-model="form.callePropCoto"></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="numeroPropCotoGroup" label="Número Interior:" label-for="numeroPropCoto">
                    <b-form-input id="numeroPropCoto" type="text" v-model="form.numeroPropCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="terrenoPropMtsGroup" label="Terreno mts:" label-for="terrenoPropMts">
                    <b-form-input id="terrenoPropMts" type="number" v-model="form.terrenoPropMts" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="construccionPropMtsGroup" label="Construcción mts:" label-for="construccionPropMts">
                    <b-form-input id="construccionPropMts" type="number" v-model="form.construccionPropMts" required></b-form-input>
                  </b-form-group>
                </b-form-group>
                <hr>
                <b-form-group horizontal breakpoint="lg" label="Datos del Propietario/Residente" label-size="md" label-class="font-weight-bold pt-0" class="mb-0">
                  <b-form-group horizontal id="nombrePropCotoGroup" label="Nombre:" label-for="nombrePropCoto">
                    <b-form-input id="nombrePropCoto" type="text" v-model="form.nombrePropCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="apellidoPropCotoGroup" label="Apellido:" label-for="apellidoPropCoto">
                    <b-form-input id="apellidoPropCoto" type="text" v-model="form.apellidoPropCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="propCotoEmailGroup" label="Correo:" label-for="propCotoEmail">
                    <b-form-input id="propCotoEmail" type="email" v-model="form.propCotoEmail" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="propCotoPasswdGroup" label="Contraseña:" label-for="propCotoPasswd">
                    <b-form-input id="propCotoPasswd" type="text" value="Enviada al correo del propietario/residente." disabled></b-form-input>
                  </b-form-group>
                </b-form-group>
                <b-button type="submit" class="mt-4 btn-block" size="md" variant="primary"><icon name="check"></icon> Crear</b-button>
                <b-button class="mb-2 btn-block" size="md" variant="danger" href="#" to="/sadmin/home"><icon name="ban"></icon> Cancelar</b-button>
              </b-form>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNavAdmin from '../../../components/AppNavAdmin';
import { getCotoInfo } from '../../../utils/admin-api';

export default {
  name: 'admin-add-property',
  components: {
    AppNavAdmin,
  },
  data() {
    return {
      form: {
        imgCoto: '',
        nombreCoto: '',
      },
      show: true,
    };
  },
  methods: {
    getCotoInformation() {
      getCotoInfo().then((cotoInfo) => {
        this.form.nombreCoto = cotoInfo.coto.nombre;
      });
    },
    onSubmit(evt) {
      evt.preventDefault();
      /* const formData = new FormData(this.form);
      formData.append('nombreCoto', this.form.nombreCoto);
      formData.append('direccionCoto', this.form.direccionCoto);
      formData.append('numeroExtCoto', this.form.numeroExtCoto);
      formData.append('coloniaCoto', this.form.coloniaCoto);
      formData.append('estadoCoto', this.form.estadoCoto);
      formData.append('ciudadCoto', this.form.ciudadCoto);
      formData.append('cpCoto', this.form.cpCoto);
      formData.append('telContactoCoto', this.form.telContactoCoto);
      formData.append('telEmergenciaCoto', this.form.telEmergenciaCoto);
      formData.append('imgCoto', this.form.imgCoto);
      formData.append('nombreAdminCoto', this.form.nombreAdminCoto);
      formData.append('apellidoAdminCoto', this.form.apellidoAdminCoto);
      formData.append('adminCotoEmail', this.form.adminCotoEmail); */

      /* addCoto(formData).then((res) => {
        const app = this;
        if (res.success) {
          app.$router.push('/admin/home');
        } else {
          // console.log('ERROR');
          // console.log(res.message);
        }
      },

      ); */
    },
  },
  mounted() {
    this.getCotoInformation();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
