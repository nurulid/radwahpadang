<template>
  <section>
    <marquee-text :repeat="5" :duration="8" class="py-3 bg-white border-t-4 border-b-4 border-secondary">
      <div class="text-secondary text-xl md:text-2xl uppercase mr-4 font-semibold">
      Pembelian <span class="text-primary">Minimum 3pcs</span> ✨ GRATIS ONGKIR ✨</div>
    </marquee-text>
  </section>
</template>
<script>
import MarqueeText from 'vue-marquee-text-component';
export default {
  name: 'RunningText',
  components: {
    MarqueeText
  }
}
</script>
<style lang="css"></style>