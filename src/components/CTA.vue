<template>
  <section class="container my-[50px]">
    <div class="grid grid-cols-3 gap-10 mx-20">
      <div class="col-span-2 bg-black text-white p-10 rounded-2xl flex flex-col justify-between">
        <h2 class="leading-[1] mb-5 text-[48px] font-semibold">Cek katalog lengkap di Instagram kami</h2>
        <div class="flex justify-between items-end">
          <ButtonCTA :title="title"/>
          <div class="flex items-center gap-2 text-white">
            <img src="/icons/ic-instagram.svg" width="30" alt="">
            radwahpadang
          </div>
        </div>
      </div>
      <div class="bg-white p-10 rounded-2xl space-y-6 relative">
        <img src="/icons/ic-whatsapp-black.svg" width="80" alt="" fill="black">
        <h3 class="text-[32px] font-semibold">Fast Respon</h3>
        <p class="text-graytext">Jika ada pertanyaan atau pemesanan, langsung hubungi admin kami melalui WhatsApp ya.</p>
        <img src="/icons/ic-arrow-up.svg" alt="" class="absolute top-0 right-[20px]">
      </div>
    </div>
  </section>
</template>
<script>
import ButtonCTA from './ui/ButtonCTA.vue'

export default {
  components: {
    ButtonCTA
  },
  data() {
    return {
      title: 'Cek Katalog'
    }
  }
}
</script>
<style lang="">
  
</style>