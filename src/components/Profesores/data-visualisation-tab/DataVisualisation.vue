<template>
  <div class="data-visualisation-tab dashboard-tab" style>
    <div class="row" style>
      <div class="col" style>
        <!-- <button class="btn btn-primary btn-sm" v-on:click="selectedCheckbox()">
            Visualizar expediente
        </button>-->
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
import Vue from 'vue'
import BadgeColumn from 'components/tables/BadgeColumn.vue'
import DonutChartData from './DonutChartData'
import FieldsDef from './fields-definition'
import TableData from './TableData'

Vue.component('badge-column', BadgeColumn)

export default {
  name: 'data-visualisation-tab',

  data () {
    return {
      flag: true,
      donutChartData: DonutChartData,
      apiMode: false,
      sortFunctions: FieldsDef.sortFunctions,
      tableData: {
        // data: this.$store.state.listaProfes.data,
        data: TableData.data,
        filterableFields: ['codigo']
      },
      onEachSide: 1,
      tableFields: FieldsDef.tableFields,

      dataModeFilterableFields: [
        'categoria',
        'codigo',
        'nombre',
        'departamento',
        'seccion'
      ],

      itemsPerPage: [
        {
          value: 10
        }
      ]
      // errors: [],
    }
  },
  created () {
    this.$store.dispatch('listaProfes').then(response => {
      if (this.$store.state.listaProfes.status) {
        this.tableData.data = this.$store.state.listaProfes.data
        this.flag = true
      }
    })
  },
  methods: {
    selectedCheckbox: async function () {
      this.$store.dispatch('usSelect').then(response => {
        if (this.$store.state.usSelect.status) {
          this.$router.push({ name: 'perfilSelect' })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-container {
  padding: 0 2rem;
  height: 24rem;
}

.btn {
  display: block;
  position: absolute;
  right: 3%;
}
</style>
