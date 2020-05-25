<template>
  <v-app>
    <!-- <loginPage></loginPage> -->
  <app-theme></app-theme>
  </v-app>
</template>

<script>
import appTheme from './components/app-theme.vue';
import loginPage from './views/login-page.vue';
import { log } from 'util';

export default {
  name: 'App',

  components: {
    appTheme,
    loginPage
  },
   created() {     
    this.$store.dispatch("loadToys")
    if(this.$route.params){     
      this.$store.dispatch({type:'getToy',id:this.$route.params.id})
    } 
  }
};
</script>
