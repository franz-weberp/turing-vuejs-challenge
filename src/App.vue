<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import './assets/main.css';



export default {
  components: {
    HeaderComponent
  }
}
</script>

<template>
  <div>
    <HeaderComponent/>
    <div class="d-flex justify-content-center">
      <div class="content">
        <div class="w-100">
          <router-view/>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
</style>
