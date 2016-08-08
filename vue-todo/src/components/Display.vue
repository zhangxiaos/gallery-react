<template>
	<div>
		<h1>Count is {{ count }}</h1>
	</div>
</template>>

<script>
export default {
	vuex: {
		getters: {
			count: state => state.count,
			books: state => state.books
		}
	}
}
</script>
