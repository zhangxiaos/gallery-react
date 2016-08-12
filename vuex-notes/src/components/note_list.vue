<template>
	<div id="note-list">
		<div class="list-header">
			<h2>NOTES|COLIGO</h2>
			<div class="btns">
				<!-- show all notes -->
				<button 
					@click="show = 'all'" 
					:class="{'active-btn': show == 'all'}">
					All Notes
				</button>
				<!-- only show favorite notes -->
				<button 
					@click="show = 'favorite'" 
					:class="{'active-btn': show == 'favorite'}">
					Favorites
				</button>
			</div>
		</div>
		<!-- note list -->
		<div class="list-container">
			<a href="#" 
				v-for="note in filterNotes" 
				:class="{'active-note': activeNote == note}"
				@click="updateActiveNote(note)">
				{{ note.text.trim().substring(0, 30) }}
			</a>
		</div>
	</div>
</template>

<script>
	import { updateActiveNote } from '../vuex/actions'
	
	export default {
		data () {
			return {
				show: 'all'
			}
		},
		vuex: {
			getters: {
				notes: state => state.notes,
				activeNote: state => state.activeNote
			},
			actions: {
				updateActiveNote
			}
		},
		computed: {
			filterNotes () {
				if (this.show == 'all') {
					return this.notes;
				} else if (this.show == 'favorite') {
					return this.notes.filter(note => note.favorite);
				}
			}
		}
	}
</script>

<style>
	#note-list {
		width: 300px;
		height: 100%;
		float: left;
		box-shadow: 2px 0 5px #999;
		background: #f5f5f5;
	}
	.list-header {
		padding-bottom: 20px;
		background: #e8e7e7;
	}
	.list-header h2 {
		line-height: 80px;
		text-align: center;
	}
	.list-header .btns {
		text-align: center;
	}
	.list-header .btns button {
		padding: 8px 30px;
		cursor: pointer;
		outline: none;
		border: 1px solid #999;
		background: #fff;
	}
	.list-header .btns button:first-child {
		margin-right: -4px;
		border-radius: 3px 0 0 3px / 3px 0 0 3px;
	}
	.list-header .btns button:last-child {
		border-radius: 0 3px 3px 0 / 0 3px 3px 0;
	}
	.list-header .btns .active-btn {
		background: #f503cf;
		box-shadow: 0 3px 8px #fde9e9 inset;
	}
	.list-container {
		overflow: auto;
		max-height: 566px;
	}
	.list-container a {
		display: block;
		width: 290px;
		padding: 10px 5px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		border-bottom: 1px solid #eee;
		background: #fff;
	}
	.list-container a:hover {
		background: #f5f5f5;
	}
	.list-container a.active-note {
		color: #fff;
		background: #524771;
	}
</style>