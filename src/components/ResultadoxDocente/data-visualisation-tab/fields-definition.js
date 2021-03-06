export default {
  tableFields: [
    {
      name: 'clave',
      title: 'CLAVE',
      sortField: 'clave'
    },
    {
      name: 'nombCurso',
      title: 'NOMBRE DE CURSO',
      sortField: 'nombCurso'
    },
    {
      name: 'facultad',
      title: 'FACULTAD',
      sortField: 'facultad'
    },
    {
      name: 'profesor',
      title: 'PROFESOR',
      sortField: 'profesor'
    },
    {
      name: 'ciclo1',
      title: '2018-1',
      sortField: 'ciclo1'
    },
    {
      name: 'ciclo2',
      title: '2018-2',
      sortField: 'ciclo2'
    }
  ],
  sortFunctions: {
    'codigo': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
  },
}
