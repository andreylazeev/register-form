<template>
  <div class="home">
    <Form />
  </div>
</template>

<script>
import Form from '../components/Form'
export default {
  name: 'Home',
  components: {
    Form
  }
}
</script>

<style lang="scss" scoped>
.home {
  min-width: 360px;
  height: 100vh;
  padding: 20px;
}
</style>
