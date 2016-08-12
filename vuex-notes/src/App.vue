<template>
  <div id="app">
    <toolbar></toolbar>
    <note-list></note-list>
    <edit-note></edit-note>
  </div>
</template>

<script>
import Toolbar from './components/toolbar'
import NoteList from './components/note_list'
import EditNote from './components/edit_note'

export default {
  components: {
    Toolbar,
    NoteList,
    EditNote
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  html, body, #app {
    height: 100%;
  }
  a {
    text-decoration: none;
    color: #000;
  }
</style>
