<template>
  <div class="HierarchyList2">
    <b-list-group flush>

      <b-list-group-item class="d-flex align-items-left">
        <b-checkbox>
        </b-checkbox>
        <b-icon class="ml-2" icon="tools" scale="2" variant="danger"/>
        <span class="ml-2"><b>Hierarchy_01</b></span>
        <b-icon class="ml-2 caret" icon="chevron-right" scale="2" variant="danger"
                v-b-toggle.acc-1 @click="changeIcon"/>
        <b-collapse id="acc-1">
          <b-list-group flush>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <b-checkbox>
                <b-icon class="ml-2" icon="tools" scale="2" variant="warning"/>
                <span class="ml-2"><b>Hierarchy_02</b></span>
              </b-checkbox>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <b-checkbox>
                <b-icon class="ml-2" icon="tools" scale="2" variant="warning"/>
                <span class="ml-2"><b>Hierarchy_02</b></span>
              </b-checkbox>
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-list-group-item>


      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <b-checkbox>
          <b-icon class="ml-2" icon="tools" scale="2" variant="warning"/>
          <span class="ml-2"><b>Hierarchy_01</b></span>
        </b-checkbox>
      </b-list-group-item>


      <b-list-group-item class="d-flex justify-content-between align-items-left">
        <b-checkbox>
          <b-icon class="ml-2" icon="tools" scale="2" variant="info"/>
          <span class="ml-2"><b>Hierarchy_01</b></span>
        </b-checkbox>
      </b-list-group-item>


    </b-list-group>

    <hr>

    <b-button @click="testFunction">Run!!!</b-button>

    <b-checkbox-group stacked v-if="!!fetchedData" v-for="Hierarchy_01 in fetchedData">
      <b-form-checkbox
        :value="Hierarchy_01.value"
        @change="Hierarchy_01.insertFunctionNameHere()"
        v-model="Hierarchy_01.checked"
        :indeterminate="Hierarchy_01.getIntermediate()">
        {{Hierarchy_01.value}}
        <b-checkbox-group stacked v-for="Hierarchy_02 in Hierarchy_01.getChildren()">
          <b-form-checkbox
            :value="Hierarchy_02.value"
            @change="Hierarchy_02.insertFunctionNameHere()"
            v-model="Hierarchy_02.checked"
            :indeterminate="Hierarchy_02.getIntermediate()">
            {{Hierarchy_02.value}}
            <b-checkbox-group stacked v-for="Hierarchy_03 in Hierarchy_02.getChildren()">
              <b-form-checkbox :value="Hierarchy_03.value" v-model="Hierarchy_03.checked"
                               @click="Hierarchy_03.insertFunctionNameHere()"
                               :indeterminate="Hierarchy_03.getIntermediate()">
                {{Hierarchy_03.value}}
                <b-checkbox-group stacked v-for="Hierarchy_04 in Hierarchy_03.getChildren()">
                  <b-form-checkbox :value="Hierarchy_04.value" v-model="Hierarchy_04.checked"
                                   @change="Hierarchy_04.insertFunctionNameHere()"
                                   :indeterminate="Hierarchy_04.getIntermediate()">
                    {{Hierarchy_04.value}}
                  </b-form-checkbox>
                </b-checkbox-group>
              </b-form-checkbox>
            </b-checkbox-group>
          </b-form-checkbox>
        </b-checkbox-group>
      </b-form-checkbox>
    </b-checkbox-group>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Node from '@/classes/Node';

  @Component({
    components: {}
  })
  export default class HierarchyList3 extends Vue {
    data: string = '';
    fetchedData: Node[] = [];

    mounted() {
      fetch('http://localhost:3000')
        .then(response => {
          response.json().then(jo => {
            this.fetchedData = this.fetchSearchResult(jo);
          });
        });
    }

    fetchSearchResult(rawResult: any): Node[] {
      let ret: Node[] = [];
      for (let h1 of rawResult.hierarchy_01) {
        let h1Node = new Node(h1.name);
        for (let h2 of h1.hierarchy_02) {
          let h2Node = new Node(h2.name);
          for (let h3 of h2.hierarchy_03) {
            let h3Node = new Node(h3.name);
            let h4Node = new Node(h3.hierarchy_04);
            h3Node.addChild(h4Node);
            h2Node.addChild(h3Node);
          }
          h1Node.addChild(h2Node);
        }
        ret.push(h1Node);
      }
      return ret;
    }

    testFunction() {

    }

    changeIcon() {
      // TODO CHANGE ICON HERE
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
