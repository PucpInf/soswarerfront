<template>
    <div class="custom-actionsLP">
      <button class="btn btn-primary btn-micro btn-with-icon btn-danger rounded-icon" @click="itemAction(rowData, rowIndex)"><i class="ion ion-md-close"></i></button>
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
    itemAction (data, index) {
      // alert(JSON.stringify(data))
      this.$store.dispatch('DeletePreferencia', data.id).then(response => {
        if (response.data.status) {
          this.$store.dispatch('UserPreferencias', this.$store.state.us.body.id)
          alert('eliminado')
        }
      })
    }
  }
}
</script>

  <style>
    .custom-actionsLP button.ui.button {
      padding: 8px 8px;
    }
    .custom-actionsLP button.ui.button > i.icon {
      margin: auto !important;
    }

  </style>
