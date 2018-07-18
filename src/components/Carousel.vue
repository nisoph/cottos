<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

      <!-- Text slides with image -->
      <b-carousel-slide caption="Publicidad 1"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        img-blank img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide caption="Publicidad 2"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        img-blank img-src="https://picsum.photos/1024/480/?image=54">
      </b-carousel-slide>

      <b-carousel-slide caption="Publicidad 3"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        img-blank img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>

      <b-carousel-slide caption="Publicidad 4"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        img-blank img-src="https://picsum.photos/1024/480/?image=55">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Publicidad 5"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        img-blank img-alt="Blank image">
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
