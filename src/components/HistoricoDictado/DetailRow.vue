  <template>
  <div @click="onClick">
    <div class="inline field">
      <h5>Lista de docentes</h5>
      <hr class="separador">
      <div class="grupo">
        <div class="bloque">
          <div class="row">
            <label class="col-md-2">De acuerdo a preferencias de la Jefatura (total de profesores):</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '',
      prefSelect: [],
      profDepSelect: [],
      ciclos: Object,
      listProfPref: [],
      listProfDpto: [],
      flag: '',
      profPref: [
        {
          id: '',
          description: '',
          idUsuario: ''
        }
      ],
      profTot: [
        {
          id: '',
          description: '',
          idUsuario: ''
        }
      ]
    }
  },
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  watch: {
    flag: function () {
      if (this.flag) {
        this.prefSelect = ''
      } else {
        this.profDepSelect = ''
      }
    }
  },
  methods: {
    onClick (event) {
      console.log('my-detail-rowC: on-click', event.target)
    },
    guardar: function () {
      var iduser = []
      if (this.prefSelect === null && this.profDepSelect === null) {
        alert('Debe seleccionar al menos un profesor')
        return
      }
      for (var i = 0; i < this.prefSelect.length; i++) {
        iduser.push(this.prefSelect[i].idUsuario)
      }
      for (var j = 0; j < this.profDepSelect.length; j++) {
        iduser.push(this.profDepSelect[j].id)
      }
      // alert(JSON.stringify(iduser))
      var json = {
        idHorario: this.rowData.id,
        idUsuario: iduser,
        idCiclo: this.rowData.idCiclo,
        idCurso: this.rowData.idCurso,
        horas: this.rowData.curso.credTeor
      }
      this.$store.dispatch('asignaCarga', json).then(response => {
        if (this.$store.state.asignaCarga.status) {
          alert('Se asignó el horario al nuevo(s) profesor(es)')
        }
      })
    },
    filtraProfPref: function () {
      this.flag = false
      return this.listProfPref.filter(ppref => {
        return ppref.nombre.match(this.pref)
      })
    },
    filtraProfDpto: function () {
      this.flag = true
      return this.listProfDpto.filter(pdpto => {
        return pdpto.nombre.match(this.profDep)
      })
    },
    prueba: function () {
      alert('hola')
    }
  },
  created: function () {
    // Lista de profesores con preferencia en un curso
    this.$store
      .dispatch('GetListProfePref', this.rowData.idCurso)
      .then(response => {
        // alert(this.rowData.idCurso)
        if (this.$store.state.GetListProfePref.status) {
          this.listProfPref = this.$store.state.GetListProfePref.body
          // alert(JSON.stringify(this.$store.state.GetListProfePref.body))
        }
      })
    // Lista de profesores totales del departamento
    this.$store
      .dispatch(
        'GetListProfeDpto',
        this.$store.state.us.body.seccion.departamento.id
      )
      .then(response => {
        // alert(this.$store.state.us.body.seccion.departamento.id)
        if (this.$store.state.GetListProfeDpto.status) {
          this.listProfDpto = this.$store.state.GetListProfeDpto.body
          // alert(JSON.stringify(this.$store.state.GetListProfeDpto.body))
        }
      })
  }
}
</script>

  <style>
.separador {
  width: 100%;
  background-color: #929ca2;
  height: 1px;
}

.bloque {
  display: block;
}
</style>
