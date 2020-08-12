<template>
  <div class="custom-actions3.0">
    <form>
      <input type="radio" name="radciclo" @change="itemAction(1,rowData, rowIndex)"> 2018-1 &nbsp; &nbsp;
      <input
        type="radio"
        name="radciclo"
        @change="itemAction(2,rowData, rowIndex)"
      > 2018-2 &nbsp; &nbsp;
      <input
        type="radio"
        name="radciclo"
        @change="itemAction(3,rowData, rowIndex)"
      > AMBOS &nbsp; &nbsp;
    </form>
  </div>
</template>

<script>
export default {
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  methods: {
    itemAction (val, data, index) {
      this.$store.state.setcursosEano.body.cursos[index].ciclo = val
    }
  }
}
</script>

  <style>
.custom-actions button.ui.button {
  padding: 8px 8px;
}
.custom-actions button.ui.button > i.icon {
  margin: auto !important;
}
</style>
