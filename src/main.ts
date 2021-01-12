import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/vuetify'
import router from '@/router'
import firebase from 'firebase/app'
import 'firebase/analytics'
import VueCompositionAPI from '@vue/composition-api'
import './registerServiceWorker'

Vue.config.productionTip = false

// Composition API
Vue.use(VueCompositionAPI)

var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_PROJECT_ID + ".firebaseapp.com",
  databaseURL: "https://" + process.env.VUE_APP_FIREBASE_PROJECT_ID + "-default-rtdb.firebaseio.com",
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_PROJECT_ID + ".appspot.com",
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.analytics()

setInterval(function() {
    if( document.getElementsByClassName('dismissButton').length ) {
        for( dismissBtn of document.getElementsByClassName('dismissButton') ) {
            dismissBtn.click()
        }
    }


    divsB = document.querySelectorAll("div")
    myDiv = [...divsB].filter(e => e.innerText == "For development purposes only");
        for( dd of myDiv ) {
            dd.style.zIndex = '-1'
        }


    for( inv of document.getElementsByClassName('widget-scene-canvas') ) {
        inv.parentElement.parentElement.parentElement.style.mixBlendMode = 'difference'
    }
}, 1000)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
