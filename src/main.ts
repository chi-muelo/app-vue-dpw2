//import { createApp } from 'vue'
//import './style.css'
//import App from './App.vue'
//import 'bootstrap/dist/css/bootstrap.min.css'

//createApp(App).mount('#app')
// src/main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());  // 👈 Activar Pinia
app.mount('#app');
