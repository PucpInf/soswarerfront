import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module
import app from './modules/app'

import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
  },
  state: {
    server: 'http://localhost:8000/',
    us: Object,
    infoGoogle: Object,
    usSelect: Object,
    listaProfes: Object,
    listaAllAESec: Object,
    infosol: Object,
    historialAE: Object,
    listTeachers: Object,
    economicRequests: Object,
    responseSolicAE: Object,
    evaluarSolicitud: Object,
    postFile: Object,
    postConcurso: Object,
    cursos: Object,
    encuestas: Object,
    listaConcursos: Object,
    postularConcursos: Object,
    listaPostulaciones: Object,
    aprobarPostulacion: Object,
    addCurso: Object,
    getFacultades: Object,
    getCursosSeccion: Object,
    permisos: [
      { show: false },
      { show: false },
      { show: false },
      { show: false },
      { show: false }
    ],
    cursosano: Object,
    ciclos: Object,
    departamentos: Object,
    // valores para recordar selecciones al navegar a otras paginas
    selectedEnc: Object, // se usa cuando se pide el detalle de una encuesta en particular. Navegar de Encuestas(Coordinador) a encuestasIndividuales(de un profesor y curso en particualr)
    selectedUs: Object,
    usNew: Object, // usuario nuevo
    regUs: Object, // registrar el usuario nuevo
    setcursosOano: Object, // cursos obligatorios
    setcursosEano: Object, // cursos electivos
    regConvocatoria: Object, // registrar convocatoria docente
    cursosParaAsignar: Object, // Asignacion de carga
    GetListProfePref: Object, // Asignacion de carga
    GetListProfeDpto: Object, // Asignacion de carga
    userRequests: Object, // Lista de profesores que han dado preferencia a un curso
    updateUs: Object, // Mantenimiento de perfil
    getName: Object, // Jala nombre en mantenimiento de perfil
    asignaCarga: Object,
    sectionRequests: Object,
    currentSectionRequest: Object,
    addDpto: Object, // mantenimiento de dpto
    addSeccion: Object, // mantenimiento de secciones
    getConvocatorias: Object, // Aprobacion convocatoria el combobox
    aprobarConvocatorias: Object, // Aprobacion de postulantes en convocatorias de docentes
    changePass: Object, // cambio de pass
    listaProfesDpto: Object, // lista de profes para expedientes Jefe Dpto
    listaProfesSecc: Object, // lista de profes para expedientes Coord Seccion
    editarMiPerfil: Object, // editar mi perfil
    infoUs: Object, // info del usuario
    postulantes: Object,
    asignaPresupuesto: Object,
    tablaEnc: Object,
    cicloActual: Object, // Guarda el año y el ciclo actual {  "year":"2018","ciclo":[{"id":1,"ciclo":"2018-1"}]  }
    consultaPref: Object,
    UserPreferencias: Object,
    GetLicencias: Object, // Dias de licencia en el ciclo actual
    GetlistHorarios: Object, // Informacion del detalle horario
    GetTiposUsuarios: Object, // sacar tipos de usuarios
    resetPass: Object, // olvide contraseña
    getConvocatoriaSeccion: Object, // get lista de convocatoria seccion
    GetInfoCurso: Object,
    historcosProf: Object,
    prueba: Object,
    investigaciones: Object
  },
  mutations,
  actions
})

Vue.use(VuexI18n.plugin, store)

export default store
