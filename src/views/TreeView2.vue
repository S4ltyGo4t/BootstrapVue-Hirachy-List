<template>
  <div class="TreeView2">
    <HierarchyList2/>
  </div>
</template>

<script>
  import HierarchyList2 from '../components/HierarchyList2.vue';

  export default {
    name: 'TreeView2',
    components: {
      HierarchyList2: HierarchyList2
    },
  };
</script>
