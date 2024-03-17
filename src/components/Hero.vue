<template>
  <section class="container mb-10 text-center">
    <div class="grid grid-cols-3 gap-10 mb-20">
      <img class="rounded-xl" data-aos="zoom-in" data-aos-duration="500" src="/images/bag.png" alt="">
      <img class="rounded-xl mt-10" data-aos="zoom-in" data-aos-duration="1000" src="/images/pants.png" alt="">
      <img class="rounded-xl" data-aos="zoom-in" data-aos-duration="1500" src="/images/tunik.png" alt="">
      <img class="rounded-xl" data-aos="zoom-in" data-aos-duration="2000" src="/images/mukena.png" alt="">
      <img class="rounded-xl mt-10" data-aos="zoom-in" data-aos-duration="2500" src="/images/scarf.png" alt="">
      <img class="rounded-xl" data-aos="zoom-in" data-aos-duration="3000" src="/images/outer.png" alt="">
    </div>
    <div data-aos="fade-right" data-aos-delay="100"  data-aos-offset="800" >
      <ButtonCTA :title="title" />
    </div>
  </section>
</template>
<script lang="js">
import ButtonCTA from './ui/ButtonCTA.vue'

export default {
  name: 'Hero',
  components: {
    ButtonCTA
  },
  data() {
    return {
      title: 'Cek Katalog Lengkap',
    };
  },
}
</script>
<style></style>./ui/ButtonPrimary.vue./ui/ButtonCTA.vue