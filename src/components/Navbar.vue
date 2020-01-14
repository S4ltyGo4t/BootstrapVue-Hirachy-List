<template>
  <div>
    <v-app-bar
      app
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/logo.png')"
          transition="scale-transition"
          width="40"
        />

        <h1>Tree View</h1>
      </div>
      <v-spacer/>
    </v-app-bar
    >

    <v-content>
    </v-content>
  </div>
</template>

<script>
  import Component from 'vue-class-component';
  import { Vue } from 'vue-property-decorator';

  @Component
  export default class Navbar extends Vue {
  }
</script>

<style scoped>

</style>
