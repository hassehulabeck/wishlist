import Vue from 'vue';
import VueFire from 'vuefire'
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import {fb} from './firebase-config';

Vue.config.productionTip = false;

Vue.use(VueFire)
let app = '';

fb.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
