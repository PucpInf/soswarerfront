<template>
  <vuestic-widget :headerText="this.title">
    <div class="dashboard" style="" >
      <div >
        <data-visualisation-tab></data-visualisation-tab>
      </div>
    </div>
    <div class="row"  >
      <div class="col-md-2 offset-md-8"   > </div>
    </div>
  </vuestic-widget>
</template>

<script>
import Vue from 'vue'
import DataVisualisationTab from './DataVisualisationTab.vue'
import CustomActions from './AprobacionSeccionActions'

Vue.component('custom-actionsAE', CustomActions)

export default {
  name: 'AprobacionSeccion',
  data () {
    return {
      title: ''
    }
  },
  components: {
    DataVisualisationTab
  },
  created () {
    // load: function () {
    this.title = 'Aprobación Previa de Descargas - Sección'
    // }
  }
}
</script>
