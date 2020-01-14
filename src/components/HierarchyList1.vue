<template>
  <div class="HierarchyList1" style="background: lightblue">
    <b-button v-b-toggle.collapse-a.collapse-b>Toggle Both Collapse A and B</b-button>

    <!-- Elements to collapse -->
    <b-collapse id="collapse-a" class="mt-2">
      <b-card>I am collapsible content A!
        <b-collapse id="collapse-b" class="mt-2">
          <b-card>I am collapsible content B!</b-card>
        </b-collapse>
      </b-card>
    </b-collapse>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Any text can go here
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-2 variant="info">Accordion 2
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>any other text could be here
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block href="#" v-b-toggle.accordion-2 variant="info">Accordion 2
                        </b-button>
                      </b-card-header>
                      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <b-card-text>deepest text</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

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
  export default class HierarchyList1 extends Vue {
  }
</script>
