<template>
  <b-form-checkbox :checked="cbModel.checked"
                   :indeterminate="cbModel.isIntermediate()"
                   @change="cbModel.toggleNodeState()">
    {{cbModel.value}}
  </b-form-checkbox>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({})
  export default class CustomCheckbox extends Vue {
    @Prop() cbModel!: Node;

  }
</script>
