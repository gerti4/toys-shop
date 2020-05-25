import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify/lib'
import './scss/global.scss';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa',
    values: {
      cancel: 'fas fa-ban',
      menu: 'fas fa-ellipsis-v',
    },
  },
})


Vue.config.productionTip = false;

var SocialSharing = require('vue-social-sharing');
 
Vue.use(SocialSharing);


//google maps
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC0AAcennjMo2tqULw0Jy4xeADyspU0Lu8',
    libraries: 'places', 
  },
})


new Vue({
  router,
  store,
  vuetify, 
  render: h => h(App)
}).$mount('#app')

