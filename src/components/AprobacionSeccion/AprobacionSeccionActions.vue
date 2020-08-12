<template>
    <div class="requestApprovalActions">
      <button class="btn btn-primary btn-micro btn-with-icon rounded-icon" @click="itemAction('view-item', rowData, rowIndex)"><i class="ion-md-eye ion"></i></button>
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
      console.log('custom action: ' + action, data.name, index)
      console.log(data.requestType)
      var page = 'Aprobacion' + data.requestType
      console.log(page)
      // this.$router.push({ name: page, params: { request: data } })
      this.$router.push({ name: 'AprobacionDescarga', params: { request: data } })
      // })
    }
  }
}
</script>

  <style>
    .requestApprovalActions button.ui.button {
      padding: 8px 8px;
    }
    .requestApprovalActions button.ui.button > i.icon {
      margin: auto !important;
    }

  </style>
