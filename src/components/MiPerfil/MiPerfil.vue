<template>
<vuestic-widget :headerText="UserName + ' - ' + UserCodigoPUCP">
<!--vuestic-widget :headerText="'Usuario'"-->

  <vuestic-tabs class="tabs" :names="[$t('Datos Personales'), $t('Grados Académicos'), $t('Docencia Universitaria'), $t('Experiencia Laboral'), $t('Investigaciones'), $t('Información Adicional')]">
    <div :slot="$t('Datos Personales')" class="d-flex justify-content-center">
      <datosPersonalesTab></datosPersonalesTab>
    </div>

    <div :slot="$t('Grados Académicos')" class="d-flex justify-content-center">
      <gradosAcadTab></gradosAcadTab>
    </div>

    <div :slot="$t('Docencia Universitaria')" class="d-flex justify-content-center">
      <docenciaUnivTab></docenciaUnivTab>
    </div>

    <div :slot="$t('Experiencia Laboral')" class="d-flex justify-content-center">
      <experienciaLabTab></experienciaLabTab>
    </div>

    <div :slot="$t('Investigaciones')" class="d-flex justify-content-center">
      <investigacionesTab></investigacionesTab>
    </div>

    <div :slot="$t('Información Adicional')" class="d-flex justify-content-center">
      <info-Add-Tab></info-Add-Tab>
    </div>

  </vuestic-tabs>

</vuestic-widget>
</template>

<script>

import datosPersonalesTab from './datosPersonalesTab'
import docenciaUnivTab from './docenciaUnivTab'
import gradosAcadTab from './gradosAcadTab'
import experienciaLabTab from './experienciaLabTab'
import investigacionesTab from './investigacionesTab'
import infoAddTab from './infoAddTab.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'datosPersonalesTab': datosPersonalesTab,
    'docenciaUnivTab': docenciaUnivTab,
    'gradosAcadTab': gradosAcadTab,
    'experienciaLabTab': experienciaLabTab,
    'investigacionesTab': investigacionesTab,
    infoAddTab,
  },
  created () {
    // obtener el ciclo actual y asignarlo en stats
    this.$store.dispatch('GetCicloActual').then(response => {
    })
  },
  computed: {
    ...mapGetters([
      'UserCodigoPUCP'
    ]),
    UserName () {
      var a = this.$store.state.us.body.persona.nombres + ' ' + this.$store.state.us.body.persona.apPaterno + ' ' + this.$store.state.us.body.persona.apMaterno
      return a
    }
  }
}
</script>
