export default {
  tableFields: [
    {
      name: 'curso.nombre',
      title: 'NOMBRE'
    },
    {
      name: 'curso.codigo',
      title: 'CODIGO'
    },
    {
      name: 'ciclo.ciclo',
      title: 'CICLO'
    },
    {
      name: 'estado',
      title: 'ESTADO'
    },
    {
      name: '__component:eliminar-preferencia',
      title: 'DELETE',
      titleClass: 'center aligned',
      dataClass: 'center aligned'
    }
  ],
  sortFunctions: {
    'codigo': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
  },
}
