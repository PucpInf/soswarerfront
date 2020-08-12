import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Sin Enviar', 'Aprobado', 'Enviada/En espera', 'OTHERS'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.info, palette.warning, palette.primary, palette.fake],
    data: [3000, 6000, 1500, 5000]
  }]
}
