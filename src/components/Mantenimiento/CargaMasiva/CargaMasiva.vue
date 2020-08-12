<template>
  <div class="dashboard">
    <vuestic-widget :headerText="'Carga Masiva'">
      <form action=""
            :id="fileupload_form"
            method="post">
        <div class="va-row">
          <div class="flex md2">
            <vuestic-radio-button
              option="profesores"
              v-model="seleccion"
              label="Profesores"
            />
            <vuestic-radio-button
              option="investigaciones"
              v-model="seleccion"
              label="Investigaciones"
            />
            <vuestic-radio-button
              option="cursos"
              v-model="seleccion"
              label="Cursos"
            />
            <vuestic-radio-button
              option="imagenes"
              v-model="seleccion"
              label="Imagenes de perfil"
            />
          </div>
          <div class="flex md3" v-if="seleccion != 'imagenes'">
            <div class="va-row">
              <div class="flex">
                <vuestic-file-upload
                  type="single"
                  :file-types="'.xls, .xlsx'"
                  v-model="file"
                />
              </div>
            </div>
          </div>
          <div class="flex md4" v-if="seleccion != 'imagenes'">
            <span>Columnas requeridas:</span>
            <vuestic-tag-group v-model="requiredselected"/>
          </div>
          <div class="flex md10" v-if="seleccion == 'imagenes'">
            <vuestic-file-upload
              type="gallery"
              :file-types="'.png, .jpg, .jpeg'"
              v-model="photos"
              dropzone
            />
          </div>
        </div>
        <div class="va-row">
          <button class="btn btn-primary btn-sm" style="float: right" type="submit" @click.prevent="submit()">
            Cargar Archiv
          </button>
        </div>
      </form>
    </vuestic-widget>
    <vuestic-widget :headerText="'Previsualizacion de datos'">
      <div class="va-row">

      </div>
      <div class="table-responsive">
        <table class="table table-striped first-td-padding">
          <thead>
          <tr>
            <td v-for="(head, i) in fileData.headers" v-bind:key="`header-${i}`">
              {{ head }}
            </td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(elem, i) in fileData.sample" v-bind:key="`entry-${i}`">
            <td v-for="(c, j) in elem" v-bind:key="`col-${j}`">
              {{ c }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </vuestic-widget>
  </div>

</template>

<script>
import XLSX from 'xlsx'
export default {
  name: 'CargaMasiva',
  data () {
    return {
      seleccion: 'profesores',
      file: [],
      photos: [],
      fileData: {
        json: '',
        headers: [],
        sample: ''
      },
      required: {
        profesores: ['col1', 'col2', 'col3', 'col4'],
        investigaciones: ['DOCENTE', 'Año de Producción', 'Id-Publicacion Nuevo', 'Tipo de Publicación', 'Subtipo', 'Indicador de calidad', 'TITULO', 'Autores'],
        cursos: ['col1', 'col2', 'col3', 'col4', 'col5'],
      },

      ui: {
        loading: false,
        error: false
      },

      form: {
        fileString: null,
        fileName: null
      }
    }
  },
  computed: {
    requiredselected: function () {
      return this.required[this.seleccion]
    }
  },
  watch: {
    file: function (val) {
      if (this.file.length > 0) {
        this.pfile()
      } else {
        this.json = []
        this.headers = []
      }
    }
  },
  methods: {
    /* Handle file load, process, and rendering */
    pfile: function () {
      var ind = this.file.length - 1
      console.log(this.file[ind])

      var reader = new FileReader()
      var self = this

      reader.onload = function (e) {
        var data = e.target.result
        data = self.fixdata(data)
        var workbook = XLSX.read(btoa(data), { type: 'base64' })
        var firstSheetName = workbook.SheetNames[0]
        var worksheet = workbook.Sheets[firstSheetName]
        // console.log(XLSX.utils.sheet_to_json(worksheet))
        self.fileData.json = XLSX.utils.sheet_to_json(worksheet)
        console.log(self.fileData.json)
        self.fileData.headers = self.getheaders()
        // console.log(self.fileData.json)
        self.fileData.sample = self.fileData.json.slice(1, 15)
      }
      reader.readAsArrayBuffer(this.file[ind])
    },

    //   var self = this

    //   reader.onload = function (e) {
    //     var data = e.target.result
    //     data = self.fixdata(data)
    //     console.log('Data: ' + data)
    //     var workbook = XLSX.read(btoa(data), { type: 'base64' })
    //     console.log(workbook)
    //     var firstSheetName = workbook.SheetNames[0]
    //     var worksheet = workbook.Sheets[firstSheetName]
    //     // console.log(XLSX.utils.sheet_to_json(worksheet))
    //     self.json = XLSX.utils.sheet_to_json(worksheet)
    //     self.headers = self.getheaders()
    //   }
    //   reader.readAsArrayBuffer(this.file[ind])
    // },
    /* Aux function to get table headers */
    getheaders () {
      var ret = []
      for (var key in this.fileData.json[0]) {
        ret.push(key)
      }
      // console.log(ret)
      return ret
    },
    /* Auxiliar function for base64 encoding */
    fixdata (data) {
      var o = ''
      var l = 0
      var w = 10240
      for (; l < data.byteLength / w; ++l) {
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
      }
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
      return o
    },
    /* Send result JSON to server */
    submit () {

    }
  },
}

</script>
<style lang="scss" scoped>
.upload {
  border: 2px solid #ccc;
  border-radius: 50px;
  margin: 25px 0;
  position: relative;
}
</style>
