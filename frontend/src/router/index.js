import Vue from 'vue'
import VueRouter from 'vue-router'
import toyEdit from '../views/toy-edit.vue'
import toyApp from '../components/toy-app-page.vue'
import toyChart from '../views/chart-toy.vue'
import toyShops from '../views/toy-shop.vue'
import loginPage from '../views/login-page.vue';
import toyDetails from '../views/toy-details.vue';

Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/',
  //   component: loginPage
  // },
  {
    path:'/',
    component:toyApp,
  },
  {
    path: '/edit/:id?',
    component: toyEdit
  },
  {
    path: '/details/:id',
    component: toyDetails
  },
  {
    path: '/charts',
    component: toyChart
  },
  {
    path:'/shops',
    component: toyShops
  }
  

]

const router = new VueRouter({
  routes
})

export default router
