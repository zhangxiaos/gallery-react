import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 0,
	totalPrice: 0,
	book: {},
	books: [
		{ id: 1, author: '曹雪芹', name: '红楼梦', price: 32.0 }, 
		{ id: 2, author: '施耐庵', name: '水浒传', price: 30.0 }, 
		{ id: 3, author: '罗贯中', name: '三国演义', price: 24.0 }, 
		{ id: 4, author: '吴承恩', name: '西游记', price: 20.0 }
	]
}

const mutations = {
	INCREMENT (state, amount) {
		state.count += amount
	},
	DECREMENT (state, amount) {
		state.count -= amount
	},
	INSERTBOOK (state) {
		state.book.id = state.books.length + 1;
		state.books.push(state.book);
		state.book = {};
	},
	DELETEBOOK (state, book) {
		state.books.$remove(book);
	}
}

export default new Vuex.Store({
	state,
	mutations
})