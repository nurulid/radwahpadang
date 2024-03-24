<template>
  <section class="container-custom my-20">
    <div class="text-center mb-20" data-aos="zoom-in" data-aos-offset="300" data-aos-delay="300">
      <span
        class="py-1 px-4 bg-secondary text-white rounded-md inline-block font-[LibreBaskerville] uppercase text-sm">Trusted</span>
      <h2 class="mt-3 font-[LibreBaskerville]">Ulasan dari Pelanggan</h2>
      <p class="text-xl text-graytext">Pesanan anda kami pastikan sesuai dan sampai dengan selamat</p>
    </div>
    <swiper 
      :modules="modules" 
      :slides-per-view="2" 
      :spaceBetween="25" 
      navigation 
      :pagination="{ 
        clickable: true 
      }"
      :loop="true" 
      :autoplay="{
        delay: 3000
      }" 
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }"
    >
      <swiper-slide>
        <img src="/images/testi-1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/images/testi-2.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/images/testi-1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/images/testi-2.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/images/testi-1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/images/testi-2.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/images/testi-1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/images/testi-2.png" alt="">
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  }
}
</script>
<style lang="scss"></style>