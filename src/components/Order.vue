<template>
  <section class="my-10 bg-[url(/bg-gradient.svg)] bg-no-repeat bg-cover py-20 border-t-primary/20 border-b-secondary/20 border">
    <div class="container-custom max-w-[768px]:pb-0">
      <div class="text-center mb-20" data-aos="zoom-in" data-aos-offset="300" data-aos-delay="100">
        <span class="py-1 px-4 bg-secondary text-white rounded-md inline-block font-[LibreBaskerville] uppercase text-sm">Order</span>
        <h2 class="mt-3 font-[LibreBaskerville] font-semibold">Cara Pemesanan</h2>
        <p class="text-xl text-graytext">Panduan singkat mengenai cara pemesanan produk kami</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-10">
        <CardOrder :data="stepData" />
      </div>
      <div class="text-center">
        <div class="bg-primaryLight py-6 px-10 md:px-20 inline-block mx-auto rounded-lg relative">
          <p>Anda juga dapat melakukan <span class="font-bold">pemesanan</span> melalui platform <span class="font-bold">Shopee</span> kami.<br/> Hubungi admin kami melalui WhatsApp untuk informasi lebih lanjut.</p>
          <img src="/icons/icon-shopee.svg" alt="" class="absolute -left-[20px] -top-[20px]">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CardOrder from './ui/CardOrder.vue';

export default {
  name: 'Order',
  components: {
    CardOrder
  },
  data() {
    return {
      stepData: [
        {
          number: '01',
          icon: '/icons/ic-whatsapp.svg',
          desc: 'Chat admin melalui WhatsApp 0822-8879-4956'
        },
        {
          number: '02',
          icon: '/icons/ic-money.svg',
          desc: 'Transfer total pembayaran ke nomor rekening yang telah disediakan.'
        },
        {
          number: '03',
          icon: '/icons/ic-delivery.svg',
          desc: 'Pesanan anda akan segera kami kirim.'
        }
      ]
    };
  },
}
</script>
<style>
  
</style>