import { createApp } from "vue";
import App from "./App.vue";
import Meta from "vue-meta";
import "./css/global.css";

// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App).use(AOS.init(), Meta).mount("#app");
