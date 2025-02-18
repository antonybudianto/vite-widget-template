import { createApp } from "vue";
import App from "./App.vue";

const mount = (el: HTMLElement) => {
  createApp(App).mount(el);
};

export { mount };
