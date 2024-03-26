import { createApp } from "vue";
// import Meta from "vue-meta";
import VueLazyload from 'vue-lazyload'
import AOS from "aos";
import { register } from 'swiper/element/bundle';

import App from "./App.vue";
import "aos/dist/aos.css";
import "./css/global.css";

const app = createApp(App);
const loadimage = ('loading.webp');

// register Swiper custom elements
register();

// Assuming AOS.init() is required for initialization
AOS.init();

// Use Vue plugins
// app.use(Meta);
app.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadimage,
  attempt: 1
});

// Mount the app
app.mount("#app");

// createApp(App).use(AOS.init(), Meta, VueLazyload).mount("#app");
