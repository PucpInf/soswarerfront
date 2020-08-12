export default {
  LogUs (state, user) {
    // 1 Profesor                 0
    // 2 Administrador            1
    // 3 Coordinador de Sección   2
    // 4 Jefe de departamento     3
    // 5 Asistente                4
    state.us = user
    state.permisos[0].show = false
    state.permisos[1].show = false
    state.permisos[2].show = false
    state.permisos[3].show = false
    state.permisos[4].show = false
    if (user.body.idTipo === 1) {
      state.permisos[0].show = true
    } else if (user.body.idTipo === 2) {
      state.permisos[0].show = true
      state.permisos[1].show = true
      state.permisos[2].show = true
      state.permisos[3].show = true
      state.permisos[4].show = true
    } else if (user.body.idTipo === 3) {
      state.permisos[0].show = true
      state.permisos[2].show = true
    } else if (user.body.idTipo === 4) {
      state.permisos[0].show = true
      state.permisos[2].show = true
      state.permisos[3].show = true
    } else if (user.body.idTipo === 5) {
      state.permisos[4].show = true
    }
  },
  listaProfes (state, listaProfes) {
    state.listaProfes = listaProfes
  },
  usSelect (state, usSelect) {
    state.usSelect = usSelect
  },
  listaAllAESec (state, listaAllAESec) {
    state.listaAllAESec = listaAllAESec
  },
  historialAE (state, historialAE) {
    state.historialAE = historialAE
  },
  listaProfesores (state, teachers) {
    state.listTeachers = teachers.data
  },
  addRequirement (state, economicSupReq) {
    state.listEconomicSupport.push(economicSupReq)
  },
  getEconomicRequest (state, requests) {
    state.economicRequests = requests.data
  },
  responseSolicAE (state, responseSolicAE) {
    state.responseSolicAE = responseSolicAE
  },
  evaluarSolicitud (state, evaluarSolicitud) {
    state.evaluarSolicitud = evaluarSolicitud
  },
  postFile (state, postFile) {
    state.postFile = postFile
  },
  setcursosano (state, data) {
    state.cursosano = data
  },
  GetCiclos (state, ciclos) {
    state.ciclos = ciclos
  },
  GetDepartamentos (state, departamentos) {
    state.departamentos = departamentos
  },
  GetCursos (state, cursos) {
    state.cursos = cursos
  },
  GetAllEncuestas (state, encuestas) {
    state.encuestas = encuestas
  },
  // valores para recordar selecciones al navegar a otras paginas
  saveUser (state, user) {
    state.selectedUs = user
  },
  // guardar la información para identificar una encuesta en particular
  saveEnc (state, encuesta) {
    state.selectedEnc = encuesta
  },
  // usuario nuevo - Registrar usuario
  usNew (state, usNew) {
    state.usNew = usNew
  },
  // registrar usuario nuevo
  regUs (state, regUs) {
    state.regUs = regUs
  },
  // cursos electivos y obligatorios
  setcursosOano (state, data) {
    state.setcursosOano = data
  },
  setcursosEano (state, data) {
    state.setcursosEano = data
  },
  regConvocatoria (state, data) {
    state.regConvocatoria = data
  },
  postConcurso (state, postConcurso) {
    state.postConcurso = postConcurso
  },
  cursosParaAsignar (state, data) {
    state.cursosParaAsignar = data
  },
  saveEncuestaTable (state, tabla) {
    state.tablaEnc = tabla
  },
  getUserRequests (state, requests) {
    state.userRequests = requests
  },
  getSectionRequests (state, requests) {
    state.sectionRequests = requests
  },
  GetListProfePref (state, data) {
    state.GetListProfePref = data
  },
  listaConcursos (state, listaConcursos) {
    state.listaConcursos = listaConcursos
  },
  postularConcurso (state, postularConcurso) {
    state.postularConcurso = postularConcurso
  },
  listaPostulaciones (state, listaPostulaciones) {
    state.listaPostulaciones = listaPostulaciones
  },
  aprobarPostulacion (state, aprobarPostulacion) {
    state.aprobarPostulacion = aprobarPostulacion
  },
  updateUs (state, updateUs) {
    state.updateUs = updateUs
  },
  getName (state, getName) {
    state.getName = getName
  },
  GetListProfeDpto (state, GetListProfeDpto) {
    state.GetListProfeDpto = GetListProfeDpto
  },
  asignaCarga (state, asignaCarga) {
    state.asignaCarga = asignaCarga
  },
  getRequestApoyo (state, request) {
    state.currentSectionRequest = request
    return request
  },
  getRequestLicencia (state, request) {
    state.currentSectionRequest = request
    return request
  },
  getRequestDescarga (state, request) {
    state.currentSectionRequest = request
    return request
  },
  UserPreferencias (state, UserPreferencias) {
    state.UserPreferencias = UserPreferencias
  },
  addDpto (state, addDpto) {
    state.addDpto = addDpto
  },
  addSeccion (state, addSeccion) {
    state.addSeccion = addSeccion
  },
  getConvocatorias (state, getConvocatorias) {
    state.getConvocatorias = getConvocatorias
  },
  aprobarConvocatorias (state, aprobarConvocatorias) {
    state.aprobarConvocatorias = aprobarConvocatorias
  },
  changePass (state, data) {
    state.changePass = data
  },
  listaProfesDpto (state, listaProfesDpto) {
    state.listaProfesDpto = listaProfesDpto
  },
  listaProfesSecc (state, listaProfesSecc) {
    state.listaProfesSecc = listaProfesSecc
  },
  editarMiPerfil (state, editarMiPerfil) {
    state.editarMiPerfil = editarMiPerfil
  },
  infoUs (state, infoUs) {
    state.infoUs = infoUs
  },
  Postulantes (state, postulantes) {
    state.postulantes = postulantes
  },
  asignaPresupuesto (state, asignaPresupuesto) {
    state.asignaPresupuesto = asignaPresupuesto
  },
  GetCicloActual (state, YearCiclo) {
    state.cicloActual = YearCiclo
  },
  consultaPref (state, consultaPref) {
    state.consultaPref = consultaPref
  },
  GetLicencias (state, GetLicencias, param) {
    state.GetLicencias = GetLicencias
  },
  GetlistHorarios (state, GetlistHorarios) {
    state.GetlistHorarios = GetlistHorarios
  },
  GetTiposUsuarios (state, GetTiposUsuarios) {
    state.GetTiposUsuarios = GetTiposUsuarios
  },
  addCurso (state, addCurso) {
    state.addCurso = addCurso
  },
  getFacultades (state, getFacultades) {
    state.getFacultades = getFacultades
  },
  getCursosSeccion (state, getCursosSeccion) {
    state.getCursosSeccion = getCursosSeccion
  },
  resetPass (state, resetPass) {
    state.resetPass = resetPass
  },
  getConvocatoriaSeccion (state, getConvocatoriaSeccion) {
    state.getConvocatoriaSeccion = getConvocatoriaSeccion
  },
  GetInfoCurso (state, GetInfoCurso) {
    state.GetInfoCurso = GetInfoCurso
  },
  getHistoricosProf (state, historicosProf) {
    state.historicosProf = historicosProf
  },
  GetPrueba (state, prueba) {
    state.prueba = prueba
  },
  getInvestigaciones (state, investigaciones) {
    state.investigaciones = investigaciones
  }
}
