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
    <ButtonPrimary :title="title" />
  </section>
</template>
<script lang="js">
import ButtonPrimary from './ui/ButtonPrimary.vue'

export default {
  name: 'Hero',
  components: {
    ButtonPrimary
  },
  data() {
    return {
      title: 'Cek Katalog Lengkap',
    };
  },
}
</script>
<style></style>./ui/ButtonPrimary.vue