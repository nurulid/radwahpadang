<template lang="">
  <div v-for="({number, icon, desc}) in numberWrapper" :key="number" class="card-order bg-white hover:bg-white/70 transition-all border-2 border-primary rounded-2xl p-8 pb-10 group">
    <div class="flex items-center justify-between">
      <h4 class="text-[48px] font-[LibreBaskerville]">{{number}}</h4>
      <img :src="icon" width="40" alt="">
    </div>
    <p class="text-graytext mt-8" v-html="desc"></p>
  </div>
</template>
<script>
export default {
  name: "CardOrder",
  props: {
    data: Array
  },
  computed: {
    numberWrapper() {
      return this.data.map(step => {
        const phoneNumber = step.desc.match(/\d{4}-\d{4}-\d{4}/); // Regex to match the phone number pattern
        if (phoneNumber) {
          step.desc = step.desc.replace(
            phoneNumber[0],
            `<a href="https://wa.me/${phoneNumber[0]}" target="_blank" class="text-primary font-bold block group-hover:translate-x-2 transition-all">${phoneNumber[0]}</a>`
          );
        }
        return step;
      });
    },
  },
}
</script>
<style lang="">

</style>