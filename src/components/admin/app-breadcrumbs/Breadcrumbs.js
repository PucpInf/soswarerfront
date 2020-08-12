export const breadcrumbs = {
  root: {
    name: '/',
    displayName: 'Home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
    },
    {
      name: 'MiPerfil',
      displayName: 'Mi Perfil',
    },
    {
      name: 'Cursos',
      displayName: 'Cursos',
    },
    {
      name: 'Profesores',
      displayName: 'Profesores',
    },
    {
      name: 'Investigaciones',
      displayName: 'Investigaciones',
    },
    {
      name: 'HistoricoDictado',
      displayName: 'Histórico de Dictado',
    },
    {
      name: 'AsignacionCarga',
      displayName: 'Asignación de Carga',
    },
    {
      name: 'ConsultaPreferencias',
      displayName: 'Consulta de preferencias',
    },
    {
      name: 'ResultadoxDocente',
      displayName: 'Resultado por docente',
    },
    {
      name: 'cargamasiva',
      displayName: 'Carga Masiva',
    },
    {
      name: 'AprobacionSeccion',
      displayName: 'Aprobación Previa de Descargas - Sección',
    },
    {
      name: 'AprobacionDpto',
      displayName: 'Aprobación Final de Descargas - Departamento',
    },
    {
      name: 'Solicitudes',
      displayName: 'Solicitudes de Descargas',
    },
    {
      name: 'PreferenciasDictado',
      displayName: 'Preferencias de Dictado',
    },
    {
      name: 'AprobacionDescarga',
      displayName: 'Aprobacion de Descarga - Sección',
    },
    {
      name: 'Mantenimiento',
      displayName: 'Mantenimientos',
      disabled: true,
      children: [
        {
          name: 'CargaMasiva',
          displayName: 'Carga Masiva',
        },
        {
          name: 'MantDptoSecc',
          displayName: 'Departamentos y Secciones',
        },
        {
          name: 'MantUsuario',
          displayName: 'Usuarios',
        },
        {
          name: 'MantInvestigacion',
          displayName: 'Investigaciones',
        },
      ],
    },
    {
      name: 'forms',
      displayName: 'menu.forms',
      disabled: true,
      children: [
        {
          name: 'form-elements',
          displayName: 'menu.formElements',
        },
        {
          name: 'form-wizards',
          displayName: 'menu.formWizards',
        },
        {
          name: 'medium-editor',
          displayName: 'menu.mediumEditor',
        },
      ],
    },
    {
      name: 'tables',
      displayName: 'menu.tables',
    },
    {
      name: 'ui',
      displayName: 'menu.uiElements',
      disabled: true,
      children: [
        {
          name: 'typography',
          displayName: 'menu.typography',
        },
        {
          name: 'buttons',
          displayName: 'menu.buttons',
        },
        {
          name: 'collapse',
          displayName: 'menu.collapse',
        },
        {
          name: 'filters',
          displayName: 'menu.filters'
        },
        {
          name: 'color-pickers',
          displayName: 'menu.colorPickers',
        },
        {
          name: 'timelines',
          displayName: 'menu.timelines',
        },
        {
          name: 'notifications',
          displayName: 'menu.notifications',
        },
        {
          name: 'dropdowns',
          displayName: 'menu.dropdowns',
        },
        {
          name: 'icon-sets',
          displayName: 'menu.icons',
          children: [
            {
              displayName: 'concrete',
              name: 'icon-set',
            },
          ],
        },
        {
          name: 'spinners',
          displayName: 'menu.spinners',
        },
        {
          name: 'grid',
          displayName: 'menu.grid',
        },
        {
          name: 'modals',
          displayName: 'menu.modals',
        },
        {
          name: 'file-upload',
          displayName: 'menu.fileUpload',
        },
        {
          name: 'tags',
          displayName: 'menu.tags',
        },
        {
          name: 'cards',
          displayName: 'menu.cards',
        },
        {
          name: 'tree-view',
          displayName: 'menu.treeView',
        },
      ],
    },
    {
      name: 'extra',
      displayName: 'menu.extra',
    },
    {
      name: 'maps',
      displayName: 'menu.maps',
      disabled: true,
      children: [
        {
          name: 'google-maps',
          displayName: 'Google Maps',
        },
        {
          name: 'yandex-maps',
          displayName: 'Yandex Maps',
        },
        {
          name: 'leaflet-maps',
          displayName: 'Leaflet Maps',
        },
        {
          name: 'bubble-maps',
          displayName: 'Bubble Maps',
        },
        {
          name: 'line-maps',
          displayName: 'Line Maps',
        },
      ],
    },
    {
      name: 'pages',
      displayName: 'menu.pages',
      disabled: true,
      children: [
        {
          name: '404-pages',
          displayName: '404 Pages',
        },
      ],
    },
  ],
}
