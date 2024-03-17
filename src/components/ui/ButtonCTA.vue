<template lang="">
  <a href="#"
    class="bg-primary text-white py-5 px-10 rounded-full uppercase font-semibold hover:text-white hover:shadow-xl transition-all inline-block group">
    {{title}}
    <MoveUpRight class="inline-block ml-2 group-hover:rotate-45 transition-all" size="20" />
  </a>
</template>
<script>
import { MoveUpRight } from 'lucide-vue-next';
export default {
  name: 'ButtonCTA',
  components: {
    MoveUpRight
  },
  props: {
    title: String
  }
}
</script>
<style lang="">

</style>