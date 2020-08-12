export default {
  tableFields: [
    {
      name: '__component:custom-actionsExpAd',
      title: 'Ver Perfil',
      titleClass: 'center aligned',
      dataClass: 'center aligned'
    },
    // {
    //   name: '__checkbox',
    //   title: '',
    //   dataClass: 'text-center'
    // },
    {
      name: 'codigo',
      title: 'CÓDIGO',
      sortField: 'codigo'
    },
    {
      name: 'nombre',
      title: 'NOMBRE',
      sortField: 'tipo'
    },
    {
      name: 'departamento',
      title: 'DEPARTAMENTO',
      sortField: 'departamento'
    },
    {
      name: 'seccion',
      title: 'SECCIÓN',
      sortField: 'tipo'
    },
    {
      name: 'categoria',
      title: 'CATEGORÍA',
      sortField: 'categoria'
    }
  ],
  sortFunctions: {
    'codigo': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
  },
}
