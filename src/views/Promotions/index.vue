<template>
  <div>
    <app-nav></app-nav>

    <b-container class="mt-3">
        <b-row>
            <b-col><h3 class="text-center">Anuncios y Promociones</h3></b-col>
        </b-row>
    </b-container>

    <hr/>

    <b-container>
      <b-row>
        <b-col>
          <carousel></carousel>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Thumbnail" />
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Thumbnail" />
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Thumbnail" />
        </b-col>
      </b-row>
      <b-row class="mt-5 mb-5">
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img blank width="250" height="250" blank-color="#999" thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Thumbnail" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppNav from '../../components/AppNav';
import Carousel from '../../components/Carousel';

export default {
  name: 'promotions',
  components: {
    Carousel, AppNav,
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
