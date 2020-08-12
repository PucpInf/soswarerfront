<template>
  <!-- <div class="form-elements">
    <div class="row">
      <div class="col-md-12"> -->
        <vuestic-widget :headerText="'Histórico de Solicitudes' | translate">
          <!-- <form> -->
          
              <!-- <div class="col-md-4">

              </div> -->
          <div class="dashboard" style="" >
            <!-- <div class="row"> -->
              <!-- <div class="col-md-4">
                <fieldset> -->
                  <!-- <div class="form-group"> -->

                    <!-- <vuestic-simple-select
                      :label="'Tipo' | translate"
                      v-model="simpleSelectModel"
                      option-key="description"
                      v-bind:options="simpleOptions">
                    </vuestic-simple-select> -->

                  <!-- </div> -->
                  <!-- <p><small>Seleccione la solicitud sobre la cual desee realizar un acción.</small></p>
                </fieldset> -->
            <div >
              <data-visualisation-tab></data-visualisation-tab>
            </div>
          </div>


        </vuestic-widget>
</template>

<script>
  // import CountriesList from 'data/CountriesList'
  import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'

  export default {
    name: 'form-elements',
    computed: {
      isSuccessfulEmailValid () {
        let isValid = false
        if (this.formFields.successfulEmail) {
          isValid = this.formFields.successfulEmail.validated && this.formFields.successfulEmail.valid
        }
        return isValid
      }
    },
    components: {
      DataVisualisationTab
    },
    data () {
      return {
      }
    },
    methods: {
      clear (field) {
        this[field] = ''
      },
      meme () {
        console.log('hello')
      }
    },
    created () {
      // this.$store.dispatch('getEconomicRequest')
      this.$nextTick(() => {
        this.$validator.validateAll()
      })
      this.meme()
    }
    // },
    // beforeCreate () {
    //   var requestParams = {
    //     id: this.$store.state.us.body.id,
    //     filter: 'idUsuario'
    //   }
    //   this.$store.dispatch('getAllRequests', requestParams)
    // }
  }
</script>

<style lang="scss">
@import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  .buttons-page {
    @include media-breakpoint-only(xl) {
      .btn-margin-row {
        margin-right: -35px;
        margin-left: -40px;
      }
    }
    .btn, .btn-group {
      margin-bottom: 45px;
    }

    .myButton {
      display: block;
      position: absolute;
      right: 3%;
    }

    .btn-group .btn {
      margin-bottom: 0;
    }

    .dropdown-menu {
      margin-top: -43px;
    }

    .smaller-buttons {
      display: flex;
      flex-direction: row;
      align-items: center;

      .btn-micro {
        margin-left: 20px;
      }
    }

    .widget .widget-body {
      padding-bottom: 0;
    }
  }
  input[type=checkbox]:disabled + label, input[type=radio]:disabled + label,
  input[type=checkbox]:disabled, input[type=radio]:disabled {
    cursor: not-allowed;
  }
</style>
