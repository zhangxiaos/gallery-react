<template>
	<div id="edit-note">
		<textarea :value="activeNoteText" @input="editNote"></textarea>
	</div>
</template>

<script>
	import { editNote } from '../vuex/actions'

	export default {
		vuex: {
			getters: {
				activeNoteText: state => state.activeNote.text
			},
			actions: {
				editNote
			}
		}
	}
</script>

<style>
	#edit-note {
		box-sizing: border-box;
		margin-left: 400px;
		padding: 6px 10px;
		height: 100%;
	}
	#edit-note textarea {
		overflow: auto;
		display: block;
		width: 100%;
		height: 100%;
		border: 0;
		outline: none;
		font-size: 14px;
		line-height: 20px;
	}
</style>