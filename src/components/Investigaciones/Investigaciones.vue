<template>
  <vuestic-widget :headerText="'Investigaciones'">
    <!-- BOTONES -->
    <div style="margin-bottom: 20px" class="row btn-margin-row">
      <div style="margin-left: 10px" class="justify-content-center btn-margen">
        <button class="btn btn-primary btn-micro" @click="registrarNuevo()">
          <div class="btn-with-icon-content btn-micro">
            <i class="fa fa-plus-square"></i>
            {{'Registrar nuevo'}}
          </div>
        </button>
      </div>
      <div style="margin-left: 10px" class="justify-content-center btn-margen">
        <button class="btn btn-primary btn-micro" @click="cargaMasiva()">
          <div class="btn-with-icon-content btn-micro">
            <i class="fa fa-upload"></i>
            {{'Carga masiva'}}
          </div>
        </button>
      </div>
    </div>
    <!-- FILTRO -->
    <div class="row">
        <div class="col-md-12">
          <div slot="body">
            <div class="row filters-page__filter-bar-container">
              <div  class="form-group with-icon-left filters-page__filter-bar">
                <div id="search" class="input-group">
                <input name="query" v-model="searchQuery" id="query" required/>
                <i class="glyphicon glyphicon-search icon-left input-icon search-icon"></i>
                <label class="control-label" for="query">Buscar...</label><i class="bar"></i>
                </div>
              </div>
              <vuestic-simple-select
                class="filters-page__filter-bar"
                label="Código de Validación"
                v-model="codigo"
                :options="listaCodigoVal"
              />

            </div>
          </div>
        </div>
      </div>
      <!-- TABLA -->
      <!--x|div class="table-responsive">
        <table class="table table-striped first-td-padding" onCellClick={this.cellClicked}>
          <thead>
          <tr>
            <td class="filters-page__table-heading">ID</td>
            <td class="filters-page__table-heading">Nombre Docente</td>
            <td class="filters-page__table-heading">Sección</td>
            <td align="right" class="filters-page__table-heading">Título</td>
            <td></td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in filteredItems" v-bind:key="item.email">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.city }}</td>
            <td align="right">{{ item.score }}</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div-->
      <div id="tabla-investigaciones">

      <demo-grid
        style="cursor: pointer"
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery"
        :filter-codigo="codigo"
        :labels="responseColumns"
        @selected="setEntry">
      </demo-grid>
      </div>
  </vuestic-widget>
</template>

<script>
import VuesticWidget
  from '../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget'
import FilterBar
  from '../../vuestic-theme/vuestic-components/vuestic-datatable/datatable-components/FilterBar.vue'
import VuesticSimpleSelect
  from '../../vuestic-theme/vuestic-components/vuestic-simple-select/VuesticSimpleSelect'
import { SemipolarSpinner } from 'epic-spinners'
import { listaCodigoVal } from './InvFiltroData'
import DemoGrid from './DemoGrid'
import DetailGrid from './DetailGrid'
import Vue from 'vue'

Vue.component('inv-detailrow', DetailGrid)
export default {
  name: 'Investigaciones',
  components: {
    VuesticWidget, FilterBar, SemipolarSpinner, VuesticSimpleSelect, DemoGrid, DetailGrid
  },
  data () {
    return {
      entry: null,
      searchQuery: '',
      gridColumns: ['Título', 'Abstract', 'Indicador de Calidad', 'Código de validación', 'Link'],
      responseColumns: ['titulo', 'abstract', 'indicador_calidad', 'codigo_validacion', 'link'],
      gridData: [
        { ID: '2020', NombreDocente: 'Chuck Norris', Sección: 'Informática', Título: 'Una obra maestra', codigo: 'P1', Año: '2017' },
        { ID: '2040', NombreDocente: 'Jose Bejarano', Sección: 'Informática', Título: 'Vue 101', codigo: 'A1', Año: '2019' },
        { ID: '2520', NombreDocente: 'Jean Sullon', Sección: 'Industrial', Título: 'El Crack', codigo: 'P2', Año: '2007' },
        { ID: '2028', NombreDocente: 'Alvaro Calvo', Sección: 'Informática', Título: 'Cómo programar Laravel y no morir en el intento', codigo: 'P1', Año: '2010' },
      ],
      codigo: '',
      listaCodigoVal: listaCodigoVal
    }
  },
  mounted () {
    this.$store.dispatch('getInvestigaciones', {}).then(response => {
      this.gridData = response.data.data
      console.log(this.gridData)
    })
  },
  methods: {
    setEntry (entry) {
      this.entry = entry
    },
    onCellClicked (data, field, event) {
      console.log('cellClicked: ', field.name)
      alert(data.name)
      this.$refs.vuetable.toggleDetailRow(data.id)
    },
    registrarNuevo () {
      this.$router.push({ name: 'MantInvestigacion' })
    },
    cargaMasiva () {
      this.$router.push({ name: 'CargaMasiva' })
    }
  },
  computed: {}
}
</script>

<style lang="scss">
.filters-page {
  &__tags {
    display: flex;
  }
  &__filter-bar {
    width: 300px;
  }
  &__filter-bar-container {
    margin: 0;
    justify-content: space-between;
  }
  &__table-heading {
    color: $vue-green
  }
  &__collapse {
    .vuestic-collapse__body {
      background-color: white;
    }
  }
  &__clear-all-text {
    cursor: pointer;
    color: $vue-green;
    margin-top: 0.3rem;
  }
}
</style>
