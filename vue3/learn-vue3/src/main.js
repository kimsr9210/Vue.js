import { createApp } from 'vue'
import App from './lectures/App_style_binding.vue'

const app = createApp(App);
app.config.devtools = true;
app.mount('#app');