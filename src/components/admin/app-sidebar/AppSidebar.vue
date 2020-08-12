<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">
      <sidebar-link :to="{ name: 'MiPerfil' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-user"></span>
          <span>Mi Perfil</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'Cursos' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-book"></span>
          <span>Cursos</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'Profesores' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-group"></span>
          <span>Profesores</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'Investigaciones' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-archive"></span>
          <span>Investigaciones</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'HistoricoDictado' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-line-chart"></span>
          <span>Histórico de Dictado</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'AsignacionCarga' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>Asignación de Carga</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'AprobacionSeccion' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-check-square-o"></span>
          <span>Aprobación Descargas</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'AprobacionDpto' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-check-square-o"></span>
          <span>Aprobación Descargas</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'Solicitudes' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-calendar-plus-o"></span>
          <span>Solicitudes</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'PreferenciasDictado' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-star"></span>
          <span>Preferencias Dictado</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-statistics"></span>
          <span>Mantenimientos</span>
        </span>
        <sidebar-link :to="{ name: 'CargaMasiva' }">
          <span slot="title">
            <span>Carga Masiva</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'MantDptoSecc' }">
          <span slot="title">
            <span>Departamento/Sección</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'MantUsuario' }">
          <span slot="title">
            <span>Usuarios</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'MantInvestigacion' }">
          <span slot="title">
            <span>Investigaciones</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
    </template>
  </vuestic-sidebar>
</template>

<script>
import VuesticSidebar from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
import SidebarLink from './components/SidebarLink'
import SidebarLinkGroup from './components/SidebarLinkGroup'

export default {
  name: 'app-sidebar',
  components: {
    VuesticSidebar,
    SidebarLink,
    SidebarLinkGroup
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>
