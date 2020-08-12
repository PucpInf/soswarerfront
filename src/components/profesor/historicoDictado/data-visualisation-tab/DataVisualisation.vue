<template>
  <div class="data-visualisation-tab dashboard-tab" style="">
    <div class="row" style="">
      <!--
      <div class="col-md-6" style="">
        <div class="chart-container" style="">
          <vuestic-chart v-bind:data="donutChartData" type="donut"></vuestic-chart>
        </div>
      </div>
    -->
      <div class="col" style="">
        <vuestic-data-table
          v-if="this.flag"
          :apiMode="apiMode"
          :tableData="tableData"
          :tableFields="tableFields"
          :itemsPerPage="itemsPerPage"
          :onEachSide="onEachSide"
          :sortFunctions="sortFunctions"
          :dataModeFilterableFields="dataModeFilterableFields"
        />
      </div>
    </div>
  </div>
</template>

<script>
  // import Vue from 'vue'
  // import BadgeColumn from 'components/tables/BadgeColumn.vue'
  import FieldsDef from './fields-definition'


  // Vue.component('badge-column', BadgeColumn)

  export default {
    name: 'data-visualisation-tab',

    data () {
      return {
        flag: false,
        apiMode: false,
        sortFunctions: FieldsDef.sortFunctions,
        tableData: {
          'data': this.$store.state.historicosProf,
          'filterableFields': ['codigo'],
        },
        onEachSide: 1,
        tableFields: FieldsDef.tableFields,
        dataModeFilterableFields: ['codigo', 'curso', 'horario', 'ciclo', 'facultad', 'horas'],
        itemsPerPage: [
          {
            value: 10
          }
        ],
      }
    },
    created () {
      this.$store.dispatch('getHistoricosProf', this.$store.state.us.body.id).then(response => {
        this.tableData.data = this.$store.state.historicosProf
        this.flag = true
      })
    }
  }

  </script>

  <style lang="scss" scoped>

    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins/breakpoints";

    .chart-container {
      padding: 0 2rem;
      height: 24rem;
    }


  </style>
