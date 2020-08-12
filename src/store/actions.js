import axios from 'axios'

export default {
  LogUs ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta.concat('api/usuario/loginGoogle/callback')
    return new Promise((resolve, reject) => {
      axios.post(res, data)
        .then(response => {
          if (response.data.status) {
            commit('LogUs', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  /* LogUs ({ commit, state }, data) {
    var ruta = state.server
    // alert(ruta)
    var res = ruta.concat('api/usuario/login')
    // alert(data.usuario)
    // alert(data.pass)
    // alert(res)        console.log(data)
    return new Promise((resolve, reject) => {
      axios.post(res, {
        email: data.usuario,
        password: data.pass
      })
        .then(response => {
          // alert(response.data)
          // alert(JSON.stringify(response))
          // alert(response.data.body.gradoAcad)
          if (response.data.status) {
            commit('LogUs', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  }, */

  listaProfes ({ commit, state }) {
    var ruta = state.server
    var res = ruta.concat('api/usuario/listaProfesores')
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          // alert(response.data)
          if (response.data.status === 200) {
            commit('listaProfes', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  usSelect ({ commit, state }, codigo) {
    var ruta = state.server
    var res = ruta.concat('api/usuario/datosFila/', codigo)
    // alert(res)
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            commit('usSelect', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  GetCiclos ({ commit, state }) {
    var ruta = state.server
    var res = ruta + 'api/ciclo/GetCiclos'
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          // alert(JSON.stringify(response))
          if (response.data.status) {
            commit('GetCiclos', response.data)
          } else {
            alert('message false')
            alert(response.data.message)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  listaAllAESec ({ commit, state }, idSeccion) {
    var ruta = state.server
    var res = ruta.concat('api/usuario/listaApoyosEconomicos/', idSeccion)
    // alert(res)
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            commit('listaAllAESec', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  GetDepartamentos ({ commit, state }) {
    var ruta = state.server
    var res = ruta + 'api/departamento/GetDepartamentos'
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          // alert(JSON.stringify(response))
          if (response.data.status) {
            commit('GetDepartamentos', response.data)
          } else {
            alert('message false')
            alert(response.data.message)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  historialAE ({ commit, state }, idUsuario) {
    var ruta = state.server
    var res = ruta.concat('api/usuario/muestraApoyosProfesor/', idUsuario)
    // alert(res)
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            commit('historialAE', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  listaProfesores ({ commit, state }) {
    var ruta = state.server
    var res = ruta + 'api/usuario/listaProfesores'
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status === 200) {
            commit('listaProfesores', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  registerEconomicSupportForm ({ commit, state }, form) {
    var ruta = state.server
    var res = ruta + 'api/apoyoEconomico/nuevo'
    return new Promise((resolve, reject) => {
      axios.post(res, form)
        .then(response => {
          if (response.data.status === true) {
            // commit('addRequirement')
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  getEconomicRequest ({ commit, state }) {
    var ruta = state.server
    var res = ruta + 'api/apoyoEconomico'
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status === 200) {
            commit('getEconomicRequest', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  responseSolicAE ({ commit, state }, form) {
    var ruta = state.server
    var res = ruta.concat('api/apoyoEconomico/nuevo')
    return new Promise((resolve, reject) => {
      axios.post(res, {
        userId: form.userId,
        totalBudget: form.totalBudget,
        tripDate: form.tripDate,
        eventDate: form.eventDate,
        staffType: form.staffType,
        coinType: form.coinType,
        tripReason: form.tripReason,
        ticket: form.ticket,
        registration: form.registration,
        travelExpenses: form.travelExpenses,
        assistCard: form.assistCard,
        feedAndTransport: form.feedAndTransport,
        taxes: form.taxes
      })
        .then(response => {
          if (response.data.status) {
            commit('responseSolicAE', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  GetCursos ({ commit, state }, data) {
    var ruta = state.server
    var idseccion = data.idseccion
    var res = ruta + 'api/seccion/GetCursos/' + idseccion
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          if (response.data.status) {
            commit('GetCursos', response.data)
          } else {
            alert('message false')
            alert(response.data.message)
          }
          resolve(response)
        })
    })
  },
  GetAllEncuestas ({ commit, state }) {
    var ruta = state.server
    var res = ruta + 'api/Encuesta/GetAllEncuestas'
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          if (response.data.status) {
            commit('GetAllEncuestas', response.data)
          } else {
            alert('message false')
            alert(response.data.message)
          }
          resolve(response)
        })
    })
  },
  SaveFile ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta + 'api/Encuesta/file'
    return new Promise((resolve, reject) => {
      axios.post(res, {
        file: data.file
      })
        .then(response => {
          alert('correcto')
          // alert(JSON.stringify(response))
          resolve(response)
        })
        .catch(e => {
          alert('catch')
          alert(e)
          reject(e)
        })
    })
  },

  evaluarSolicitud ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/apoyoEconomico/aprobacion')
    // alert(JSON.stringify(json))
    // alert(res)
    return new Promise((resolve, reject) => {
      axios.post(res, {
        id: json.id,
        montoAprobado: json.montoAprobado,
        estado: json.estado,
        observacion: json.observacion,
        fechaRespuesta: json.fechaRespuesta
      })
        .then(response => {
          alert(JSON.stringify(response.data))
          if (response.data.status) {
            alert(response.data.body)
            commit('evaluarSolicitud', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },

  GetCursosAno ({ commit, state }, ano) {
    var ruta = state.server
    var res = ruta + 'api/curso/GetCursosAño/' + ano
    // alert(res)
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          // alert(JSON.stringify(response.data.body))
          if (response.data.status) {
            commit('setcursosano', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  postFile ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/archivo/guardar')
    // alert(JSON.stringify(json))
    // alert(res)
    return new Promise((resolve, reject) => {
      axios.post(res, {
        nombreArchivo: json.nombreArchivo,
        extension: json.extension,
        file: json.file
      })
        .then(response => {
          // alert(JSON.stringify(response.data))
          if (response.data.status) {
            commit('postFile', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert('error de registro: ' + e.message)
          reject(e)
        })
    })
  },

  usNew ({ commit, state }, dni) {
    var ruta = state.server
    var res = ruta + 'api/usuario/consultaDatos/' + dni
    // alert(res)
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          // alert(JSON.stringify(response.data.body))
          if (response.data.status) {
            commit('usNew', response.data)
            // alert('status true')
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  GetEncuestas ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta + 'api/curso/GetHorariosPorCiclo'
    if (typeof data.iddpto !== 'undefined') {
      res += '/' + data.iddpto
    }
    if (typeof data.idSeccion !== 'undefined' && data.idSeccion !== null) {
      res += '/' + data.idSeccion
    }
    if (typeof data.idciclo !== 'undefined' && data.idciclo !== null) {
      res += '/' + data.idciclo
    }
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          // alert(JSON.stringify(response.data))
          if (response.data.status) {
            commit('saveEncuestaTable', response.data.body)
          } else {
            alert('message false')
            alert(response.data.message)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  regUs ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/usuario/registroUsuarioContratado')
    // alert(JSON.stringify(json))
    // alert(res)
    return new Promise((resolve, reject) => {
      axios.post(res, {
        dni: json.dni,
        nombres: json.nombres,
        apPaterno: json.apPaterno,
        apMaterno: json.apMaterno,
        telefono: json.telefono,
        fechaNacimiento: json.fechaNacimiento,
        sexo: json.sexo,
        tipoUsuario: json.tipoUsuario,
        correo: json.correo,
        img: json.img,
        areaInteres: json.areaInteres,
        especializacion: json.especializacion,
        idSeccion: json.idSeccion
      })
        .then(response => {
          // alert(JSON.stringify(response.data))
          if (response.data.status) {
            commit('regUs', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  GetEncuestasPorCursoCiclo ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta + 'api/curso/GetHorariosPorCursoCiclo' + '/' + data.curso + '/' + data.ciclo
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          // alert(JSON.stringify(response.data))
          if (response.data.status) {
            commit('saveEncuestaTable', response.data.body)
          } else {
            alert('message false')
            alert(response.data.message)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  SavePreferencias ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta.concat('api/PreferenciaDictado/AddPreferencia')
    // alert(res)
    // alert(state.us.body.id)
    // alert(data.ciclo1)
    // alert(data.ciclo2)
    // alert(data.cursos)
    return new Promise((resolve, reject) => {
      axios.post(res, {
        idus: state.us.body.id,
        ciclo1: data.ciclo1,
        ciclo2: data.ciclo2,
        cursos: data.cursos
      })
        .then(response => {
          // alert(JSON.stringify(response.data))
          // if (response.data.status) {
          // alert(response.data.message)
          // alert(JSON.stringify(response.data))
          // }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  GetEncuestasHistoricoCurso ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta + 'api/curso/GetCursosGroupByCiclo' + '/' + data.curso
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          // alert(JSON.stringify(response))
          if (response.data.status) {
            commit('saveEncuestaTable', response.data.body)
          } else {
            alert('message false')
            alert(response.data.message)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  GetCursosOAno ({ commit, state }, ano) {
    var dep = state.us.body.seccion.departamento.id
    var ruta = state.server
    var res = ruta + 'api/curso/GetTipoCursosAno/' + ano + '/' + '1' + '/' + dep
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          // alert(JSON.stringify(response.data.body))
          if (response.data.status) {
            commit('setcursosOano', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  GetCursosEAno ({ commit, state }, ano) {
    var dep = state.us.body.seccion.departamento.id
    var ruta = state.server
    var res = ruta + 'api/curso/GetTipoCursosAno/' + ano + '/' + '2' + '/' + dep
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          // alert(JSON.stringify(response.data.body))
          if (response.data.status) {
            commit('setcursosEano', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },
  regConvocatoria ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/convocatoria/registrar')
    // alert(JSON.stringify(json))
    // alert(res)
    // alert(json.tipoconvocatoria)
    return new Promise((resolve, reject) => {
      axios.post(res, {
        titulo: json.titulo,
        puestoTrabajo: json.tipoconvocatoria,
        idSeccion: json.seccion,
        fechaInicio: json.fechaIniAct,
        fechaFin: json.fechaFinPost,
        fechaResultado: json.fechaResult,
        fechaPreSeleccion: json.fechaPreSelect,
        cantidad: json.cant,
        evaluacion: json.evaluacion,
        beneficios: json.beneficios,
        responsabilidades: json.responsabilidades,
        requisitos: json.requisitos,
        documentacion: json.documentacion,
        idUsuario: json.idUsuario
      })
        .then(response => {
          // alert(JSON.stringify(response.data))
          if (response.data.status) {
            commit('regConvocatoria', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  GetEncuestasCursosDictados ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta + 'api/curso/GetProfesoresCurso' + '/' + data.idProfesor
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          if (response.data.status) {
            commit('saveEncuestaTable', response.data.body)
          } else {
            // alert(response.data.message)
          }
          resolve(response)
        })
        .catch(e => {
          if (e.response) {
            alert(e.response.data.message)
            reject(e.response)
          }
          reject(e)
        })
    })
  },

  postConcurso ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/concursoNivel/postConcurso')
    return new Promise((resolve, reject) => {
      axios.post(res, {
        titulo: json.titulo,
        fecha_inicio: json.fecha_inicio,
        fecha_fin: json.fecha_fin,
        nivel: json.nivel,
        descripcion: json.descripcion,
        estado: json.estado,
        idUsuario: json.idUsuario,
        idDepartamento: json.idDepartamento
      })
        .then(response => {
          if (response.data.status) {
            commit('postConcurso', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert('error de registro: ' + e.message)
          reject(e)
        })
    })
  },
  cursosParaAsignar ({ commit, state }, idDpto) {
    var ruta = state.server
    var res = ruta.concat('api/departamento/GetCursos/') + idDpto
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          // alert(response.data)
          if (response.data.status) {
            commit('cursosParaAsignar', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  GetEncuestasHistoricoProfesores ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta + 'api/curso/GetProfesoresGroupByCiclo' + '/' + data.idProfesor
    if (data.iddpto) {
      res += '/' + data.iddpto
    }
    if (data.idseccion) {
      res += '/' + data.idseccion
    }
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          // alert(JSON.stringify(response))
          if (response.data.status) {
            commit('saveEncuestaTable', response.data.body)
          } else {
            alert(response.data.message)
          }
          resolve(response)
        })
        .catch(e => {
          if (e.response) {
            alert(e.response.data.message)
            reject(e.response)
          }
          reject(e)
        })
    })
  },

  listaConcursos ({ commit, state }) {
    var ruta = state.server
    var res = ruta + 'api/concursoNivel/getConcursosSeccion/' + state.us.body.seccion.departamento.id
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            commit('listaConcursos', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  GetEncuestasByFacultad ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta + '/api/Encuesta/GetPuntajesByFacultad' + '/' + data.iddpto + '/' + data.idciclo
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          // alert(JSON.stringify(response))
          if (response.data.status) {
            commit('saveEncuestaTable', response.data.body)
          } else {
            alert('message false')
            alert(response.data.message)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  createRequest ({ commit, state }, form) {
    // var ruta = 'http://127.0.0.1:8000/'
    var ruta = state.server
    var res = ruta + 'api/request/create'
    // console.log(form.file)
    return new Promise((resolve, reject) => {
      axios.post(res, form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          if (response.data.status === true) {
            console.log(response)
            // console.log('jejej')
            // commit('addRequest', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  GetListProfePref ({ commit, state }, idCurso) {
    var ruta = state.server
    var res = ruta + 'api/PreferenciaDictado/GetProfesoresCurso/' + idCurso
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          if (response.data.status) {
            commit('GetListProfePref', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  GetEncuestasByCategoria ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta + '/api/Encuesta/GetPuntajesByCategoria' + '/' + data.iddpto + '/' + data.idciclo
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          // alert(JSON.stringify(response))
          if (response.data.status) {
            commit('saveEncuestaTable', response.data.body)
          } else {
            alert('message false')
            alert(response.data.message)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  GetListProfeDpto ({ commit, state }, idDpto) {
    var ruta = state.server
    var res = ruta + 'api/departamento/GetProfesores/' + idDpto
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            commit('GetListProfeDpto', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  getAllRequests ({ commit, state }, params) {
    // console.log(params)
    var ruta = state.server
    // var ruta = 'http://127.0.0.1:8000/'
    var res = ruta + 'api/request'
    console.log(params)
    return new Promise((resolve, reject) => {
      axios.post(res, params)
        .then(response => {
          console.log(response.data.body)
          if (response.data.status === true) {
            console.log(params.mutation)
            commit(params.mutation, response.data.body)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  getRequest ({ commit, state }, params) {
    var ruta = state.server
    var res = ruta + 'api/request/get'
    return new Promise((resolve, reject) => {
      axios.post(res, params)
        .then(response => {
          console.log(response.data.body)
          if (response.data.status === true) {
            commit(params.mutation, response.data.body)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  responseRequest ({ commit, state }, params) {
    var ruta = state.server
    var res = ruta + 'api/request/response'
    return new Promise((resolve, reject) => {
      axios.put(res, params)
        .then(response => {
          console.log(response.data.body)
          if (response.data.status) {
            console.log('this funca')
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  getUserCourses ({ commit, state }, params) {
    var ruta = state.server
    var res = ruta + 'api/course/userCourses'
    return new Promise((resolve, reject) => {
      axios.post(res, params)
        .then(response => {
          if (response.data.status) {
            console.log(response.data.message)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  postularConcurso ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/concursoNivel/postular')
    // alert(JSON.stringify(json))
    // alert(res)
    return new Promise((resolve, reject) => {
      axios.post(res, {
        idUsuario: json.idUsuario,
        idConcurso: json.idConcurso,
        requestType: json.requestType
      })
        .then(response => {
          // alert(JSON.stringify(response.data))
          if (response.data.status) {
            commit('postularConcurso', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert('error de registro: ' + e.message)
          reject(e)
        })
    })
  },
  listaPostulaciones ({ commit, state }, idDepa) {
    var ruta = state.server
    var res = ruta + 'api/departamento/GetConcursoProfesores/' + idDepa
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            commit('listaPostulaciones', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  aprobarPostulacion ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/concursoNivel/aprobar')
    return new Promise((resolve, reject) => {
      axios.post(res, {
        idConcurso: json.idConcurso,
        idUsuario: json.idUsuario,
        estado: json.estado
      })
        .then(response => {
          if (response.data.status) {
            commit('aprobarPostulacion', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert('error de registro: ' + e.message)
          reject(e)
        })
    })
  },
  updateUs ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/usuario/editar')
    // alert(JSON.stringify(json))
    // alert(res)
    return new Promise((resolve, reject) => {
      axios.post(res, {
        idUsuario: json.idUsuario,
        grados: json.grados,
        docencia: json.docencia,
        experienciaLaboral: json.experienciaLaboral,
        investigaciones: json.investigaciones
      })
        .then(response => {
          // alert(JSON.stringify(response.data))
          if (response.data.status) {
            commit('updateUs', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },
  getName ({ commit, state }, codigo) {
    var ruta = state.server
    var res = ruta + 'api/usuario/getNombre/' + codigo
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            // alert(JSON.stringify(response.data))
            commit('getName', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  GetEncuestasByDedicacion ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta + '/api/Encuesta/GetPuntajesByDedicacion' + '/' + data.iddpto + '/' + data.idciclo
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          // alert(JSON.stringify(response))
          if (response.data.status) {
            commit('saveEncuestaTable', response.data.body)
          } else {
            alert('message false')
            alert(response.data.message)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  asignaCarga ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/asignacionCarga/asignar')
    // alert(res)
    // alert(JSON.stringify(json))
    return new Promise((resolve, reject) => {
      axios.post(res, {
        idHorario: json.idHorario,
        idUsuario: json.idUsuario,
        idCiclo: json.idCiclo,
        idCurso: json.idCurso,
        horas: json.horas
      })
        .then(response => {
          // alert(JSON.stringify(response.data))
          if (response.data.status) {
            // alert(JSON.stringify(response.data))
            commit('asignaCarga', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },
  UserPreferencias ({ commit, state }, idUsuario) {
    var ruta = state.server
    var res = ruta + 'api/PreferenciaDictado/' + idUsuario
    return new Promise((resolve, reject) => {
      axios.get(res, {
      })
        .then(response => {
          if (response.data.status) {
            commit('UserPreferencias', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },
  DeletePreferencia ({ commit, state }, id) {
    var ruta = state.server
    var res = ruta + 'api/PreferenciaDictado/DeletePreferencia/' + id
    return new Promise((resolve, reject) => {
      axios.get(res, {
      })
        .then(response => {
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },

  GetEncuestasByCurso ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta + '/api/Encuesta/GetPuntajesByCurso' + '/' + data.iddpto + '/' + data.idciclo
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          // alert(JSON.stringify(response))
          if (response.data.status) {
            commit('saveEncuestaTable', response.data.body)
          } else {
            alert('message false')
            alert(response.data.message)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  addDpto ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/departamento/addDepartamentos')
    return new Promise((resolve, reject) => {
      axios.post(res, {
        dptos: json.dptos
      })
        .then(response => {
          if (response.data.status) {
            commit('addDpto', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },

  addSeccion ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/seccion/addSecciones')
    return new Promise((resolve, reject) => {
      axios.post(res, {
        dptos: json.dptos
      })
        .then(response => {
          if (response.data.status) {
            commit('addSeccion', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },
  getConvocatorias ({ commit, state }, idDpto) {
    var ruta = state.server
    var res = ruta + '/api/convocatoria/listaConvocatorias/' + idDpto
    return new Promise((resolve, reject) => {
      axios.get(res, {})
        .then(response => {
          // alert(JSON.stringify(response))
          if (response.data.status) {
            commit('getConvocatorias', response.data)
          } else {
            alert('message false')
            alert(response.data.message)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  aprobarConvocatorias ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta.concat('api/PreferenciaDictado/AddPreferencia')
    return new Promise((resolve, reject) => {
      axios.post(res, {
        postulaciones: data.postulaciones
      })
        .then(response => {
          // alert(JSON.stringify(response.data))
          // if (response.data.status) {
          // alert(response.data.message)
          // alert(JSON.stringify(response.data))
          // }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  changePass ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/usuario/cambiaPass')
    return new Promise((resolve, reject) => {
      axios.post(res, {
        idUsuario: json.idUsuario,
        password: json.password,
        nuevoPass: json.nuevoPass
      })
        .then(response => {
          if (response.data.status) {
            commit('changePass', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  listaProfesDpto ({ commit, state }, idDpto) {
    var ruta = state.server
    var res = ruta + 'api/departamento/listaProfesores/' + idDpto
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          // alert(response.data)
          if (response.data.status) {
            commit('listaProfesDpto', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  listaProfesSecc ({ commit, state }, idSecc) {
    var ruta = state.server
    var res = ruta + 'api/seccion/listaProfesores/' + idSecc
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          // alert(response.data)
          if (response.data.status) {
            commit('listaProfesSecc', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  editarMiPerfil ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/usuario/editarMiPerfil')
    // alert(JSON.stringify(json))
    // alert(res)
    return new Promise((resolve, reject) => {
      axios.post(res, {
        idUsuario: json.idUsuario,
        telefono: json.telefono,
        areaInteres: json.areaInteres,
        especializacion: json.especializacion,
        grados: json.grados,
        docencia: json.docencia,
        experienciaLaboral: json.experienciaLaboral,
        investigaciones: json.investigaciones
      })
        .then(response => {
          // alert(JSON.stringify(response.data))
          if (response.data.status) {
            commit('editarMiPerfil', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },
  asignaPresupuesto ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta.concat('api/usuario/addPresupuesto')
    return new Promise((resolve, reject) => {
      axios.post(res, {
        idDepartamento: json.idDepartamento,
        idSeccion: json.idSeccion,
        monto: json.monto
      })
        .then(response => {
          if (response.data.status) {
            commit('asignaPresupuesto', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },
  infoUs ({ commit, state }, idUsuario) {
    var ruta = state.server
    var res = ruta + 'api/usuario/getInfo/' + idUsuario
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          // alert(response.data)
          if (response.data.status) {
            commit('LogUs', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  SavePostulantes ({ commit, state }, datos) {
    var ruta = state.server
    var res = ruta + 'api/convocatoria/seleccion'
    return new Promise((resolve, reject) => {
      axios.post(res, {
        postulantes: datos.postulantes,
        convocatoria: datos.convocatoria
      })
        .then(response => {
          // alert(JSON.stringify(response.data))
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },
  Postulantes ({ commit, state }, convocatoria) {
    var ruta = state.server
    var res = ruta + 'api/convocatoria/getPostulantesConvocatoria/' + convocatoria
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            // alert(JSON.stringify(response.data.data))
            commit('Postulantes', response.data.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  GetTiposUsuarios ({ commit, state }) {
    var ruta = state.server
    var res = ruta + 'api/TipoUsuario/GetTipoUsuario'
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            commit('GetTiposUsuarios', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  GetCicloActual ({ commit, state }) {
    var ruta = state.server
    var res = ruta + 'api/ciclo/GetAñoCicloActual/'
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            commit('GetCicloActual', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  consultaPref ({ commit, state }, idSeccion) {
    var ruta = state.server
    var res = ruta + 'api/PreferenciaDictado/getPreferencias/' + idSeccion
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            // alert(JSON.stringify(response.data))
            commit('consultaPref', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  addCurso ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta + 'api/curso/AddCurso'
    return new Promise((resolve, reject) => {
      axios.post(res, {
        idciclo: json.idciclo,
        codigo: json.codigo,
        nombre: json.nombre,
        credtot: json.credtot,
        credteo: json.credteo,
        credprac: json.credprac,
        facultad: json.facultad,
        idtipo: json.idtipo,
        idseccion: json.idseccion,
        horarios: json.horarios
      })
        .then(response => {
          if (response.data.status) {
            commit('addCurso', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },
  getFacultades ({ commit, state }) {
    var ruta = state.server
    var res = ruta + 'api/facultad/GetFacultades'
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            // alert(JSON.stringify(response.data.data))
            commit('getFacultades', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  resetPass ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta + 'api/usuario/restaurarPass'
    alert(res)
    alert(JSON.stringify(json))
    return new Promise((resolve, reject) => {
      axios.post(res, {
        correo: json.correo
      })
        .then(response => {
          alert(JSON.stringify(response.data))
          if (response.data.status) {
            commit('resetPass', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },
  getConvocatoriaSeccion ({ commit, state }, idSeccion) {
    var ruta = state.server
    var res = ruta + 'api/convocatoria/listaConvocatoriasSeccion/' + idSeccion
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            // alert(JSON.stringify(response.data.data))
            commit('getConvocatoriaSeccion', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  GetInfoCurso ({ commit, state }, idCurso) {
    var ruta = state.server
    var res = ruta + 'api/curso/getInfoCurso/' + idCurso
    // alert(res)
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            // alert(JSON.stringify(response.data))
            commit('GetInfoCurso', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  GetLicencias ({ commit, state }, params) {
    var iduser = params.idUsuario
    var idciclo = params.idCiclo
    var ruta = state.server
    var res = ruta + 'api/licencia/getLicenciasUsuario/' + iduser + '/' + idciclo
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            commit('GetLicencias', response.data.body)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  GetPrueba ({ commit, state }) {
    var ruta = state.server
    var res = ruta + '/api/seccion/GetCursosHorarios/' + 1
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            commit('GetPrueba', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },
  getHistoricosProf ({ commit, state }, dat) {
    var ruta = state.server
    var res = ruta + 'api/HistoricoDictado/getHistoricosProfesor/' + dat
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            console.log(response)
            commit('getHistoricosProf', response.data.body)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  getInvestigaciones ({ commit, state }, data) {
    var ruta = state.server
    var res = ruta + 'api/investigacion/get/'
    return new Promise((resolve, reject) => {
      axios.get(res)
        .then(response => {
          if (response.data.status) {
            console.log(response)
            commit('getInvestigaciones', response.data.body)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  addInvestigacion ({ commit, state }, json) {
    var ruta = state.server
    var res = ruta + 'api/investigacion/new'
    alert(JSON.stringify(json))
    return new Promise((resolve, reject) => {
      axios.post(res, json)
        .then(response => {
          // alert(JSON.stringify(response.data))
          if (response.data.status) {
            // commit('resetPass', response.data)
          }
          resolve(response)
        })
        .catch(e => {
          alert(e.message)
          reject(e)
        })
    })
  },
}
