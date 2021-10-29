<template>
  <div class="dropdown">
    <Label>{{label}}</Label>
    <DropdownSelector :items="items" @onChange="change"/>
  </div>
</template>

<script>
import Label from '../content/Label'
import DropdownSelector from '../Controls/DropdownSelect'
export default {
  name: 'Dropdown',
  components: { DropdownSelector, Label },
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    items: {
      type: Array,
      default: () => ([
        { name: 'Россия', value: 'russia' },
        { name: 'Германия', value: 'germany' }
      ])
    }
  },
  methods: {
    change (data) {
      this.$emit('onChange', { name: data.name, value: data.value })
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown {
    display: grid;
    grid-row-gap: 8px;
  }
</style>
