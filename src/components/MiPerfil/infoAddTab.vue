<template>
  <div class="data-visualisation-tab dashboard-tab">
  <h4>Estadísticas: </h4>
    <!-- Gráficos Donut -->
    <div class="row">
      <div class="col-md-6">
        <h4>Licencias</h4>
        <div class="chart-container">
          <vuestic-chart :data="donutLicencias" type="donut"></vuestic-chart>
        </div>
      </div>
      <div class="col-md-6">
        <h4>Horas Semanales de dictado</h4>
        <div class="chart-container">
          <vuestic-chart :data="donutCarga" type="donut"></vuestic-chart>
        </div>
      </div>
    </div>
    <br>
    <br>
    <!-- Tabla -->
    <div class="row">
      <h4>Carga horaria</h4>
      <div class="tabla">
        <vuetable
        ref="vuetable"
        :api-url="apiUrl"
        :css="css.table"
        :fields="fields"
        :perPage="10"
        :multi-sort="true"
        detail-row-component="my-detail-row">
        </vuetable>
      </div>
    </div>
    <div class="row">
      <div id="btnexport">
        <button class="btn btn-primary btn-micro" v-on:click="imprimir()">
          {{'Exportar' | translate}}
        </button>
      </div>
    </div>
    <!-- Gráfico de barras -->
    <div class="row">
      <h4>Horas de dictado</h4>
    </div>
    <div class="row">
      <div class="chart-container2">
        <vuestic-chart :data="verticalBarChartData" type="vertical-bar"></vuestic-chart>
      </div>
    </div>
  </div>
  </template>
<script type="text/javascript">
import Vuetable from 'vuetable-2/src/components/Vuetable'
import DataTableStyles from '../../vuestic-theme/vuestic-components/vuestic-datatable/data/data-table-styles'
import * as JSPDF from 'jspdf'
import 'jspdf-autotable'
import store from 'vuex-store'

let palette = store.getters.palette

