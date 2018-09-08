<template>
  <div>
    <app-nav-s-admin></app-nav-s-admin>
    <b-container>
      <b-row>
        <b-col>
          <b-card class="mt-3 mb-3" header-tag="header" footer-tag="footer" header-bg-variant="white">
            <h6 slot="header" class="font-weight-bold mb-0">Agregar Nuevo Coto</h6>
            <div class="card-text">
              <b-form enctype="multipart/form-data" @submit="onSubmit" v-if="show">
                <b-form-group horizontal breakpoint="lg" label="Datos del Coto" label-size="md" label-class="font-weight-bold pt-0" class="mb-0">
                  <b-form-group horizontal id="nombreCotoGroup" label="Nombre del Coto:" label-for="nombreCoto">
                    <b-form-input id="nombreCoto" type="text" v-model="form.nombreCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="direccionCotoGroup" label="Dirección:" label-for="direccionCoto">
                    <b-form-input id="direccionCoto" type="text" v-model="form.direccionCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="numeroExtCotoGroup" label="Número Exterior:" label-for="numeroExtCoto">
                    <b-form-input id="numeroExtCoto" type="text" v-model="form.numeroExtCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="coloniaCotoGroup" label="Colonia:" label-for="coloniaCoto">
                    <b-form-input id="coloniaCoto" type="text" v-model="form.coloniaCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="estadoCotoGroup" label="Estado:" label-for="estadoCoto">
                    <b-form-input id="estadoCoto" type="text" v-model="form.estadoCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="ciudadCotoGroup" label="Ciudad:" label-for="ciudadCoto">
                    <b-form-input id="ciudadCoto" type="text" v-model="form.ciudadCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="cpCotoGroup" label="Código Postal:" label-for="cpCoto">
                    <b-form-input id="cpCoto" type="number" v-model="form.cpCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="telContactoCotoGroup" label="Teléfono de Contacto:" label-for="telContactoCoto">
                    <b-form-input id="telContactoCoto" type="number" v-model="form.telContactoCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="telEmergenciaCotoGroup" label="Teléfono de Emergencia:" label-for="telEmergenciaCoto">
                    <b-form-input id="telEmergenciaCoto" type="number" v-model="form.telEmergenciaCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="imgCotoGroup" label="Logo del Coto:" label-for="imgCoto">
                    <b-form-file id="imgCoto" v-model="form.imgCoto" ref="imgCoto" accept="image/*" required placeholder="Seleccionar Logo..." @change="handleFileUpload()"></b-form-file>
                  </b-form-group>
                </b-form-group>
                <hr>
                <b-form-group horizontal breakpoint="lg" label="Datos del Administrador" label-size="md" label-class="font-weight-bold pt-0" class="mb-0">
                  <b-form-group horizontal id="nombreAdminCotoGroup" label="Nombre:" label-for="nombreAdminCoto">
                    <b-form-input id="nombreAdminCoto" type="text" v-model="form.nombreAdminCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="apellidoAdminCotoGroup" label="Apellido:" label-for="apellidoAdminCoto">
                    <b-form-input id="apellidoAdminCoto" type="text" v-model="form.apellidoAdminCoto" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="adminCotoEmailGroup" label="Correo:" label-for="adminCotoEmail">
                    <b-form-input id="adminCotoEmail" type="email" v-model="form.adminCotoEmail" required></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal id="adminCotoPasswdGroup" label="Contraseña:" label-for="adminCotoPasswd">
                    <b-form-input id="adminCotoPasswd" type="text" value="Enviada al correo del administrador." disabled></b-form-input>
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
        imgCoto: '',
      },
      show: true,
      file: '',
    };
  },
  methods: {
    handleFileUpload() {
      this.form.imgCoto = this.$refs.imgCoto.$refs.input.files[0];
    },
    onSubmit(evt) {
      evt.preventDefault();
      const formData = new FormData(this.form);
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
      formData.append('adminCotoEmail', this.form.adminCotoEmail);

      addCoto(formData).then((res) => {
        const app = this;
        if (res.success) {
          app.$router.push('/sadmin/home');
        } else {
          // console.log('ERROR');
          // console.log(res.message);
        }
      },
        /* (err) => {
          // FIX IT
          console.error(err);
        }, */
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
