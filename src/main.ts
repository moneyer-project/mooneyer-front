import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import axios from 'axios'
import VueAxios from 'vue-axios'

import store from './store'
import router from './router'

import { faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faHome)
library.add(faInfoCircle)

axios.defaults.baseURL = String(import.meta.env.VITE_API_BASE_URL)

createApp(App)
    .use(ElementPlus, {size: 'small', zIndex: 3000})
    .use(VueAxios, axios)
    .use(store)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
