<template>
  <div id="app">
    <Display></Display>
    <Increment></Increment>
    <Books></Books>
  </div>
</template>

<script>
import Increment from './components/Increment'
import Display from './components/Display'
import Books from './components/Books'
import store from './vuex/store'

export default {
  components: {
    Increment,
    Display,
    Books
  },
  store
}
</script>
