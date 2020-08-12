<template>
  <div class="signup">
    <h2>Crear una cuenta</h2>
    <div class="form-group">
      <button class="btn btn-primary btn-micro" @click="auth('google')">
          <div class="btn-with-icon-content btn-micro">
            <i class="ion-md-google ion"></i>
            Asociar cuenta de Google
          </div>
        </button>
    </div>
    <template v-if="!ui.loading">
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" required="required"/>
          <label class="control-label" for="password">Contraseña</label><i class="bar"></i>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" required="required"/>
          <label class="control-label" for="email">Correo</label><i class="bar"></i>
        </div>
      </div>
    </template>
      <div
        class="d-flex align--center justify--space-between down-container">
        <button class="btn btn-primary btn-micro" type="submit">
          Registrar usuario
        </button>
        <router-link class='link pl-2 text-center' :to="{name: 'login'}">
          ¿Ya tienes una cuenta?
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      ui: {
        loading: false,
        success: false,
        error: null
      },
      form: {
        codigoPucp: null,
        correoPucp: null,
        nombre: null,
        departamento: null,
        seccion: null,
        areaInteres: null,
        especializacion: null
      }
    }
  },

  methods: {

    guardaPerfil (profile) {
      console.log(JSON.stringify(profile))
    },

    autenticaUsuario () {

    },

    async auth (network) {
      const hello = this.hello
      await hello(network).login().then(() => {
        const authRes = hello(network).getAuthResponse()
        const token = authRes.access_token
        var self = this
        hello(network).api('me').then(function (json) {
          const profile = json
          self.guardaPerfil(profile)
          self.autenticaUsuario()
        })
      })
    }
  }
}
</script>

<style lang="scss">
.signup {
  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  h2 {
    text-align: center;
  }
  width: 21.375rem;

  .down-container {
    margin-top: 2.6875rem;
  }
}
</style>
