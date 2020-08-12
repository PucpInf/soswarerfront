<template>
  <div class="form-elements">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Aprobación de Descargas'">
          <form>
            <div class="row">
              <div class="col-md-3">
                <h5>Datos del solicitante</h5>
                <h6>Nombre</h6>
                <p>{{name}}</p>
                <h6>Unidad</h6>
                <p>{{academicUnit}}</p>
                <h6>Código</h6>
                <p>{{pucpCode}}</p>
                <h6>Tipo de Personal</h6>
                <p>{{staffType}}</p>
              </div>
              <div class="col-md-2">
                <h5>Datos de la descarga</h5>
                <h6>Motivo de la descarga</h6>
                <p>{{downloadReason}}</p>
                <h6>Horas de descarga</h6>
                <p>{{downloadHours}}</p>
                <h6>Estado de solicitud</h6>
                <p>{{state}}</p>
              </div>
            </div>
          </form>
        </vuestic-widget>
      </div>
      <div class="col-md-12">
        <vuestic-widget :headerText="'Comentarios Adicionales' | translate">
          <div class="form-group">
            <div class="input-group">
              <textarea
                type="text"
                id="comentarios"
                name="comentarios"
                v-model="observacion"
                required
              />
              <label
                class="control-label"
                for="simple-textarea"
              >{{'Ingrese sus comentarios' | translate}}</label>
              <i class="bar"></i>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div align="center">
      <button
        class="btn btn-primary btn-micro aprobar"
        v-on:click="sendResponse('Aprobado')"
      >{{' Aprobar ' | translate}}</button>
      <button
        class="btn btn-danger btn-micro"
        v-on:click="sendResponse('Rechazado')"
      >{{'Desaprobar' | translate}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AprobacionDescarga',
  props: {
    request: {
      type: Object,
      default: null
    }
  },
  computed: {
    isSuccessfulEmailValid () {
      let isValid = false
      if (this.formFields.successfulEmail) {
        isValid =
          this.formFields.successfulEmail.validated &&
          this.formFields.successfulEmail.valid
      }
      return isValid
    }
  },
  data () {
    return {
      id: '',
      name: '',
      academicUnit: '',
      state: '',
      staffType: '',
      pucpCode: '',
      downloadHours: '',
      downloadReason: '',
      observacion: ''
    }
  },
  methods: {
    clear (field) {
      this[field] = ''
    },
    sendResponse (state) {
      var body = {
        fechaRespuesta: new Date(),
        id: this.id,
        estado: state,
        observacion: this.observacion,
        requestType: 'Download'
      }
      console.log(body)
      this.$store.dispatch('responseRequest', body).then(response => {
        this.$router.push({ name: 'requestApproval' })
      })
    }
  },
  created () {
    var params = {
      id: this.request.id,
      requestType: this.request.requestType,
      mutation: 'getRequestDescarga'
    }
    this.$store.dispatch('getRequest', params).then(response => {
      console.log(response)
      let body = response.data.body
      this.name =
        body.requierInfo.nombres +
        ' ' +
        body.requierInfo.apPaterno +
        ' ' +
        body.requierInfo.apMaterno
      this.academicUnit = body.section.nombre
      this.state = body.estado
      this.pucpCode = body.idUsuario
      this.downloadHours = body.horasDescarga
      this.pucpCode = body.idUsuario
      this.staffType = 'Docente'
      this.id = body.id
      this.downloadReason = body.razonDescarga
    })
    this.$nextTick(() => {
      this.$validator.validateAll()
    })
  }
}
</script>

<style lang="scss">
input[type="checkbox"]:disabled + label,
input[type="radio"]:disabled + label,
input[type="checkbox"]:disabled,
input[type="radio"]:disabled {
  cursor: not-allowed;
}
</style>
