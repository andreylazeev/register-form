<template>
  <div class="ui-kit">
    <div class="ui-kit__items">
      <div class="ui-kit__item">
        <h3>Button</h3>
        <Button>
          Button
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Controls/Button'
export default {
  name: 'UIKit',
  components: { Button }
}
</script>

<style lang="scss" scoped>
  .ui-kit {
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 0;
    &__items {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(3, max-content);
    }
    &__item {
      display: grid;
      gap: 20px;
    }
  }
</style>
