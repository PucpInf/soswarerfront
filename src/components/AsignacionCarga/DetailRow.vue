  <template>
  <div @click="onClick">
    <div class="inline field">
      <h5>Lista de docentes</h5>
      <hr class="separador">
      <div class="grupo">
        <div class="bloque">
          <div class="row">
            <label class="col-md-2">De acuerdo con las preferencias de los profesores:</label>
            <button
              style="margin-top: 5px; margin-left: -10px"
              class="btn btn-primary btn-micro btn-with-icon rounded-icon"
            >
              <i style="padding-right: 4px" class="ion-md-person-add ion"></i>
            </button>
            <!-- <div class="col-md-3">
              <div class="form-group">
                <div class="input-group">
                  <input type="text" v-model="prefSelect" list="listaProfPref" placeholder="Escoger uno o dejar vacío" v-on:input="filtraProfPref" :select="prueba"/>
                  <datalist id="listaProfPref">
                    <option v-for="pref in this.listProfPref" v-bind:value="pref.idUsuario">
                    {{pref.usuario.persona.nombres + ' ' + pref.usuario.persona.apPaterno + ' ' + pref.usuario.persona.apMaterno}}
                    </option>
                  </datalist>
                  <label class="control-label" for="pref">{{'' | translate}}</label><i class="bar"></i>
                  </div>
                  <div style="margin-top: 15px" slot="iconRight" class="icon" @click="removeProduct(product)">
                    <span aria-hidden="true" class="ion ion-md-information-circle"/>
                  </div>
                </div>

            </div>-->
            <!-- <button style="margin-top: 5px; margin-left: -10px" class="btn btn-primary btn-micro btn-with-icon rounded-icon"><i style="padding-left: 9px" class="ion-md-information ion"></i></button> -->
            <div class="col-md-3">
              <fieldset>
                <vuestic-multi-select
                  label="Profesores de preferencia"
                  v-model="prefSelect"
                  name="prefSelect"
                  ref="prefSelect"
                  option-key="profe"
                  v-bind:options="listProfPref"
                ></vuestic-multi-select>
                <!-- <div style="margin-top: 15px" slot="iconRight" class="icon" @click="removeProduct(product)">
                    <span aria-hidden="true" class="ion ion-md-information-circle"/>
                </div>-->
              </fieldset>
            </div>
          </div>
        </div>

        <div class="bloque">
          <div class="row">
            <label class="col-md-2">De acuerdo a preferencias de la Jefatura (total de profesores):</label>
            <div
              style="margin-top: 5px; margin-left: -10px"
              class="btn btn-primary btn-micro btn-with-icon rounded-icon"
            >
              <i style="padding-right: 4px" class="ion-md-person-add ion"></i>
            </div>

            <div class="col-md-3">
              <fieldset>
                <vuestic-multi-select
                  label="Profesores del departamento"
                  v-model="profDepSelect"
                  name="profDepSelect"
                  ref="profDepSelect"
                  option-key="nombre"
                  v-bind:options="listProfDpto"
                ></vuestic-multi-select>
              </fieldset>
            </div>

            <!-- <div class="col-md-3">
              <div class="form-group">
                <div class="input-group">
                  <input type="text" v-model="profDepSelect" list="listaProfDep" placeholder="Escoger uno o dejar vacío" v-on:input="filtraProfDpto"/>
                  <datalist id="listaProfDep">
                    <option v-for="profDep in this.listProfDpto" v-bind:value="profDep.id">
                      {{profDep.persona.nombres + ' ' + profDep.persona.apPaterno + ' ' + profDep.persona.apMaterno}}
                    </option>
                  </datalist>
                  <label class="control-label" for="profDep">{{'' | translate}}</label><i class="bar"></i>
                  </div>
                </div>
            </div>-->
            <!-- <button style="margin-top: 5px; margin-left: -10px" class="btn btn-primary btn-micro btn-with-icon rounded-icon"><i style="padding-left: 9px" class="ion-md-information ion"></i></button> -->
          </div>
        </div>
        <div class="form-group with-icon-right">
          <button
            style="margin-left: 5%"
            class="btn btn-primary btn-micro"
            v-on:click="guardar()"
          >Guardar</button>
        </div>
      </div>
    </div>
    <div></div>
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
