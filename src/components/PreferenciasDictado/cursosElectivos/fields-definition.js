export default {
  tableFields: [
    {
      name: 'codigo',
      title: 'CODIGO'
    },
    {
      name: 'nombre',
      title: 'NOMBRE',
      sortField: 'nombCurso'
    },
    {
      name: '__component:custom-actions3.0', // <----
      titleClass: 'center aligned',
      dataClass: 'center aligned'
    }
  ],
  sortFunctions: {
    'id': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
  },
}
