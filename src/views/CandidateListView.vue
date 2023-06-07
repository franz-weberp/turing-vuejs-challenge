<script>
import CandidateCard from "@/components/CandidateCard.vue";
import { candidateStore } from '@/store/store.js';

export default {
  mounted() {
    this.updateCandidateList();
  },
  data() {
    return {
      candidateStore,
      search: '',
      candidateList: []
    }
  },
  watch: {
    'candidateStore.candidateList': {
      deep: true,
      handler() {
        this.updateCandidateList();
      }
    }
  },
  components: {
    CandidateCard
  },
  methods: {
    updateCandidateList() {
      this.candidateList = this.search
        ? this.candidateStore.searchSkill(this.search)
        : [...this.candidateStore.candidateList];
    },
    searchSkill() {
      if (this.search.trim() !== '') {
        this.candidateList = this.candidateStore.searchSkill(this.search.trim());
      } else {
        this.candidateList = [...this.candidateStore.candidateList];
      }
    },
    removeSearch() {
      this.search = '';
      this.candidateList = [...this.candidateStore.candidateList];
    }
  }
}
</script>

<template>
  <div class="cand-list">
    <div class="search">
      <input data-testid="search-input" v-model="search" placeholder="search skills" type="text"/>
      <button data-testid="search-btn" class="btn-prm" @click="searchSkill">Search</button>
      <button data-testid="search-all"  class="btn-sec" @click="removeSearch">All</button>
    </div>
    <p data-testid="profiles-found-tag" style="opacity: 0.6">{{candidateList.length}} profiles found</p>
    <div class="cardlist">
      <CandidateCard v-bind:key="candidate" v-for="candidate in candidateList" :candidate="candidate"></CandidateCard>
    </div>
  </div>

</template>

<style>
</style>
