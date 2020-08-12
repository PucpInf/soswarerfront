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
import delpreferencia from './CustomActions'
Vue.component('eliminar-preferencia', delpreferencia)

export default {
  data () {
    return {
      flag: false,
      apiruta:
        this.$store.state.server +
        'api/PreferenciaDictado/' +
        this.$store.state.us.body.id,
      apiMode: false,
      sortFunctions: FieldsDef.sortFunctions,
      tableData: {
        data: this.$store.state.UserPreferencias.body,
        filterableFields: ['estado']
      },
      onEachSide: 1,
      tableFields: FieldsDef.tableFields,

      dataModeFilterableFields: [
        'curso.nombre',
        'curso.codigo',
        'ciclo.ciclo',
        'estado'
      ],

      itemsPerPage: [
        {
          value: 10
        }
      ]
    }
  },
  created () {
    // alert(this.apiruta)
    this.$store
      .dispatch('UserPreferencias', this.$store.state.us.body.id)
      .then(response => {
        this.tableData.data = this.$store.state.UserPreferencias.body
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
