import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAK2nGJvmz5y9wuNH-8sp8wp84R3n7p3Pk',
      authDomain: 'itc-ads-367ec.firebaseapp.com',
      databaseURL: 'https://itc-ads-367ec.firebaseio.com',
      projectId: 'itc-ads-367ec',
      storageBucket: 'itc-ads-367ec.appspot.com',
      messagingSenderId: '579834797424',
      appId: '1:579834797424:web:c8030ffb76714a95b6c3b5'
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
