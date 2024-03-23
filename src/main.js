import { createApp } from "vue";
import App from "./App.vue";
import Meta from "vue-meta";
import "./css/global.css";

// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

// importing Swiper
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

// importing vue-lazyload
import VueLazyload from 'vue-lazyload'

createApp(App).use(AOS.init(), Meta, VueLazyload).mount("#app");
