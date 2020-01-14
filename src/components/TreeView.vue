<template>
  <div class="TreeView" style="background: aqua">
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  data: [] = [{
    id: 1, text: 'QDM', expanded: true, items: [
      {id: 11, text: 'IB-CT01'},
      {
        id: 12, text: 'IB-CT02', expanded: true, items: [
          {id: 121, text: 'IB-CT021'},
          {id: 122, text: 'IB-CT022'}]
      },
      {id: 13, text: 'IB-CT03'}
    ]
  }];

  @Component
  export default class GeoMap extends Vue {
  }
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
