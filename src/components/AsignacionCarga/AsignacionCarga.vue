<template>
  <vuestic-widget :headerText="'Asignación de Carga'">
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
      <vuetable
        ref="vuetable"
        :api-url="apiUrl"
        :css="css.table"
        :fields="fields"
        :perPage="10"
        :multi-sort="true"
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
import Vue from 'vue'

Vue.component('my-detail-rowC', DetailRow)
export default {
  components: {
    Vuetable
  },
  data () {
    return {
      apiMode: false,
      apiUrl: this.$store.state.server + '/api/seccion/GetCursosHorarios/' + 1,
      css: DataTableStyles,
      fields: [
        {
          name: 'curso.codigo',
          title: 'CLAVE',
          sortField: 'curso.codigo'
        },
        {
          name: 'curso.nombre',
          title: 'NOMBRE DE CURSO',
          sortField: 'curso.nombre'
        },
        {
          name: 'curso.creditosTot',
          title: 'CRED TOT',
          sortField: 'curso.creditosTot'
        },
        {
          name: 'curso.credTeor',
          title: 'CRED TEOR',
          sortField: 'curso.credTeor'
        },
        {
          name: 'curso.credPrac',
          title: 'CRED PRAC',
          sortField: 'curso.credPrac'
        },
        {
          name: 'nombre',
          title: '# HORARIO',
          sortField: 'nombre'
        },
        {
          name: 'usuario.persona.nombre_completo',
          title: 'PROFESOR ASIGNADO',
          sortField: 'usuario.persona.nombre_completo'
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
      this.$router.push({ name: 'ConsultaPreferencias' })
    },
    resultado () {
      this.$router.push({ name: 'ResultadoxDocente' })
    }
  }
}
</script>
