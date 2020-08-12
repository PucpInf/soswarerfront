<template>
  <div>
  <!--  v-if="isPar(item.id)"-->
    <div id="docencia" class="align" v-for="item in docenciaUniv" v-bind:key="item.id">
      <span class="ind bold">{{item.id}}.</span>
      <p class="bold">{{item.departamento}}</p>
      <p class="text">{{item.puesto_de_trabajo}}</p>
      <p class="text last">{{item.categoria}}</p>
      <span class="text">{{item.fecha_inicio}} / </span> <span class="text">{{item.fecha_fin}}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  /*.align{
    margin-left: -200%;
  }*/

  .left{
    float: left;
    margin-left: 50px;
  }

  .right{
    float: right;
    margin-right: 150px;
  }

  .bold{
    font-weight: bold;
  }

  .ind{
    display: inline-block;
    color: #49E286;
    font-size: 20px;
    margin-top: 10px;
  }

  p{
    text-decoration: none;
  }

  .text{
    margin-top: -20px;
    font-size: 13px;
  }

  .last{
    margin-bottom: -5px;
  }

</style>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'docenciaUniv',
    ])
  },
  methods: {
    isPar (id) {
      const el = document.getElementById('docencia')
      if (id % 2 === 0) {
        el.classList.add('right')
      } else {
        el.classList.add('left')
      }
    }
  }
}
</script>
