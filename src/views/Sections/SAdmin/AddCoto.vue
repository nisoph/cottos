<template>
  <div>
    <app-nav-s-admin></app-nav-s-admin>

    <b-container class="mt-3">
        <b-row>
            <b-col><h3 class="text-center">Agregar Nuevo Coto</h3></b-col>
        </b-row>
    </b-container>

    <hr/>

    <b-container>
      <b-row>
          <b-col>
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
                <b-form-group id="imgCotoGroup" label="Logo del Coto:" label-for="imgCoto">
                  <b-form-file id="imgCoto" v-model="form.imgCoto" accept="image/*" required placeholder="Seleccionar Logo..."></b-form-file>
                </b-form-group>
                <b-button type="submit" class="mt-5 btn-block" size="lg" variant="primary">Crear</b-button>
                <b-button type="reset" class="btn-block" size="lg" variant="danger">Borrar</b-button>
              </b-form>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNavSAdmin from '../../../components/AppNavSAdmin';
// import { getCotos } from '../../../utils/sadmin-api';

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
        food: null,
        checked: [],
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn',
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.nombreCoto = '';
      this.form.direccionCoto = '';
      this.form.food = null;
      this.form.checked = [];
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
