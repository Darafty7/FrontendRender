import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import "sweetalert2"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import 'material-icons/iconfont/material-icons.css'
import "./assets/css/template.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import 'material-icons/iconfont/material-icons.css';

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';




createApp(App).use(router).use(VueAxios, axios).mount('#app')
createApp(App).use(router).use(VCalendar, {}).mount('#app')

