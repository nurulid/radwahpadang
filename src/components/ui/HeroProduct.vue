<template lang="">
  <div v-for="({id, image, name, url, sale}) in data" :key="id" class="relative" data-aos="zoom-in" data-aos-duration="500">
    <img class="rounded-xl h-full" :src="image" alt="">
    <div class="absolute bottom-0 left-0 right-0 bg-white/50 backdrop-blur-sm px-5 py-3 rounded-xl m-1 flex justify-between group">
      <h3 class="text-left text-sm md:text-base font-semibold uppercase">{{name}}</h3>
      <MoveUpRight class="group-hover:rotate-45 transition-all"/>
      <a :href="url" target="_blank" class="absolute inset-0"></a>
    </div>
  </div>
</template>
<script>
import { MoveUpRight } from 'lucide-vue-next';

export default {
  name: "HeroProduct",
  components: {
    MoveUpRight
  },
  props: {
    data: Array
  }
  
}
</script>
<style lang="">
  
</style>