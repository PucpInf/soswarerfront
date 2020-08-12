<template>
  <vuestic-widget :headerText="'Mantenimiento de Investigaciones'">
    <!-- BOTONES -->
    <div style="margin-bottom: 20px" class="row btn-margin-row">
      <div style="margin-left: 10px" class="justify-content-center btn-margen">
        <button class="btn btn-primary btn-micro" @click="visualizarInv()">
          <div class="btn-with-icon-content btn-micro">
            <i class="fa fa-eye"></i>
            {{'Visualizar Investigaciones'}}
          </div>
        </button>
      </div>
    </div>

    <!-- FORM DE REGISTRO -->
    <div class="col-md-14">
      <div class="form-group with-icon-right">
      <div class="input-group">
        <input name="titulo" data-vv-as="Titulo" v-model="investigacion.titulo" required="false" title=""/>
        <label class="control-label">{{'Título*'}}</label><i class="bar"></i>
      </div>
      </div>

      <div class="form-group with-icon-right">
      <div class="input-group">
        <textarea type="text" v-model="investigacion.abstract" id="abstract" required="false"></textarea>
        <label for="simple-textarea" class="control-label">{{'Abstract'}}</label><i class="bar"></i>
      </div>
      </div>

      <div class="form-group with-icon-right">
      <div class="input-group">
        <input name="link" data-vv-as="Link" v-model="investigacion.link" required="false" title=""/>
        <label class="control-label">{{'Link'}}</label><i class="bar"></i>
      </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
          <div class="input-group">
            <vuestic-date-picker
              :config="{mode: 'multiple'}"
              v-model="investigacion.fecha_inicio"
              label="Pick dates"
              id="simple-input"
            />
            <label class="control-label" for="simple-input">{{'Fecha de Inicio*'}}</label><i class="bar"></i>
          </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
          <div class="input-group">
            <vuestic-date-picker
              :config="{mode: 'multiple'}"
              v-model="investigacion.fecha_fin"
              label="Pick dates"
              id="simple-input"
            />
            <label class="control-label" for="simple-input">{{'Fecha de Fin*'}}</label><i class="bar"></i>
          </div>
          </div>
        </div>

        <div class="col-md-3">
          <vuestic-simple-select
            label="Indicador de Calidad*"
            v-model="investigacion.indicador_calidad"
            option-key="description"
            v-bind:options="indicadorCalidadOpciones"
          />
        </div>

        <div class="col-md-3">
          <vuestic-simple-select
            label="Código de Validación*"
            v-model="investigacion.codigo_validacion"
            option-key="description"
            v-bind:options="codigoValOpciones"
          />
        </div>
      </div>
      <hr>
    </div>

    <!-- DATOS DEL AUTOR -->
    <div class="row">
      <div style="margin-top: -10px" class="col-md-4">
        <h5 style="font-weight: bold">Autores</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="form-group">
          <div class="input-group">
            <input v-model="autorForm.codigo" id="CodigoPucp" required="required"/>
            <label class="control-label" for="simple-input">Código PUCP</label><i class="bar col-md-10"></i>
          </div>
        </div>
      </div>
      <div class="form-group with-icon-right">
        <button style="margin-left: -20px" class="btn btn-primary btn-micro btn-with-icon rounded-icon" v-on:click="searchName()">
            <i class="ion-md-search ion"></i>
        </button>
      </div>

      <div class="col-md-4">
        <div class="form-group">
          <div class="input-group">
            <input v-model="autorForm.nombreUsuario" id="nombreUsuario" required="required"/>
            <label class="control-label" for="simple-input">Nombre del docente</label><i class="bar col-md-10"></i>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <fieldset>
          <div class="form-group with-icon-right">
            <button class="btn btn-primary btn-micro" v-on:click="addAuthor()">
              Añadir
            </button>
          </div>
        </fieldset>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-striped first-td-padding">
        <thead>
        <tr>
          <td>Código PUCP</td>
          <td>Nombre del Docente</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="a in autor" v-bind:key="a.key">
          <td>{{ a.codigo }}</td>
          <td>{{ a.nombreUsuario }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- BOTON GUARDAR -->
    <div class="va-row">
      <div style="margin-top: 30px" class="flex md6 offset--md3">
        <div style="display: flex; align-items: center; justify-content: center">
          <button id="botonactualizar" class="btn btn-primary" v-on:click="addInv()">Añadir investigación</button>
        </div>

      </div>
    </div>
    <div class="va-row">
      <div  class="flex xs12" >
        <div style="display: flex; align-items: center; justify-content: center; text-align: center; font-size: 12px">¡Se registró correctamente!</div>
      </div>
    </div>
  </vuestic-widget>
</template>

<script>
export default {
  name: 'MantInvestigacion',
  data () {
    return {
      investigacion: {
        titulo: '',
        abstract: '',
        link: '',
        fecha_inicio: '',
        fecha_fin: '',
        indicador_calidad: '',
        codigo_validacion: '',
        idUsuario: '20114878',
        otros_autores: ''
      },
      autorForm: {
        codigo: '',
        nombreUsuario: ''
      },
      autor: [
      ],
      numInvestigadores: 0,
      indicadorCalidadOpciones: [
        {
          id: 1,
          description: 'SCOPUS',
        },
        {
          id: 2,
          description: 'WOS',
        },
        {
          id: 3,
          description: 'Otros',
        },
      ],
      indicadorCalidad: '',
      codigoValOpciones: [
        {
          id: 1,
          description: 'A1',
        },
        {
          id: 1,
          description: 'A2',
        },
        {
          id: 1,
          description: 'P1',
        },
        {
          id: 1,
          description: 'P2',
        },
        {
          id: 1,
          description: 'L1',
        },
        {
          id: 1,
          description: 'L2',
        },
        {
          id: 1,
          description: 'L3',
        },
      ],
      codigoVal: '',
    }
  },
  methods: {
    visualizarInv () {
      this.$router.push({ name: 'Investigaciones' })
    },
    addInv: function () {
      // console.log(JSON.stringify(this.investigacion))
      this.investigacion.indicador_calidad = this.investigacion.indicador_calidad.description
      this.investigacion.codigo_validacion = this.investigacion.codigo_validacion.description
      this.$store.dispatch('addInvestigacion', this.investigacion).then(response => {
        if (response.status) {
          alert('se agrego correctamente')
        } else {
          alert('error')
        }
      })
    },
    searchName: function () {
      this.$store.dispatch('getName', this.autorForm.codigo).then(response => {
        if (this.$store.state.getName.status) {
          console.log(response.data.body)
          this.autorForm.nombreUsuario = response.data.body
        } else {
          alert('Usuario no encontrado, ingrese nombre')
        }
      })
    },
    addAuthor () {
      var newAuthor = {
        codigo: this.autorForm.codigo,
        nombreUsuario: this.autorForm.nombreUsuario,
      }
      // alert(this.autorForm.nombreUsuario + this.autorForm.codigo)
      this.autor.push(newAuthor)
      this.numInvestigadores = this.numInvestigadores + 1
      this.autorForm.codigo = ''
      this.autorForm.nombreUsuario = ''
      // alert(this.autor)
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
