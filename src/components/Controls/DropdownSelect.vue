<template>
  <div class="dropdown__select">
    <div class="dropdown__choose" @click="isActive = !isActive" :class="{active : isActive}">
      <span>{{choosedValue ? choosedValue : 'Выберите...'}}</span>
      <Arrow />
    </div>
    <div class="dropdown__items" v-if="isActive">
      <div :key="item.value" v-for="item in items">
        <div class="dropdown__item" @click="chooseItem(item.name, item.value)">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from '../icons/Arrow'
export default {
  name: 'DropdownSelector',
  components: { Arrow },
  data () {
    return {
      isActive: false,
      choosedValue: ''
    }
  },
  props: {
    items: {
      type: Array,
      default: () => ([
        { name: 'Россия', value: 'russia' },
        { name: 'Германия', value: 'germany' }
      ])
    }
  },
  methods: {
    chooseItem (name, value) {
      this.choosedValue = name
      this.$emit('onChange', { name, value })
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown {
    &__select {
      position: relative;
    }

    &__choose {
      padding: 10px 15px;
      background: #FFFFFF;
      border: 1px solid #DBE2EA;
      box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04);
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &.active {
        border: 2px solid #0880AE;
        padding: 9px 14px;
      }

      span {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        user-select: none;
        color: #2C2738;
      }
    }

    &__item {
      padding: 15px 12px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      color: #756F86;
      &:hover {
        cursor: pointer;
        background: #EBF4F8;
      }
    }

    &__items {
      background: #FFFFFF;
      border: 1px solid #DBE2EA;
      box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04), 0 20px 20px rgba(44, 39, 56, 0.04);
      border-radius: 6px;
      padding: 12px 0;

      position: absolute;
      top: 56px;
      left: 0;
      right: 0;
    }
  }
</style>
