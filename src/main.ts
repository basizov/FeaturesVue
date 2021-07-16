import { createApp } from 'vue'
import App from './app/layout/App.vue'
import components from '@/components';
import './app/layout/style.scss'

const vueApplication = createApp(App);

components.forEach((component) => {
  vueApplication.component(component.name, component);
});

vueApplication
  .mount('#app');
