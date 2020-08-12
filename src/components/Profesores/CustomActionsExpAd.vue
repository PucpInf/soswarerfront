<template>
  <div class="custom-actionsExpAd">
    <button
      class="btn btn-primary btn-micro btn-with-icon rounded-icon"
      @click="itemAction('view-item', rowData, rowIndex)"
    >
      <i class="fa fa-address-card 0.5x center"></i>
    </button>
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
    itemAction (action, data, index) {
      console.log('custom-actionsExpAd: ' + action, data.name, index)
      // alert(data.codigo)
      this.$store.dispatch('usSelect', data.codigo).then(response => {
        if (this.$store.state.usSelect.status) {
          this.$router.push({ name: 'perfilSelect' })
        }
      })
    }
  }
}
</script>

  <style>
.custom-actionsExpAd button.ui.button {
  padding: 8px 8px;
}
.custom-actionsExpAd button.ui.button > i.icon {
  margin: auto !important;
}
</style>
