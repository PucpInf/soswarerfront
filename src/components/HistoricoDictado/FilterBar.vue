<template>
  <div class="filter-bar">
    <div class="form-group">
      <div class="input-group" style="width: 300px">
        <input v-model="filterText" id="filter" type="text" required="required" @keyup.enter="doFilter">
        <label class="control-label" for="filter">Buscar por</label>
        <i class="bar"></i>
      </div>
    </div>
    <button class="btn btn-primary btn-sm" @click="doFilter">Go</button>
    <button class="btn btn-primary btn-sm" @click="resetFilter">Reset</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filterText: ''
    }
  },
  methods: {
    doFilter () {
      this.$events.fire('filter-set', this.filterText)
    },
    resetFilter () {
      this.filterText = ''
      this.$events.fire('filter-reset')
    }
  }
}
</script>

<style>
.filter-bar {
  padding: 10px;
}
</style>
