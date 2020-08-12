<template>
  <vuestic-tabs class="tabs" :names="['PREFERENCIAS ELEGIDAS', 'ELEGIR PREFERENCIAS']">
    <div slot="PREFERENCIAS ELEGIDAS" class="d-flex justify-content-center">
      <elegidas-tab></elegidas-tab>
    </div>
    <div slot="ELEGIR PREFERENCIAS" class="d-flex justify-content-center">
      <elegir-tab></elegir-tab>
    </div>
  </vuestic-tabs>
</template>

<script>
import elegirPreferencias from './elegirPreferencias'
import elegidasPreferencias from './preferenciasElegidas'

export default {
  name: 'Preferencias de Dictado',
  components: {
    'elegir-tab': elegirPreferencias,
    'elegidas-tab': elegidasPreferencias
  }
}
</script>
