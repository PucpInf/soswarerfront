<template>
  <div>
    <div v-for="item in expProfesional" v-bind:key="item.id">
      <span class="ind bold">{{item.id}}</span>
      <p class="bold">{{item.puesto_de_trabajo}}</p>
      <p class="text">{{item.empresa}}</p>
      <p class="text">{{item.pais}}</p>
      <p class="text">de {{item.fecha_inicio}} hasta {{item.fecha_fin}}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .left{
    float: left;
    margin-right: 200px;
  }

  .right{
    float: right;
    margin-right: 270px;
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

  .text{
    margin-top: -20px;
  }
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'expProfesional',
    ])
  },
}
</script>
