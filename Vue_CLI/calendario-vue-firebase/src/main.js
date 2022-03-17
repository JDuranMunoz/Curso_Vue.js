import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
Vue.use(VueTextareaAutosize)
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'
import '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF8thhya6h8_BW3h_m5crT1pgWQsld8K0",
  authDomain: "calendario-vue-firebase-6b43f.firebaseapp.com",
  projectId: "calendario-vue-firebase-6b43f",
  storageBucket: "calendario-vue-firebase-6b43f.appspot.com",
  messagingSenderId: "1072022969790",
  appId: "1:1072022969790:web:8b07e97fe27a415e602def"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
