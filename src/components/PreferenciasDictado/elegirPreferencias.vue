<template>
  <div>
    <div class="form-wizard-page">
      <div class="row">
        <div class="col-md-12">
          <vuestic-widget class="no-h-padding" headerText="Preferencias de Dictado">
            <vuestic-wizard :steps="hsSteps">
              <div slot="page1" class="form-wizard-tab-content">
                <p>El formulario distingue cursos según sean obligatorios o electivos, y según la facultad en donde se ofrecen.
                  <br>
                  <br>Los 3 primeros subconjuntos (I a III) corresponden a cursos de pregrado en la FCS y EGL y deben ser identificados por ustedes. El subconjunto IV es para cursos de otras facultades de pregrado (distintas a EGL y FCS). El subconjunto V es para cursos de la Escuela de Posgrado.
                  <br>
                  <br>El llenado de estos últimos debe ser hecho tomando en consideración las coordinaciones con los Directores de programas.
                </p>
                <div
                  class="form-group with-icon-right"
                  :class="{'has-error': errors.has('hsName'), 'valid': isFormFieldValid('hsName')}"
                >
                  <div class="input-group" hidden="true">
                    <input
                      hidden="true"
                      name="hsName"
                      data-vv-as="Name"
                      v-model="hsName"
                      v-validate="'required'"
                      required
                      title
                    >
                    <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                    <i class="fa fa-check valid-icon icon-right input-icon"></i>
                    <label class="control-label">{{'forms.wizard.name' | translate}}</label>
                    <i class="bar"></i>
                    <small
                      v-show="errors.has('hsName')"
                      class="help text-danger"
                    >{{ errors.first('hsName') }}</small>
                  </div>
                </div>
              </div>

              <!-- CURSOS OBLIGATORIOS -->
              <div slot="page2" class="form-wizard-tab-content">
                <h4>Departamento de {{UserDpto}} - Cursos Obligatorios</h4>
                <p>I. Al menos 1 cursos obligatorios</p>

                <div>
                  <cursosObligatoriosTab></cursosObligatoriosTab>
                </div>

                <vuestic-simple-select
                  hidden="true"
                  label="Select country"
                  v-model="hsCountry"
                  name="country"
                  :required="true"
                  ref="hsCountrySelect"
                  v-bind:options="countriesList"
                ></vuestic-simple-select>
              </div>

              <!-- CURSOS ELECTIVOS -->
              <div slot="page3" class="form-wizard-tab-content">
                <h4>
                  Departamento de {{UserDpto}}
                  <span>- Cursos Electivos</span>
                </h4>
                <p>II. Al menos 1 electivo</p>
                <div>
                  <cursosElectivosTab></cursosElectivosTab>
                </div>
                <vuestic-simple-select
                  hidden="true"
                  label="Select country"
                  v-model="hsCountry"
                  name="country"
                  :required="true"
                  ref="hsCountrySelect"
                  v-bind:options="countriesList"
                ></vuestic-simple-select>

                <div>
                  <button class="btn btn-primary btn-micro" @click="show()">Guardar</button>
                </div>
              </div>

              <!--  <div slot="page4" class="form-wizard-tab-content">
              <h4>{{'forms.wizard.confirmSelection' | translate}}</h4>
              <p>
                Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"
              </p>
              </div>-->
              <div slot="wizardCompleted" class="form-wizard-tab-content">
                <h4>{{'Selección completada'}}</h4>
                <p>Sus preferencias de dictado han sido completadas correctamente!</p>
              </div>
            </vuestic-wizard>
          </vuestic-widget>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountriesList from 'data/CountriesList'
import Vue from 'vue'
import cursosObligatoriosTab from './cursosObligatorios/tablaOblig.vue'
import CustomActions from './cursosObligatorios/CustomActions'
import cursosElectivosTab from './cursosElectivos/tablaElect.vue'
import CustomActions2 from './cursosElectivos/CustomActions'

