<template>
  <div>
    <div class="inv" v-for="item in investigacion" v-bind:key="item.id">
      <span class="ind bold">{{item.id}}</span>
      <h3>{{item.titulo}}</h3>
      <span class="text">{{item.abstract}}</span>
      <a class="text" v-bind:href="item.link" target="_blank">{{item.link}}</a>
      <span class="text">{{item.fecha_inicio}} / {{item.fecha_fin}}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .bold{
    font-weight: bold;
  }

  h3{
    font-size: 20px;
    margin-bottom: 10px;
  }

  .ind{
    display: inline-block;
    color: #49E286;
    font-size: 20px;
    margin-top: 10px;
  }

  .inv span{
    display: block;
  }

  .inv .continue{
    display: inline-block;
    padding-right: 4px;
  }

  .text{
    margin-top: -5px;
  }

  .inv .nombre{
    color:#49E286;
    text-decoration: underline;
  }
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'investigacion',
    ])
  },
}
</script>
