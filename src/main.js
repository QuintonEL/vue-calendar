import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCGYrFyWzVeQ7lLQlY4P0EkQBpflPSE00M",
  authDomain: "vue-calendar-de725.firebaseapp.com",
  databaseURL: "https://vue-calendar-de725.firebaseio.com",
  projectId: "vue-calendar-de725",
  storageBucket: "vue-calendar-de725.appspot.com",
  messagingSenderId: "760425824134",
  appId: "1:760425824134:web:5536a9eef9c0cd84557607"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
