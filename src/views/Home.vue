<template>
  <div class="home">
    <HierarchyList1/>
  </div>
</template>

<script>
  // @ is an alias to /src

  import HierarchyList1 from '@/components/HierarchyList1';

  export default {
    name: 'home',
    components: {
      HierarchyList1: HierarchyList1
    },
  };
</script>
