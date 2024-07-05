import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "./routers";


console.log(import.meta.env.APP_SERVER_URL)
console.log(import.meta.env.Server_URL)
createApp(App).use(ElementPlus,{size: 'small', zIndex: 3000}).use(router).mount("#app");
