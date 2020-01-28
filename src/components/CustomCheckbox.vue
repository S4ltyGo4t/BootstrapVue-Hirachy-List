<template>
  <b-row>
    <div v-if="cbModel.getChildren().length > 0" @click="cbModel.toggleShow()"
         style="cursor: pointer">
      <b-icon-chevron-down class="mr-1 h5" v-if="cbModel.showChildren"/>
      <b-icon-chevron-right class="mr-1 h5" v-else/>
    </div>
    <b-checkbox :checked="cbModel.checked"
                :indeterminate="cbModel.isIntermediate()"
                @change="cbModel.toggleNodeState()">

    </b-checkbox>
    <span @click="cbModel.toggleNodeState()" style="cursor: pointer">{{cbModel.value}}</span>
  </b-row>

</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import Node from '@/classes/Node';

  @Component({})
  export default class CustomCheckbox extends Vue {
    @Prop() cbModel!: Node;
  }
</script>
