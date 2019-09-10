<template>
  <div class="detail">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    msg: String
  }
}
</script>
