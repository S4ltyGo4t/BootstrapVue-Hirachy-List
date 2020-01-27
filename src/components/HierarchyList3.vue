<template>
  <div class="HierarchyList3">

    <b-container>
      <b-row>

        <b-col v-if="!!rootNode">
          <h1>Bootstrap ListGroup</h1>
          <hr>
          <CustomCheckbox :key="rootNode.id" :cb-model="rootNode"/>
          <b-list-group class="ml-4" v-for="hierarchy_01 in rootNode.getChildren()">
            <CustomCheckbox :cb-model="hierarchy_01"/>
            <b-list-group class="ml-4" v-for="hierarchy_02 in hierarchy_01.getChildren()">
              <CustomCheckbox :cb-model="hierarchy_02"/>
              <b-list-group class="ml-4 test" v-for="hierarchy_03 in hierarchy_02.getChildren()">
                <CustomCheckbox :cb-model="hierarchy_03"/>
                <b-list-group class="ml-4" v-for="hierarchy_04 in hierarchy_03.getChildren()">
                  <CustomCheckbox :cb-model="hierarchy_04"/>
                </b-list-group>
              </b-list-group>
            </b-list-group>
          </b-list-group>
        </b-col>

        <b-col v-if="!!rootNode">
          <h1>Plain UL</h1>
          <hr>
          <CustomCheckbox :key="rootNode.id" :cb-model="rootNode"/>
          <ul class="nested" :class="{active: rootNode.showChildren}">
            <li v-for="hierarchy_01 in rootNode.getChildren()">
              <CustomCheckbox :cb-model="hierarchy_01"/>
              <ul class="nested" :class="{active: hierarchy_01.showChildren}">
                <li v-for="hierarchy_02 in hierarchy_01.getChildren()">
                  <CustomCheckbox :cb-model="hierarchy_02"/>
                  <ul class="nested" :class="{active: hierarchy_02.showChildren}">
                    <li v-for="hierarchy_03 in hierarchy_02.getChildren()">
                      <CustomCheckbox :cb-model="hierarchy_03"/>
                      <ul>
                        <li v-for="hierarchy_04 in hierarchy_03.getChildren()">
                          <CustomCheckbox :cb-model="hierarchy_04"/>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Node from '@/classes/Node';
  // import CustomCheckbox from '@/components/CustomCheckbox.vue';

  @Component({
    components: {CustomCheckbox: () => import('@/components/CustomCheckbox.vue')}
  })
  export default class HierarchyList3 extends Vue {
    get rootNode() {
      return this.$store.state.rootNode;
    }

    testNode: Node = new Node('test', 'any_id');

    mounted() {
      fetch('http://localhost:3000')
        .then(response => {
          response.json().then(jo => {
            let fetchedData = this.fetchSearchResult(jo);
            this.$store.dispatch('initRootNode', fetchedData);
          });
        });
    }

    fetchSearchResult(rawResult: any): Node {
      let ret: Node = new Node('root_node', 'root');
      for (let h1 of rawResult.hierarchy_01) {
        let h1Node = new Node(h1.name, h1.id);
        for (let h2 of h1.hierarchy_02) {
          let h2Node = new Node(h2.name, h2.id);
          for (let h3 of h2.hierarchy_03) {
            let h3Node = new Node(h3.name, h3.id);
            let h4Node = new Node(h3.hierarchy_04, h3.id);
            h3Node.addChild(h4Node);
            h2Node.addChild(h3Node);
          }
          h1Node.addChild(h2Node);
        }
        ret.showChildren = true;
        ret.addChild(h1Node);
      }

      return ret;
    }

    testFunction() {
      if (!!this.rootNode) {
        this.rootNode.printChildren();
      } else {
        console.log('Fetched data is null.');
      }
    }

    changeIcon() {
      // TODO CHANGE ICON HERE
    }

    collapse(element: any) {
      element.isActive = !element.isActive;
    }

  }
</script>

<style scoped>
  ul, #myUL {
    list-style-type: none;
  }

  #myUL {
    margin: 0;
    padding: 0;
  }

  .caret {
    cursor: pointer;
    -webkit-user-select: none; /* Safari 3.1+ */
    -moz-user-select: none; /* Firefox 2+ */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;
  }

  .caret::before {
    content: "\25B6";
    color: black;
    display: inline-block;
    margin-right: 6px;
  }

  .caret-down::before {
    -ms-transform: rotate(90deg); /* IE 9 */
    -webkit-transform: rotate(90deg); /* Safari */
    transform: rotate(90deg);
  }

  .nested {
    display: none;
    cursor: pointer;
  }

  .active {
    display: block;
    cursor: pointer;
  }

</style>