Vue.component('custom-actions', CustomActions)
Vue.component('custom-actions', CustomActions2)

export default {
  name: 'form-wizard',
  components: {
    cursosObligatoriosTab: cursosObligatoriosTab,
    cursosElectivosTab: cursosElectivosTab
  },

  computed: {
    UserDpto () {
      var a = this.$store.state.us.body.seccion.departamento.nombre
      return a
    },
    hsSteps () {
      return [
        {
          label: this.$t('Descripción'),
          slot: 'page1',
          onNext: () => {
            this.validateFormField('hsName')
          },
          isValid: () => {
            return this.isFormFieldValid('hsName')
          }
        },
        {
          label: this.$t('Cursos Obligatorios'),
          slot: 'page2',
          onNext: () => {
            // this.$refs.hsCountrySelect.validate()
          },
          isValid: () => {
            return this.$refs.hsCountrySelect.isValid()
          }
        },
        {
          label: this.$t('Cursos Electivos'),
          slot: 'page3',
          onNext: () => {
            this.$refs.hsCountrySelect.validate()
          },
          isValid: () => {
            return this.$refs.hsCountrySelect.isValid()
          }
        }
        // {
        //   label: this.$t('forms.wizard.stepThree'),
        //   slot: 'page4'
        // }
      ]
    }
  },
  data () {
    return {
      hsName: '',
      hsCountry: 'Albania',
      email: '',
      countriesList: CountriesList,
      chosenCountry: ''
    }
  },
  methods: {
    isFormFieldValid (field) {
      // let isValid = false
      // if (this.formFields[field]) {
      //   isValid = this.formFields[field].validated && this.formFields[field].valid
      // }
      return true
      // return isValid
    },
    validateFormField (fieldName) {
      this.$validator.validate(fieldName, this[fieldName])
    },
    show () {
      var curs = this.$store.state.setcursosOano.body.cursos
      var size = curs.length
      var curs2 = this.$store.state.setcursosEano.body.cursos
      var size2 = curs2.length
      var counter = 0
      for (var i = 0; i < size; i++) {
        if (curs[i].ciclo) {
          counter++
        } else {
          this.$store.state.setcursosOano.body.cursos[i].ciclo = 0
        }
      }
      var counter2 = 0
      for (i = 0; i < size2; i++) {
        if (curs2[i].ciclo) {
          counter2++
        } else {
          this.$store.state.setcursosEano.body.cursos[i].ciclo = 0
        }
      }
      // alert(JSON.stringify(this.$store.state.setcursosOano.body))
      // alert(JSON.stringify(this.$store.state.setcursosEano.body))
      // return
      if (counter < 1) {
        alert('seleccionar al menos 1 cursos obligatorios')
      } else if (counter2 < 1) {
        alert('seleccionar al menos 1 curso electivo')
      } else if (confirm('¿Estas seguro de los cursos seleccionados?')) {
        this.$store
          .dispatch('SavePreferencias', this.$store.state.setcursosOano.body)
          .then(response => {
            Vue.toasted.success(response.data.message + ' obligatorias', {
              type: 'success',
              icon: 'check',
              theme: 'bubble',
              position: 'top-center',
              duration: 5000
            })
          })
        this.$store
          .dispatch('SavePreferencias', this.$store.state.setcursosEano.body)
          .then(response => {
            Vue.toasted.success(response.data.message + ' electivas', {
              type: 'success',
              icon: 'check',
              theme: 'bubble',
              position: 'top-center',
              duration: 5000
            })
          })
      }
    }
  }
}
</script>

<style lang="scss">

.widget.simple-vertical-wizard-widget {
  .widget-body {
    padding: 0 $widget-padding;
    @include media-breakpoint-down(sm) {
      padding: $widget-padding 0;
    }
  }
}

.form-wizard-page {
  .form-group {
    min-width: 200px;
    max-width: 360px;
    width: 80%;
  }
}
</style>
