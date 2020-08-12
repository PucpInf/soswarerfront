export default {
  tableFields: [
    {
      name: 'requierName',
      title: 'Solicitante',
      sortField: 'requierInfo.nombres'
    },
    {
      name: 'requestType',
      title: 'Tipo de Solicitud',
      sortField: 'requestType'
    },
    {
      name: 'created_at',
      title: 'Fecha de registro',
      sortField: 'created_at'
    },
    {
      name: 'estado',
      title: 'Estado',
      sortField: 'estado'
    },
    {
      name: '__component:custom-actionsAE',
      title: 'Revisar',
      titleClass: 'center aligned',
      dataClass: 'center aligned'
    }
  ],
  sortFunctions: {
    'created_at': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
  },
}
