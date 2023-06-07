<script>
import { candidateStore } from '@/store/store.js';
import {route} from "@/router/route";
export default {
  data() {
    return {
      routeList: route,
      candidateStore
    }
  },
}
</script>

<template>
  <div class='home'>
    <router-link v-bind:to="routeList.list"><span data-testid='list-btn' class='btn-sec'>Candidate List({{candidateStore.candidateCount()}})</span></router-link>
    <router-link v-bind:to="routeList.register"><span data-testid='registration-btn' class='btn-sec'>Candidate Registration</span></router-link>
  </div>
</template>

<style>
</style>
