<template>
  <div class="home">
    <GeoMap/>
  </div>
</template>

<script>
  // @ is an alias to /src

  import GeoMap from '@/components/TreeView';

  export default {
    name: 'home',
    components: {
      GeoMap
    },
  };
</script>
