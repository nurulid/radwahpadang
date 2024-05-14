<template lang="">
  <div v-for="({id, image, name, url, sale}) in data" :key="id" data-aos="zoom-in" data-aos-duration="500" class="bg-white p-3 flex flex-col justify-between group rounded-md relative" v-lazy-container="{ selector: 'img' }">
    <img class="rounded h-full group-hover:brightness-[1.1] transition-all" :data-src="image" alt="">
    <div class=" bg-white mt-4 flex justify-between ">
      <h3 class="text-left text-xs md:text-sm font-semibold uppercase group-hover:text-primary transition-all">{{name}}</h3>
      <MoveUpRight class="group-hover:rotate-45 transition-all"/>
      <a :href="url" target="_blank" class="absolute inset-0"></a>
    </div>
    <span v-if="sale" class="absolute -top-3 -left-3 bg-primary rounded-full text-white text-xs md:text-[1rem] font-bold w-[2.2rem] md:w-[3rem] h-[2.2rem] md:h-[3rem] leading-[2.2rem] md:leading-[3rem] align-middle shadow-2xl">Sale</span>
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