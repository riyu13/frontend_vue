import * as Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
// import store from './store'
import 'admin-lte'
import 'bulma'
import 'paginationjs'
import axios from 'axios'

import { setHeaderToken } from '../src/store/utils/auth'

import VueSweetalert2 from 'vue-sweetalert2'
import { PaginationPlugin } from 'bootstrap-vue'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-popperjs'
import { BPagination } from 'bootstrap-vue'
import { BSidebar } from 'bootstrap-vue'
import { BootstrapVue } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faGear, faMagnifyingGlass, faUserSecret, faBook, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'


library.add(faUserSecret)
library.add(faBell)
library.add(faBook)
library.add(faGear)
library.add(faMagnifyingGlass)
library.add(faRightFromBracket)

const app = Vue.createApp(App)

app.use(router , VueSweetalert2, BootstrapVue, PaginationPlugin)
app.component('font-awesome-icon', FontAwesomeIcon, 'b-sidebar',BSidebar,'b-pagination',BPagination)
app.component($)
app.mount('#app')
app.config.devtools = true;


import 'bootstrap/dist/js/bootstrap.bundle.js'
axios.defaults.baseURL = 'http://localhost:3000/'
Vue.config.productionTip = false

const token = localStorage.getItem('token');

if (token) { 
  setHeaderToken(token) 
} 

store.dispatch('get_user', token)
.then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}).catch((error) => {
  console.error(error);
})