<template>
  <div>
    <button @click="increment">点击count+1</button>
    <button @click="decrement">点击count-1</button>
  </div>
</template>

<script>
import { incrementCounter, decrementCounter } from '../vuex/actions'

export default {
  vuex: {
    actions: {
      increment: incrementCounter,
      decrement: decrementCounter
    }
  }
}
</script>

