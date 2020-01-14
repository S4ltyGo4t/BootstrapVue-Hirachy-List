<template>
  <div class="HierarchyList2">
    <b-list-group flush>

      <b-list-group-item class="d-flex align-items-left">
        <b-checkbox>
        </b-checkbox>
        <b-icon class="ml-2" icon="tools" scale="2" variant="danger"/>
        <span class="ml-2"><b>QDM</b></span>
        <b-icon class="ml-2 caret" icon="chevron-right" scale="2" variant="danger"
                v-b-toggle.acc-1 @click="changeIcon"/>
        <b-collapse id="acc-1">
          <b-list-group flush>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <b-checkbox>
                <b-icon class="ml-2" icon="tools" scale="2" variant="warning"/>
                <span class="ml-2"><b>VDM</b></span>
              </b-checkbox>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <b-checkbox>
                <b-icon class="ml-2" icon="tools" scale="2" variant="warning"/>
                <span class="ml-2"><b>VDM</b></span>
              </b-checkbox>
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-list-group-item>


      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <b-checkbox>
          <b-icon class="ml-2" icon="tools" scale="2" variant="warning"/>
          <span class="ml-2"><b>VDM</b></span>
        </b-checkbox>
      </b-list-group-item>


      <b-list-group-item class="d-flex justify-content-between align-items-left">
        <b-checkbox>
          <b-icon class="ml-2" icon="tools" scale="2" variant="info"/>
          <span class="ml-2"><b>FAS</b></span>
        </b-checkbox>
      </b-list-group-item>


    </b-list-group>

    <hr>
    <!--    <b-list-group>-->
    <!--      <b-list-group-item>-->
    <!--        <b-icon class="ml-2 caret" icon="chevron-right" scale="2" variant="danger"-->
    <!--                v-b-toggle.col-1 @click="changeIcon"/>-->

    <!--        <b-collapse id="col-1">-->
    <!--          <b-check-group stacked>-->
    <!--            <b-checkbox>Stage 2</b-checkbox>-->
    <!--            <b-checkbox>Stage 2</b-checkbox>-->

    <!--              <b-list-group-item>-->
    <!--                <b-icon class="ml-2 caret" icon="chevron-right" scale="2" variant="danger"-->
    <!--                        v-b-toggle.col-2 @click="changeIcon"/>-->
    <!--                <span>Stage 2</span>-->
    <!--                <b-collapse id="col-2">-->
    <!--                  <b-check-group stacked>-->
    <!--                    <b-checkbox>Stage 3</b-checkbox>-->
    <!--                    <b-checkbox>Stage 3</b-checkbox>-->
    <!--                    <b-checkbox>Stage 3</b-checkbox>-->
    <!--                  </b-check-group>-->
    <!--                </b-collapse>-->
    <!--              </b-list-group-item>-->

    <!--            <b-checkbox>Stage 2</b-checkbox>-->
    <!--          </b-check-group>-->
    <!--        </b-collapse>-->
    <!--      </b-list-group-item>-->
    <!--    </b-list-group>-->

    <b-checkbox-group stacked>
      <b-form-checkbox id="a" value="a" @change="toggleChildren"> a
        <b-checkbox-group stacked>
          <b-form-checkbox id="cb-aa" value="aa">aa</b-form-checkbox>
          <b-form-checkbox id="cb-ab" value="ab">ab
            <b-checkbox-group stacked>
              <b-form-checkbox id="cb-aaa" value="aaa">aaa</b-form-checkbox>
              <b-form-checkbox id="cb-aab" value="aab">aab</b-form-checkbox>
              <b-form-checkbox id="cb-aac" value="aac">aac</b-form-checkbox>
              <b-form-checkbox id="cb-aad" value="aad">aad</b-form-checkbox>
            </b-checkbox-group>
          </b-form-checkbox>
          <b-form-checkbox id="cb-ac" value="ac">ac</b-form-checkbox>
          <b-form-checkbox id="cb-ad" value="ad">ad</b-form-checkbox>
        </b-checkbox-group>
      </b-form-checkbox>
    </b-checkbox-group>
    <b-button @click="toggleChildren">click me!</b-button>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Node from '@/classes/Node';

  @Component({
    components: {}
  })
  export default class HierarchyList3 extends Vue {
    data: Node[] = [];

    changeIcon() {
      // TODO CHANGE ICON HERE
    }

    toggleChildren(checked: any) {
      console.log(this.$children);
    }

  }
</script>

<style scoped>
  .caret {
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
  }
</style>
