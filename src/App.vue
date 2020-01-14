<template>
  <v-app>
    <Navbar/>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Navbar from '@/components/Navbar.vue';
  import Component from 'vue-class-component';

  @Component({components: {Navbar}})
  export default class App extends Vue {
  }
</script>
