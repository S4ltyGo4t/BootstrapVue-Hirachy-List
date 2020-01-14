<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand>
      <img src="../assets/logo.png" alt="bootstrap-logo" id="logo" height="35">
      BootstrapVue Hierarchy List
    </b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="/">List1</b-nav-item>
      <b-nav-item href="/tree2">List2</b-nav-item>
      <b-nav-item href="/tree3">List3</b-nav-item>
      <b-nav-item href="/troll">Trololol</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
  import Component from 'vue-class-component';
  import {Vue} from 'vue-property-decorator';

  @Component
  export default class Navbar extends Vue {
  }
</script>
