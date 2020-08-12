<template>
  <div class="data-visualisation-tab dashboard-tab" style>
    <div class="row" style>
      <div class="col" style>
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
import FieldsDef from './fields-definition'
import CustomActions from './CustomActions'

Vue.component('custom-actions2.0', CustomActions)

export default {
  name: 'data-visualisation-tab',

  data () {
    return {
      flag: false,
      apiMode: false,
      sortFunctions: FieldsDef.sortFunctions,
      tableData: {
        data: this.$store.state.setcursosOano.body.cursos,
        filterableFields: ['nombre']
      },
      onEachSide: 1,
      tableFields: FieldsDef.tableFields,

      dataModeFilterableFields: ['nombre'],

      itemsPerPage: [
        {
          value: 10
        }
      ]
    }
  },
  mounted () {
    var fechaActual = new Date()
    var year = fechaActual.getFullYear()
    this.$store.dispatch('GetCursosOAno', year).then(response => {
      this.tableData.data = this.$store.state.setcursosOano.body.cursos
      this.flag = true
    })
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
