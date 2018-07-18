<template>
  <div>
    <app-nav></app-nav>

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
import AppNav from '../../components/AppNav';

export default {
  name: 'profile',
  components: {
    AppNav,
  },
  data() {
    return {
      items: [
        { first_name: 'Erik', last_name: 'Macias', email: 'erik.macias@gmail.com', password: '********' },
      ],
    };
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
