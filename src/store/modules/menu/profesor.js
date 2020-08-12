import lazyLoading from './lazyLoading'

export default {
  name: 'Profesor',
  meta: {
    expanded: false,
    title: 'menu.profesor',
    iconClass: 'vuestic-icon vuestic-icon-extras'
  },
  children: [
    {
      name: 'MiPerfil',
      path: '/profesor/miPerfil',
      component: lazyLoading('profesor/miPerfil/MiPerfil'),
      meta: {
        title: 'menu.miPerfil'
      }
    },
    {
      name: 'EditarPerfil',
      path: '/profesor/editarPerfil',
      component: lazyLoading('profesor/editarPerfil/editarPerfil'),
      meta: {
        title: 'Editar Perfil'
      }
    },
    {
      name: 'SupportRequest',
      path: '/profesor/supportrequest',
      component: lazyLoading('profesor/supportrequest/SupportRequest'),
      meta: {
        title: 'Solicitudes'
      }
    },
    {
      name: 'economicSupport',
      path: '/profesor/economicSupport',
      component: lazyLoading('profesor/economicSupport/economicSupport'),
      meta: {
        title: 'Apoyo Económico'
      }
    },
    {
      name: 'license',
      path: '/profesor/license',
      component: lazyLoading('profesor/license/license'),
      meta: {
        title: 'Licencias'
      }
    },
    {
      name: 'download',
      path: '/download/download',
      component: lazyLoading('profesor/download/download'),
      meta: {
        title: 'Descargas'
      }
    },
    {
      name: 'PreferenciasDictado',
      path: '/profesor/preferenciasDictado',
      component: lazyLoading('profesor/preferenciasDictado/preferenciasDictado'),
      meta: {
        title: 'Preferencias de Dictado'
      }
    },
    {
      name: 'historicoDictado',
      path: '/profesor/historicoDictado',
      component: lazyLoading('profesor/historicoDictado/historicoDictado'),
      meta: {
        title: 'Histórico de Dictado'
      }
    },
    {
      name: 'encuestasIndividuales',
      path: '/profesor/encuestasIndividuales',
      component: lazyLoading('profesor/encuestasIndividuales/encuestasIndividuales'),
      props: true, // permite que se pasen argumentos al seguir un hipervinculo
      meta: {
        title: 'Encuestas'
      }
    },
    {
      name: 'cambioCategoria',
      path: '/profesor/cambioCategoria',
      component: lazyLoading('profesor/cambioCategoria/cambioCategoria'),
      props: true, // permite que se pasen argumentos al seguir un hipervinculo
      meta: {
        title: 'Cambio de Categoria'
      }
    },
    {
      name: 'CambioPass',
      path: '/profesor/CambioPassword',
      component: lazyLoading('profesor/CambioPass/CambioPass'),
      meta: {
        title: 'Cambio de Contraseña'
      }
    },
    // {
    //   name: 'Requests',
    //   meta: {
    //     expanded: false,
    //     title: 'menu.profesor',
    //     iconClass: 'vuestic-icon vuestic-icon-extras'
    //   },
    //   children: [
    //     {
    //       name: 'NewSupportRequest',
    //       path: '/profesor/requests/economicSupport',
    //       component: lazyLoading('profesor/supportrequest/NewSupportRequest'),
    //       meta: {
    //         title: 'Apoyo Económicoc'
    //       }
    //     },
    //     {
    //       name: 'license',
    //       path: '/profesor/requests/license',
    //       component: lazyLoading('profesor/license/license'),
    //       meta: {
    //         title: 'Licencias'
    //       }
    //     }
    //   ]
    // }
  ]
}
