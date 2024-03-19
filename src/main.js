import { createApp } from "vue";
import "./css/style.css";
import "./css/global.css";
import App from "./App.vue";

// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App)
  .use(AOS.init())
  .mount("#app");
