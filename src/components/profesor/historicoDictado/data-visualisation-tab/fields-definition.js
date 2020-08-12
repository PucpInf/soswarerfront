export default {
  tableFields: [
    // {
    //   name: 'index',
    //   title: '#',
    //   sortField: 'index'
    // },
    {
      name: 'codigo',
      title: 'Codigo',
      sortField: 'codigo'
    },
    {
      name: 'curso',
      title: 'Curso',
      sortField: 'curso'
    },
    {
      name: 'horario',
      title: 'Horario',
      sortField: 'horario'
    },
    {
      name: 'ciclo',
      title: 'Ciclo',
      sortField: 'ciclo'
    },
    {
      name: 'facultad',
      title: 'Facultad',
      sortField: 'facultad'
    },
    {
      name: 'horas',
      title: 'Horas',
      sortField: 'horas'
    }
  ],
  sortFunctions: {
    'codigo': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
  }
}
