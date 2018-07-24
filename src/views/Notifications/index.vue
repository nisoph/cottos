<template>
  <div>
    <app-nav></app-nav>

    <b-container class="mt-3">
        <b-row>
            <b-col><h3 class="text-center">Avisos</h3></b-col>
        </b-row>
    </b-container>

    <hr/>

    <b-container>
        <b-row>
            <b-col>
              <b-card-group deck class="mb-3">
                <b-card header="Aviso 01"
                        class="text-center">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <small class="text-muted">18 de Julio, 2018</small>
                </b-card>
                <b-card header="Aviso 02"
                        class="text-center">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <small class="text-muted">16 de Julio, 2018</small>
                </b-card>
                <b-card header="Aviso 03"
                        class="text-center">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <small class="text-muted">13 de Julio, 2018</small>
                </b-card>
            </b-card-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
              <b-card-group deck class="mb-3">
                <b-card header="Aviso 04"
                        class="text-center">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <small class="text-muted">12 de Julio, 2018</small>
                </b-card>
                <b-card header="Aviso 05"
                        class="text-center">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <small class="text-muted">10 de Julio, 2018</small>
                </b-card>
                <b-card header="Aviso 06"
                        class="text-center">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <small class="text-muted">9 de Julio, 2018</small>
                </b-card>
            </b-card-group>
            </b-col>
        </b-row>

    </b-container>
  </div>
</template>

<script>
import AppNav from '../../components/AppNav';

export default {
  name: 'notifications',
  components: {
    AppNav,
  },
  methods: {
    isLoggedIn() {
      // return isLoggedIn();
      return true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
