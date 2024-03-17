import { createApp } from "vue";
import "./css/global.css";
import "./css/style.css";
import App from "./App.vue";

// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App)
  .use(AOS.init())
  .mount("#app");
