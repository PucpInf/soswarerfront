<template>
  <div class="row">
    <div style="margin-left: -20%" class="left col-md-4">
      <img :src=fotoPerfil>
      <div class="contacto">
        <h4>Contacto: </h4>
        <p class="dat">{{correo}}</p>
        <p class="dat">{{telefono}}</p>
      </div>
    </div>

    <div style="margin-left: 20%" class="right col-md-8">
      <h4>Área de interés: </h4>
      <p>{{areaInteres}}</p>

      <h4>Especialización: </h4>
      <p>{{especializacion}}</p>

      <div style="margin-top: 30px; margin-left: -15px">
        <button class="btn btn-primary btn-micro" @click="editarPerfil()">
          <div class="btn-with-icon-content btn-micro">
            <i class="ion-md-create ion"></i>
            {{'Editar Perfil' | translate}}
          </div>
        </button>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<style lang="scss" scoped>

  img{
    height: 140px;
    width: 110px;
  }

  .contacto{
    margin-top:10px;
  }

  .dat{
    margin-top: -20px;
  }

</style>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'UserName',
      'fotoPerfil',
      'UserTipo',
      'correo',
      'telefono',
      'areaInteres',
      'especializacion'
    ])
  },
  methods: {
    editarPerfil: function () {
      this.$router.push({ name: 'EditarPerfil' })
    }
  }
}
</script>
