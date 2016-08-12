<template>
  <div id="toolbar">
    <button title="添加笔记" 
      @click="addNote">
      +
    </button>
    <button title="收藏笔记" 
      @click="toggleFavorite">
      💗
    </button>
    <button title="删除笔记" 
      @click="deleteNote">
      ×
    </button>
  </div>
</template>

<script>
  import { addNote, deleteNote, toggleFavorite } from '../vuex/actions'

  export default {
    vuex: {
      getters: {
        activeNote: state => state.activeNote
      },
      actions: {
        addNote,
        deleteNote,
        toggleFavorite
      }
    }
  }
</script>

<style>
  #toolbar {
    padding: 0 10px;
    width: 80px;
    height: 100%;
    float: left;
    background: #30414d;
  }
  #toolbar button {
    display: block;
    margin: 20px auto 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 26px;
    border: none;
    outline: none;
    border-radius: 50%;
    font-weight: 400;
    box-shadow: 3px 3px 8px #000;
    cursor: pointer;
  }
  #toolbar button:hover {
    color: #fff;
    background: #524771;
  }
</style>
