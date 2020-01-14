<template>
  <div class="TrollView">
    <b-embed
      type="iframe"
      aspect="16by9"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      allowfullscreen
      allow="autoplay"
    />
  </div>
</template>

<script>
  import Component from 'vue-class-component';
  import {Vue} from 'vue-property-decorator';

  @Component
  export default class TrollView extends Vue {
  }
</script>
