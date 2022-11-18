import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue-3'

// 新しいストアインスタンスを作成します



createApp(App).use(router).use(BootstrapVue).use(store).use(VueAxios, axios).mount('#app')