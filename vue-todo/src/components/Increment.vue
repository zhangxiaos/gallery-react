<template>
  <div>
    <button @click="increment">点击count+1</button>
    <button @click="decrement">点击count-1</button>
  </div>
</template>

<script>
export default {
  vuex: {
    actions: {
      increment: ({ dispatch, state }) => dispatch('INCREMENT', 1),
      decrement: ({ dispatch, state }) => dispatch('DECREMENT', 1)
    }
  }
}
</script>

