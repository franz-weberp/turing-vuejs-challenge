<script>
import { useRoute } from 'vue-router'
import {watch, ref} from 'vue';
import { candidateStore } from '@/store/store.js'
import {route} from "@/router/route";

export default {
  setup() {
    const route = useRoute();
    let activeRoute = ref(route.path);
    watch(
        () => route.path,
        async (currentPath) => {
          activeRoute.value = currentPath;
        }
    )
    return {
      activeRoute
    }
  },
  data() {
    return {
      routeList: route,
      candidateStore
    }
  },
}
</script>

<template>
  <div class="nav">
    <div class="nav-content">
      <router-link v-bind:to="routeList.home"><span data-testid="nav-heading" class="title cursor-pointer">Job Portal</span></router-link>
      <div class="nav-btns" v-if="activeRoute !== routeList.home">
        <router-link v-bind:to="routeList.home"><span data-testid='nav-home-btn' class='btn-sec'>Home</span></router-link>
        <router-link v-if="activeRoute !== routeList.register" v-bind:to="routeList.register"><span data-testid='nav-registration-btn' class='btn-sec'>Candidate Registration</span></router-link>
        <router-link v-if="activeRoute !== routeList.list" v-bind:to="routeList.list"><span data-testid='nav-list-btn' class='btn-sec'>candidate list {{candidateStore.candidateCount()}}</span></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
