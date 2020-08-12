<template>
  <vuestic-widget :headerText="'Histórico de dictado'">
    <div style="margin-bottom: 20px" class="row btn-margin-row">
      <div style="margin-left: 10px" class="justify-content-center btn-margen">
        <button
          class="btn btn-primary btn-sm"
          @click="verPreferencias()"
        >{{'Consulta de Preferencias'}}</button>
      </div>
      <div style="margin-left: -80px" class="justify-content-center btn-margen">
        <button class="btn btn-primary btn-sm" @click="resultado()">{{'Resultado por Docente'}}</button>
      </div>
    </div>

    <div>
      <filter-bar></filter-bar>
      <vuetable
        ref="vuetable"
        :data = jsonshow
        :css="css.table"
        :fields="['login']"
        :perPage="10"
        :multi-sort="true"
        pagination-path=""
        detail-row-component="my-detail-rowC"
        @vuetable:cell-clicked="onCellClicked"
      ></vuetable>
    </div>
  </vuestic-widget>
</template>

<style lang="scss">
.btn-margen {
  margin-right: 110px;
}

.sel-seccion {
  margin-right: 0;
}
</style>

<script type="text/javascript">
import Vuetable from 'vuetable-2/src/components/Vuetable'
import DataTableStyles from '../../vuestic-theme/vuestic-components/vuestic-datatable/data/data-table-styles'
import DetailRow from './DetailRow'
import FilterBar from './FilterBar'
import Vue from 'vue'
import VueEvents from 'vue-events'

Vue.use(VueEvents)
Vue.component('my-detail-rowC', DetailRow)
Vue.component('filter-bar', FilterBar)

export default {
  components: {
    Vuetable
  },
  created () {
    this.$store.dispatch('GetPrueba').then(response => {
      var data = response.data
      this.jsonshow = data
      this.json = data
    })
  },
  data () {
    return {
      jsonshow: this.$store.state.prueba.data,
      json: this.$store.state.prueba.data,
      // apiUrl: this.$store.state.server + '/api/seccion/GetCursosHorarios/' + 1,
      apiUrl: 'https://api.github.com/users/hadley/orgs',
      css: DataTableStyles,
      fields: [
        {
          name: 'id',
          title: 'CLAVE2',
          sortField: 'curso.codigo'
        },
        {
          name: 'curso.nombre',
          title: 'NOMBRE DE CURSO',
          sortField: 'NOMBRE DE CURSO'
        },
        {
          name: 'curso.creditosTot',
          title: 'CRED TOT',
          sortField: 'curso.creditosTot'
        },
        {
          name: 'curso.credTeor',
          title: 'CRED TEOR',
        },
        {
          name: 'curso.credPrac',
          title: 'CRED PRAC',
        },
        {
          name: 'nombre',
          title: '# HORARIO',
        },
        {
          name: 'usuario.persona.nombre_completo',
          title: 'PROFESOR ASIGNADO',
          sortField: 'PROFESOR ASIGNADO'
        }
      ],
      seccion: [
        {
          id: 1,
          description: 'Única'
        },
        {
          id: 2,
          description: 'Informática'
        },
        {
          id: 3,
          description: 'Industrial'
        }
      ]
    }
  },
  methods: {
    onCellClicked (data, field, event) {
      console.log('cellClicked: ', field.name)
      // alert(data.idCurso)
      this.$refs.vuetable.toggleDetailRow(data.id)
    },
    verPreferencias () {
      this.Filtro()
      // this.$router.push({ name: 'ConsultaPreferencias' })
    },
    Filtro () {
      var data = this.$store.state.prueba.data
      // alert(JSON.stringify(data))
      this.jsonshow = data
      this.json = data
      this.jsonshow = data.filter(p => p.id === 34165516)
      // this.$refs.vuetable.setdata(this.jsonshow)
    },
    resultado () {
      this.$router.push({ name: 'ResultadoxDocente' })
    }
  },
  events: {
    'filter-set' (filterText) {
      this.moreParams = {
        filter: filterText
      }
      Vue.nextTick(() => this.$refs.vuetable.refresh())
    },
    'filter-reset' () {
      this.moreParams = {}
      Vue.nextTick(() => this.$refs.vuetable.refresh())
    }
  }
}
</script>
