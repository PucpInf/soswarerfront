<template>
  <div id="gradPestana">
    <div v-for="item in gradoAcad" v-bind:key="item.id">
      <span class="ind bold">{{item.id}}.</span>
      <p class="bold">{{item.nombre}}</p>
      <p class="univ">{{item.institucion}}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    color: #49E286;
    font-size: 20px;
  }

  .p{
    text-decoration: none;
  }

  .univ{
    margin-top: -20px;
    font-size: 13px;
  }

</style>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'gradoAcad',
    ])
  },
}
</script>
