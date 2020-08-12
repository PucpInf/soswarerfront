<template>
  <div class="login">
    <h2>Bienvenido al Sistema para la Gestión de Docentes</h2>

    <form name="login">
      <!-- <div class="form-group">
        <div class="input-group">
          <input v-model="usuario" type="text" id="email" required="required">
          <label class="control-label" for="email">{{'auth.email' | translate}}</label>
          <i class="bar"></i>
        </div>
      </div> -->
      <!-- <div class="form-group">
        <div class="input-group">
          <input v-model="pass" type="password" id="password" required="required">
          <label class="control-label" for="password">{{'auth.password' | translate}}</label>
          <i class="bar"></i>
        </div>
      </div -->
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container"
        align="center">
        <button
          type="button"
          class="btn btn-primary"
          align="center"
          style="width: 100%"
          @click="auth('google')"
        >Ingresar con Google</button>
        </div>
        <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container"
        align="center">
        <button
          type="button"
          class="btn btn-primary"
          align="center"
          style="width: 100%"
          @click="registrar()"
        >Registrar usuario</button>
      </div>
      <div></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    data () {
      return {
        email: '',
        access_token: '',
        igGoogle: ''
      }
    },
    validaciones: function () {
      var espucp =
        this.usuario.search('@pucp.pe') + this.usuario.search('@pucp.edu.pe')
      if (espucp < 0) {
        return false
      }
      return true
    },
    say: function () {
      /* if (!this.validaciones()) {
        return
      }
      var data = { usuario: this.usuario, pass: this.pass }
      console.log(data)
      this.$store.dispatch('LogUs', data).then(response => {
        console.log('Inside dispatch')
        if (this.$store.state.us.status) {
          console.log(this.$store.state.us)
          // this.$store.dispatch('listaProfesores')
          this.$router.push({ name: 'MiPerfil' })
        } else {
          console.log('GG')
        }
      }) */
      this.$router.push({ name: 'dashboard' })
    },
    registrar () {
      alert('Registrar usuario')
      this.$router.push({ name: 'signup' })
    },
    guardaPerfil (profile) {
      this.email = profile.email
      this.idGoogle = profile.id
    },
    autenticaUsuario () {
      var data = { email: this.email, idGoogle: this.idGoogle }
      this.$store.dispatch('LogUs', data).then(response => {
        if (this.$store.state.us.status) {
          this.$router.push({ name: 'MiPerfil' })
        } else {
          alert('Debe registrarse antes de usar el sistema')
        }
      })
    },
    async auth (network) {
      const hello = this.hello
      await hello(network).login().then(() => {
        const authRes = hello(network).getAuthResponse()
        const token = authRes.access_token
        var self = this
        hello(network).api('me').then(function (json) {
          const profile = json
          console.log(profile)
          self.guardaPerfil(profile)
          self.autenticaUsuario()
        })
      })
    }
  }
}
</script>

<style lang="scss">
.login {
  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
    .down-container {
      .link {
        margin-top: 2rem;
      }
    }
  }

  h2 {
    text-align: center;
  }
  width: 21.375rem;

  .down-container {
    margin-top: 3.125rem;
  }
}

.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
#customBtn {
      display: inline-block;
      background: white;
      color: #444;
      width: 190px;
      border-radius: 5px;
      border: thin solid #888;
      box-shadow: 1px 1px 1px grey;
      white-space: nowrap;
    }
    #customBtn:hover {
      cursor: pointer;
    }
    span.label {
      font-family: serif;
      font-weight: normal;
    }
    span.icon {
      background: url('/img/google.jpg') transparent 5px 60% no-repeat;
      display: inline-block;
      vertical-align: middle;
      width: 42px;
      height: 42px;
    }
    span.buttonText {
      display: inline-block;
      vertical-align: middle;
      padding-left: 42px;
      padding-right: 42px;
      font-size: 14px;
      font-weight: bold;
      /* Use the Roboto font that is loaded in the <head> */
      font-family: 'Roboto', sans-serif;
    }
</style>
