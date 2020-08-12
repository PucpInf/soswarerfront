import utils from 'services/utils'

const menuItems = state => {
  // menuItems
  // 0 Administrador          0
  // 1 Asistente              1
  // 2 Profesor               2
  // 3 JefeDepartamento       3
  // 4 CoordinadorSeccion     4
  // permisos
  // 1 Profesor                 0
  // 2 Administrador            1
  // 3 Coordinador de Sección   2
  // 4 Jefe de departamento     3
  // 5 Asistente                4
  // alert(state.menu.items.length)
  // alert(JSON.stringify(state.menu.items[0]))
  // alert(JSON.stringify(state.menu.items[1]))
  // alert(JSON.stringify(state.menu.items[2]))
  // alert(JSON.stringify(state.menu.items[3]))
  // alert(JSON.stringify(state.menu.items[4]))
  state.menu.items[0].show = false
  state.menu.items[1].show = false
  state.menu.items[2].show = false
  state.menu.items[3].show = false
  state.menu.items[4].show = false
  // Administrador
  state.menu.items[0].show = state.permisos[1].show
  state.menu.items[0].children[0].show = true
  state.menu.items[0].children[1].show = true
  state.menu.items[0].children[2].show = true
  state.menu.items[0].children[3].show = true
  state.menu.items[0].children[4].show = true
  // Asistente
  state.menu.items[1].show = state.permisos[4].show
  state.menu.items[1].children[0].show = true
  state.menu.items[1].children[1].show = false
  state.menu.items[1].children[2].show = true
  state.menu.items[1].children[3].show = true
  state.menu.items[1].children[4].show = true
  state.menu.items[1].children[5].show = true
  state.menu.items[1].children[6].show = true
  state.menu.items[1].children[7].show = false
  // Profesor
  state.menu.items[2].show = state.permisos[0].show
  state.menu.items[2].children[0].show = true
  state.menu.items[2].children[1].show = false
  state.menu.items[2].children[2].show = true
  state.menu.items[2].children[3].show = false
  state.menu.items[2].children[4].show = false
  state.menu.items[2].children[5].show = false
  state.menu.items[2].children[6].show = true
  state.menu.items[2].children[7].show = true
  state.menu.items[2].children[8].show = true
  state.menu.items[2].children[9].show = false
  // Jefe de Departamento
  state.menu.items[3].show = state.permisos[3].show
  state.menu.items[3].children[0].show = true
  state.menu.items[3].children[1].show = true
  state.menu.items[3].children[2].show = false
  state.menu.items[3].children[3].show = true
  state.menu.items[3].children[4].show = true
  state.menu.items[3].children[5].show = false
  state.menu.items[3].children[6].show = true
  state.menu.items[3].children[7].show = true
  // Coordinador de Seccion
  state.menu.items[4].show = state.permisos[2].show
  state.menu.items[4].children[0].show = true
  state.menu.items[4].children[1].show = true
  state.menu.items[4].children[2].show = true
  state.menu.items[4].children[3].show = true
  state.menu.items[4].children[4].show = false
  state.menu.items[4].children[5].show = true
  state.menu.items[4].children[6].show = true
  state.menu.items[4].children[7].show = false
  state.menu.items[4].children[8].show = false
  state.menu.items[4].children[9].show = false
  state.menu.items[4].children[10].show = false
  state.menu.items[4].children[11].show = false
  // Otros
  state.menu.items[5].show = false
  state.menu.items[6].show = false
  state.menu.items[7].show = false
  state.menu.items[8].show = false
  state.menu.items[9].show = false
  state.menu.items[10].show = false
  state.menu.items[11].show = false
  // alert(JSON.stringify(state.menu.items[0].children[0]))
  return state.menu.items
}
const sidebarOpened = state => state.app.sidebar.opened
const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation
const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading
const breadcrumbs = state => {
  return (keyword) => utils.findInNestedByName(state.menu.items, keyword)
}
const UserName = state => {
  var a = state.us.body.persona.nombres + ' ' + state.us.body.persona.apPaterno + ' ' + state.us.body.persona.apMaterno
  return a
}
const UserCodigoPUCP = state => {
  return state.us.body.id
}
const UserTipo = state => {
  return state.us.body.tipo.nombre_tipo
}
const fotoPerfil = state => {
  return 'http://' + state.us.body.fotoPerfil
}
const correo = state => {
  return state.us.body.correoPucp
}
const telefono = state => {
  return state.us.body.persona.telefono
}
const areaInteres = state => {
  return state.us.body.areaInteres
}
const especializacion = state => {
  return state.us.body.especializacion
}
const gradoAcad = state => {
  return state.us.body.gradoAcad
}
const docenciaUniv = state => {
  return state.us.body.docenciaUniv
}
const expProfesional = state => {
  return state.us.body.expProfesional
}
const investigacion = state => {
  return state.us.body.investigacion
}
// Para perfil del profesor seleccionado
const NameSelect = state => {
  var a = state.usSelect.body.persona.nombres + ' ' + state.usSelect.body.persona.apPaterno + ' ' + state.usSelect.body.persona.apMaterno
  return a
}
const fotoPerfilS = state => {
  return 'http://' + state.usSelect.body.fotoPerfil
}
const CodigoPUCPS = state => {
  return state.usSelect.body.id
}
const UserTipoS = state => {
  return state.usSelect.body.tipo.nombre_tipo
}
const correoS = state => {
  return state.usSelect.body.correoPucp
}
const telefonoS = state => {
  return state.usSelect.body.persona.telefono
}
const areaInteresS = state => {
  return state.usSelect.body.areaInteres
}
const especializacionS = state => {
  return state.usSelect.body.especializacion
}
const gradoAcadS = state => {
  return state.usSelect.body.gradoAcad
}
const docenciaUnivS = state => {
  return state.usSelect.body.docenciaUniv
}
const expProfesionalS = state => {
  return state.usSelect.body.expProfesional
}
const investigacionS = state => {
  return state.usSelect.body.investigacion
}
// Para la lista de todos los apoyos economicos en una seccion
const listaAE = state => {
  return state.listaAllAESec.body
}
const infosol = state => {
  return state.infosol
}
const historialAE = state => {
  return state.historialAE.body
}
const usNew = state => {
  return state.usNew.body
}
const regUs = state => {
  return state.regUs.body
}

export {
  menuItems,
  toggleWithoutAnimation,
  sidebarOpened,
  config,
  palette,
  isLoading,
  breadcrumbs,
  UserName,
  fotoPerfil,
  UserTipo,
  correo,
  telefono,
  areaInteres,
  especializacion,
  gradoAcad,
  docenciaUniv,
  expProfesional,
  investigacion,
  NameSelect,
  fotoPerfilS,
  UserTipoS,
  correoS,
  telefonoS,
  areaInteresS,
  especializacionS,
  gradoAcadS,
  docenciaUnivS,
  expProfesionalS,
  investigacionS,
  listaAE,
  infosol,
  historialAE,
  usNew,
  regUs,
  UserCodigoPUCP,
  CodigoPUCPS
}
