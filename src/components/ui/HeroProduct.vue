<template lang="">
  <div v-for="({id, image, name, url, sale}) in data" :key="id" data-aos="zoom-in" data-aos-duration="500" class="bg-white p-3 flex flex-col justify-between group rounded">
    <img class="rounded h-full group-hover:brightness-[1.1] transition-all" :src="image" alt="">
    <div class=" bg-white mt-4 flex justify-between ">
      <h3 class="text-left text-xs md:text-sm font-semibold uppercase group-hover:text-primary transition-all">{{name}}</h3>
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