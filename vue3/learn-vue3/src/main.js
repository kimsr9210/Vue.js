import { createApp } from 'vue'
import App from './lectures/App_v-if.vue'

const app = createApp(App);
app.config.devtools = true;
app.mount('#app');