<template>
  <div class="data-visualisation-tab dashboard-tab" style="">
    <div class="row" style="">
      <div class="col" style="">
        <vuestic-data-table
          v-if="this.flag"
          :apiMode="apiMode"
          :tableData="tableData"
          :tableFields="tableFields"
          :itemsPerPage="itemsPerPage"
          :onEachSide="onEachSide"
          :sortFunctions="sortFunctions"
          :dataModeFilterableFields="dataModeFilterableFields"/>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import FieldsDef from './fields-definition'
import CustomActions from './AprobacionSeccionActions'

Vue.component('AprobacionSeccionActions', CustomActions)

export default {
  name: 'data-visualisation-tab',

  data () {
    return {
      flag: false,
      apiMode: false,
      sortFunctions: FieldsDef.sortFunctions,
      tableData: {
        'data': this.$store.state.sectionRequests,
        'filterableFields': ['created_at']
      },
      onEachSide: 1,
      tableFields: FieldsDef.tableFields,

      dataModeFilterableFields: ['index', 'requestType', 'created_at', 'state'],

      itemsPerPage: [
        {
          value: 10
        }
      ],
    }
  },
  beforeCreate () {
    var request = {
      'id': this.$store.state.us.body.seccion.id,
      'filter': 'sectionId',
      'states': ['Pendiente'],
      'mutation': 'getSectionRequests'
    }
    this.$store.dispatch('getAllRequests', request).then(response => {
      this.tableData.data = this.$store.state.sectionRequests
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

  .btn{
    display: block;
    position: absolute;
    right: 3%;
  }

</style>
