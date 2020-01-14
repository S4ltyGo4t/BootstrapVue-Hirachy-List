<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  import Navbar from '@/components/Navbar.vue';
  import Component from 'vue-class-component';

  @Component({components: {Navbar}})
  export default class App extends Vue {
  }
</script>

<style>
</style>
