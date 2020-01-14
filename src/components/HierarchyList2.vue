<template>
  <div class="HierarchyList2" style="background: lightgray">
    <ul>
      <li>
        <b-icon-dot variant="info" font-scale="1.2"/>
        <span>FAS</span>
      </li>
      <li>
        <b-icon-dot font-scale="1.2"/>
        <span variant="info">AVM</span>
      </li>
      <li>
        <b-icon-chevron-right font-scale="1.1"/>
        <span>QDM</span>
        <ul>
          <li>
            <b-icon-chevron-down/>
            Black Tea
          </li>
          <li>
            <b-icon-dot/>
            White Tea
          </li>
          <li>
            <b-icon-chevron-right/>
            Green Tea
            <ul>
              <li>
                <b-icon-dot/>
                Sencha
              </li>
              <li>
                <b-icon-dot/>
                Gyokuro
              </li>
              <li>
                <b-icon-dot/>
                Matcha
              </li>
              <li>
                <b-icon-dot/>
                Pi Lo Chun
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
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

  @Component({})
  export default class HierarchyList2 extends Vue {

    handleClick(e: any) {
      console.log(e);

    };
  }
</script>

<style scoped>
  .caret {
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
  }

  .caret::before {
    content: "\25B6";
    color: black;
    display: inline-block;
    margin-right: 6px;
  }

  .cartet-down::before {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .nested {
    display: none;
  }

  .active {
    display: block;
  }

  ul {
    list-style-type: none;
  }
</style>