export default {
  name: 'info-Add-Tab',
  components: {
    Vuetable,
  },
  data () {
    return {
      // Data de gráficos donut
      donutLicencias: {
        labels: ['Dias de Licencia', 'Sin Carga'],
        datasets: [{
          label: 'Días)',
          backgroundColor: [palette.primary, palette.info],
          data: [0, 80] }
        ]
      },
      donutCarga: {
        labels: ['Carga Horas Dictado ', 'Horas Disponibles'],
        datasets: [{
          label: 'Días)',
          backgroundColor: [palette.primary, palette.info],
          data: [0, 10] }
        ]
      },
      horastrabajadas: null,
      // Data de gráfico de barras
      verticalBarChartData: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        datasets: [
          {
            label: 'Horas de dictado',
            backgroundColor: palette.primary,
            borderColor: palette.transparent,
            data: [0, 0, 0, 0, 0, 0]
          }
        ]
      },
      // Data de la tabla
      apiMode: false,
      apiUrl: 'http://200.16.7.152/api/curso/GetProfesoresCurso/' + this.$store.state.us.body.id,
      css: DataTableStyles,
      // data de licencia del usuario
      diaslic: null,
      licenciaCiclo: Object,
      datCargaHor: [],
      todos: [
        {
          titulo: 'titulo 1',
          descripcion: 'descripcion 1'
        },
        {
          titulo: 'titulo 2',
          descripcion: 'descripcion 2'
        }
      ],
      fields: [
        {
          name: 'codigoCurso',
          title: 'CODIGO',
          sortField: 'codigoCurso'
        },
        {
          name: 'nombreCurso',
          title: 'CURSO',
          sortField: 'nombreCurso'
        },
        {
          name: 'horario',
          title: 'HORARIO',
          sortField: 'horario'
        },
        {
          name: 'nombreDepartamento',
          title: 'UN. ACADEMICA',
          sortField: 'nombreDepartamento'
        },
        {
          name: 'horasDictado',
          title: 'HORAS',
          sortField: 'horasDictado'
        }
      ],
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      var param = { idUsuario: this.$store.state.us.body.id, idCiclo: 1 }
      var dat = this.$store.state.us.body.id
      this.$store.dispatch('GetLicencias', param).then(response => {
        if (response.data.body) {
          this.diaslic = response.data.body.diasLicencia
          this.donutLicencias = {
            labels: ['Días tomados de licencia', 'Días Trabajo'],
            datasets: [{
              label: 'Días)',
              backgroundColor: [palette.primary, palette.info],
              data: [this.diaslic, 80 - this.diaslic] }
            ]
          }
        }
      })
      var dataid = { idProfesor: this.$store.state.us.body.id }
      this.$store.dispatch('GetEncuestasCursosDictados', dataid).then(response => {
        if (response.data) {
          this.datCargaHor = response.data
        }
      })
      this.$store.dispatch('GetlistHorarios', dat).then(response => {
        if (response.data.body) {
          var size = response.data.body.length
          var tam = 0
          for (var auxi = 0; auxi < size; auxi++) {
            tam = tam + response.data.body[auxi].horas
          }
          var tlunes = 0
          var tmartes = 0
          var tmierc = 0
          var tjuev = 0
          var tvier = 0
          var tsab = 0
          var si = response.data.body.length
          for (var i = 0; i < si; i++) {
            var sj = response.data.body[i].horarios_detalle.length
            for (var j = 0; j < sj; j++) {
              if (response.data.body[i].horarios_detalle[j].idDia === 1) {
                tlunes = tlunes + response.data.body[i].horarios_detalle[j].horasDictado
              } else if (response.data.body[i].horarios_detalle[j].idDia === 2) {
                tmartes = tmartes + response.data.body[i].horarios_detalle[j].horasDictado
              } else if (response.data.body[i].horarios_detalle[j].idDia === 3) {
                tmierc = tmierc + response.data.body[i].horarios_detalle[j].horasDictado
              } else if (response.data.body[i].horarios_detalle[j].idDia === 4) {
                tjuev = tjuev + response.data.body[i].horarios_detalle[j].horasDictado
              } else if (response.data.body[i].horarios_detalle[j].idDia === 5) {
                tvier = tvier + response.data.body[i].horarios_detalle[j].horasDictado
              } else {
                tsab = tsab + response.data.body[i].horarios_detalle[j].horasDictado
              }
            }
          }
          this.horastrabajadas = tlunes + tmartes + tmierc + tjuev + tvier + tsab
          this.verticalBarChartData = {
            labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
            datasets: [
              {
                label: 'Horas de dictado',
                backgroundColor: palette.primary,
                borderColor: palette.transparent,
                data: [tlunes, tmartes, tmierc, tjuev, tvier, tsab]
              }
            ]
          }
          var horasaux = 0
          if (this.horastrabajadas >= 10) {
            horasaux = 0
          } else {
            horasaux = 10 - this.horastrabajadas
          }
          this.donutCarga = {
            labels: ['Carga Horas Dictado ', 'Horas Disponibles'],
            datasets: [{
              label: 'Días)',
              backgroundColor: [palette.primary, palette.info],
              data: [this.horastrabajadas, horasaux] }
            ]
          }
        }
      })
    },
    imprimir () {
      var columns = [
        { title: 'Codigo', dataKey: 'codigoCurso' },
        { title: 'Curso', dataKey: 'nombreCurso' },
        { title: 'Horario', dataKey: 'horario' },
        { title: 'Unidad Academica', dataKey: 'nombreDepartamento' },
        { title: 'Horas', dataKey: 'horasDictado' }
      ]
      var doc = new JSPDF('p', 'pt')
      doc.text(30, 30, 'Reporte de Carga Semanal del Docente')
      doc.text(30, 85, 'Profesor: ' + this.$store.state.us.body.persona.nombres + ' ' + this.$store.state.us.body.persona.apPaterno + ' ' + this.$store.state.us.body.persona.apMaterno)
      doc.text(30, 120, ' ')
      doc.autoTable(columns, this.datCargaHor.data, { margin: { top: 115 } })
      doc.text(30, 250, 'Horas Total por Semana: ' + this.horastrabajadas)
      doc.save('reporteProfesor.pdf')
    }
  }
}
</script>

<style lang="scss">

.gen{
  margin-left: -600px;
}

.sub{
  font-weight: bold;
  margin-right: 5px;
}

.alone{
  display: block;
}

.ind{
  color: #49E286;
  font-size: 20px;
  font-weight: bold;
}

.ae{
  display: block;
}
.tabla{
  padding: 0;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.grafico{
  height: 400px;
  padding: 0;
  width: 80%;
  margin-left: 5%;
  margin-right: 5%;
}
.chart-container {
    padding: 0 2rem;
    width: 24rem;
    height: 24rem;
  }
.chart-container2 {
    padding: 0 2rem;
    width: 48rem;
    height: 24rem;
  }
#btnexport {
  margin-bottom: 1.5rem;
  margin-left: 40rem;
}
</style>
