
 import { createWebHistory, createRouter } from "vue-router";
import LoadingPage from '../views/LoadingPage.vue';
import MainScreen from '../views/MainScreen.vue'
const routes = [
    {path:'/' , name:'LoadingPage', component:LoadingPage},
    {path:'/MainScreen' , name:'MainScreen', component:MainScreen},
    
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;