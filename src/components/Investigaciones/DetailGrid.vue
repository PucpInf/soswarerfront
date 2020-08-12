<template>
<div class="inline field">
  <p>ID:  {{detail.ID}}</p>
  <p>NombreDocente:  {{detail.NombreDocente}}</p>
  <p>Sección:  {{detail.Sección}}</p>
  <p>Título:  {{detail.Título}}</p>
  <p>Código:  {{detail.Código}}</p>
  <p>Año:  {{detail.Año}}</p>
</div>
</template>

<script>
export default {
  name: 'DetailGrid',
  props: {
    detail: Object
  },
  data () {
    return { additionalInfo: {} }
  },
  created () {
    this.updateDetail()
  },
  watch: {
    detail: 'updateDetail'
  },
  methods: {
    updateDetail () {
      this.additionalInfo = {}
    }
  }
}
</script>
