import { createApp } from 'vue'
import App from './app/layout/App.vue'
import './app/layout/style.scss'

const vueApplication = createApp(App);

vueApplication
  .mount('#app');
