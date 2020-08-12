<template>
<div class="table-responsive">
<table class="table table-striped first-td-padding">
  <thead>
    <tr>
      <th class="filters-page__table-heading" v-for="key in columns" v-bind:key="key.id"
        @click="sortBy(key)"
        :class="{ active: sortKey == key }">
        {{ key | capitalize }}
        <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
        </span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="entry in filteredData" v-bind:key="entry.key" @click="edit(entry)">
      <td v-for="key in labels" v-bind:key="key.id">
        {{entry[key]}}
      </td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
export default {
  name: 'DemoGrid',
  props: {
    data: Array,
    columns: Array,
    filterKey: String,
    filterCodigo: String,
    labels: Array,
  },
  data () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      flag: true,
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var filterCodigo = this.filterCodigo
      console.log(filterKey)
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (filterCodigo) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).indexOf(filterCodigo) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    edit: function (entry) {
      // alert(entry.email)  ;
      this.$emit('selected', entry)
    }
  }
}
</script>
