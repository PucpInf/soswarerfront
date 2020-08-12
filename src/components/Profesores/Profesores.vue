<template>
  <vuestic-widget :headerText="'Profesores'">
    <div class="dashboard" style>
      <div>
        <data-visualisation-tab></data-visualisation-tab>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 offset-md-8"></div>
    </div>
  </vuestic-widget>
</template>

<script>
import Vue from 'vue'
import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
import CustomActionsExpAd from './CustomActionsExpAd'

Vue.component('custom-actionsExpAd', CustomActionsExpAd)

export default {
  name: 'Profesores',
  components: {
    DataVisualisationTab
  }
}
</script>
