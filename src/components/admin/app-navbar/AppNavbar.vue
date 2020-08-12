<template>
  <vuestic-navbar>
    <header-selector slot="selector" :isOpen.sync="valueProxy"/>
    <span slot="logo">
      <img src="../../../img/logo.png" height="50px">
    </span>

    <div class="col nav-item dropdown navbar-dropdown d-flex align-items-center justify-content-center" v-dropdown>
        <a class="nav-link dropdown-toggle d-flex align-items-center justify-content" href="#" @click.prevent="closeMenu">
          <span>
            <span>{{UserName}} - {{UserTipo}}</span>
          </span>
        </a>
        <div class="dropdown-menu last">
          <div class="dropdown-menu-content">
            <div class="dropdown-item plain-link-item" @click="logout()">
              <a class="plain-link" href="#">{{'user.logout' | translate}}</a>
            </div>
          </div>
        </div>
      </div>

  </vuestic-navbar>

</template>

<script>
import VuesticIconVuestic
  from '../../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'
import VuesticNavbar
  from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
import HeaderSelector from './components/HeaderSelector'

import LanguageDropdown from './components/dropdowns/LanguageDropdown'
import ProfileDropdown from './components/dropdowns/ProfileDropdown'
import NotificationDropdown from './components/dropdowns/NotificationDropdown'
import MessageDropdown from './components/dropdowns/MessageDropdown'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app-navbar',

  components: {
    VuesticIconVuestic,
    VuesticNavbar,
    HeaderSelector,
    MessageDropdown,
    NotificationDropdown,
    LanguageDropdown,
    ProfileDropdown,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters([
      'sidebarOpened',
      'toggleWithoutAnimation',
      'UserName',
      'UserTipo'
    ]),
    valueProxy: {
      get () {
        return this.isOpen
      },
      set (opened) {
        this.$emit('toggle-menu', opened)
      },
    },
  },
  methods: {
    ...mapActions([
      'closeMenu',
      'toggleSidebar',
      'isToggleWithoutAnimation'
    ]),
    logout: function () {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>
