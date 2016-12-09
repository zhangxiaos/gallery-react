<template>
	<section class="book-container col-md-8">
		<div class="row form-group col-md-6">
			查找：<input type="text" v-model="filterPara">
		</div>
		<div class="row">
			<div class="col-md-12">
				<table class="table table-bordered table-hover">
					<thead>
						<tr class="text">
							<th @click="sortBy('id')">序号</th>
							<th @click="sortBy('name')">书名</th>
							<th @click="sortBy('author')">作者</th>
							<th @click="sortBy('price')">价格</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="book in books | orderBy sortPara order | filterBy filterPara">
							<td>{{book.id}}</td>
							<td>{{book.name}}</td>
							<td>{{book.author}}</td>
							<td>{{book.price}}</td>
							<template v-if="book.id % 2 == 0">
								<td><button class="btn btn-success" @click="deleteBook(book)">删除</button></td>
							</template>
							<template v-else>
								<td><button class="btn btn-danger" @click="deleteBook(book)">删除</button></td>
							</template>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<p>当前图书总价为：{{ totalPrice | currency }}</p>
				<div id="add-book">
					<legend>添加书籍</legend>
					<div class="form-group">
						<label>书名</label>
						<input type="text" class="form-control" v-model="book.author" name="">
					</div>
					<div class="form-group">
						<label>作者</label>
						<input type="text" class="form-control" v-model="book.name" name="">
					</div>
					<div class="form-group">
						<label>价格</label>
						<input type="text" class="form-control" v-model="book.price" name="">
					</div>
					<button class="btn btn-primary btn-block" @click="insertBook">添加</button>
				</div>
			</div>
		</div>		
	</section>
</template>

<script>
export default {
	data () {
		return {
			filterPara : ''
		}
	},
	vuex: {
		getters: {
			book: state => state.book,
			books: state => state.books,
			sortPara: state => state.sortPara,
			order: state => state.order,
			totalPrice: state => {
				state.totalPrice = 0;
				for (let i=0, len=state.books.length; i<len; i++) {
					state.totalPrice += Number(state.books[i].price);
				}
				return state.totalPrice;
			}
		},
		actions: {
			insertBook: ({ dispatch, state }) => dispatch('INSERTBOOK'),
			deleteBook: ({ dispatch, state }, book) => dispatch('DELETEBOOK', book),
			sortBy: ({ dispatch, state }, sortPara) => dispatch('SORTBY', sortPara)
		}
	}
}
</script>

<style>
	.book-container {margin: 30px 0 30px 200px;}
	.table>tbody>tr>td {vertical-align: middle;}
	th,tr,td {text-align: center;}
	tr th {cursor: pointer;}
</style>