import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import App from './App.vue'
import Routes from './routes'
import { store } from './store'
import firebase from 'firebase'

Vue.use(VueRouter)
Vue.use(Vuetify)

const router = new VueRouter({
    routes: Routes
})

firebase.auth().onAuthStateChanged(() => {
    new Vue({
        el: '#app',
        render: h => h(App),
        router,
        store
    })
})