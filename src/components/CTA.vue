<template>
  <section class="container my-[50px] lg:my-[150px]">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mx-0 md:mx-5 lg:mx-20">
      <div class="lg:col-span-2 bg-black text-white p-10 rounded-2xl flex flex-col justify-between gap-10">
        <div class="relative">
          <h2 class="leading-[1] mb-5 text-[32px] lg:text-[48px] font-semibold pl-[20px]">Cek katalog lengkap di Instagram kami</h2>
          <img src="/icons/ic-highlight.svg" width="24" alt="" class="absolute left-0 -top-4 animate-bounce">
        </div>
        <div class="flex justify-between items-end flex-wrap gap-5">
          <ButtonCTA :title="title" class="order-2 md:order-1"/>
          <div class="flex items-center gap-2 text-white order-1 md:order-2">
            <img src="/icons/ic-instagram.svg" width="30" alt="">
            radwahpadang
          </div>
        </div>
      </div>
      <div class="bg-white p-10 rounded-2xl space-y-6 relative group hover:animate-flip transition-all">
        <img src="/icons/ic-whatsapp-black.svg" width="80" alt="" fill="black">
        <h3 class="text-[24px] font-semibold font-[LibreBaskerville]">Fast Respon</h3>
        <p class="text-graytext">Jika ada pertanyaan atau pemesanan, langsung hubungi admin kami melalui WhatsApp ya.</p>
        <img src="/icons/ic-arrow-up.svg" alt="" class="absolute top-0 right-[20px]">
        <div class="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl justify-center items-center hidden group-hover:flex">
          <a href="https://wa.me/082288794956" target="_blank" class="text-md uppercase font-bold inline-block bg-white py-2 px-6 rounded-3xl border-2 border-black hover:bg-black hover:text-white hover:border-black">Chat Admin</a>
        </div>
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