import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CandidateListView from "@/views/CandidateListView.vue";
import CandidateRegisterView from "@/views/CandidateRegisterView.vue";
import {route} from "@/router/route";

const routes = [
  {
    path: route.home,
    name: 'home',
    component: HomeView
  },
  {
    path: route.list,
    name: 'List',
    component: CandidateListView
  },
  {
    path: route.register,
    name: 'registration',
    component: CandidateRegisterView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
