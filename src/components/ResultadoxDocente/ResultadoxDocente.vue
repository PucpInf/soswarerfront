<template>
  <vuestic-widget :headerText="'RESULTADOS POR DOCENTE' | translate">
    <div class="dashboard" style>
      <div style="margin-bottom: 20px" class="row btn-margin-row">
        <div style="margin-left: 10px" class="justify-content-center btn-margen">
          <button class="btn btn-primary btn-sm" @click="asignacion()">{{'Asignación de Carga'}}</button>
        </div>
        <div style="margin-left: -80px" class="justify-content-center btn-margen">
          <button
            class="btn btn-primary btn-sm"
            @click="verPreferencias()"
          >{{'Consulta de Preferencias'}}</button>
        </div>
      </div>
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
import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'

export default {
  name: 'dashboard',
  components: {
    DataVisualisationTab
  },
  methods: {
    asignacion () {
      this.$router.push({ name: 'AsignacionCarga' })
    },
    verPreferencias () {
      this.$router.push({ name: 'ConsultaPreferencias' })
    }
  }
}
</script>
