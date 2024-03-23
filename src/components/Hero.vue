<template>
  <section class="container-custom mb-10 text-center">
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md::gap-10 mb-20">
      <HeroProduct :data="products"/>
    </div>
    <div data-aos="fade-right" data-aos-delay="300"  data-aos-offset="100" >
      <ButtonCTA :title="title" />
    </div>
  </section>
</template>
<script lang="js">
import ButtonCTA from './ui/ButtonCTA.vue';
import HeroProduct from './ui/HeroProduct.vue';

export default {
  name: 'Hero',
  components: {
    ButtonCTA,
    HeroProduct,
  },
  data() {
    return {
      title: 'Cek Katalog Lengkap',
      products: [
        {
          id: '01',
          image: '/images/bag.png',
          name: 'Jasper Bag Teracotta',
          url: 'https://www.instagram.com/p/Cpj4UBNJxTX/?img_index=1',
          sale: true
        },
        {
          id: '02',
          image: '/images/pants.png',
          name: 'Reeva Pants',
          url: 'https://www.instagram.com/p/C3mjOJ2pEJK/?img_index=1',
          sale: false
        },
        {
          id: '03',
          image: '/images/tunik.png',
          name: 'Bahriya Tunic',
          url: 'https://www.instagram.com/p/CpsH7KwJmoe/?img_index=1',
          sale: false
        },
        {
          id: '04',
          image: '/images/mukena.png',
          name: 'Premium Jasmine Prayer Set',
          url: 'https://www.instagram.com/p/Cqj9kFjJTYQ/?img_index=4',
          sale: false
        },
        {
          id: '05',
          image: '/images/scarf.png',
          name: 'Azalena Scarf',
          url: 'https://www.instagram.com/p/CrAQKB-pRdt/?img_index=1',
          sale: false
        },
        {
          id: '06',
          image: '/images/outer.png',
          name: 'Tiana Outer',
          url: 'https://www.instagram.com/p/C3l3zNnJABg/?img_index=1',
          sale: false
        }
      ]
    };
  },
}
</script>
<style></style>./ui/ButtonPrimary.vue./ui/ButtonCTA.vue./ui/HeroProduct.vue