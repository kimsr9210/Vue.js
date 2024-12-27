<template>
  <div>
    <button v-on:click="increment">Counter:{{ counter }}</button>
  </div>
</template>

<script>
export default {
	data() {
		return {
			counter: 0,
			books: [],
		};
	},
	methods: {
		increment() {
			this.counter++;
		},
		addBook(title, author) {
      this.books.push({ title, author });
    },
	},
	computed: {
    firstBook() {
      return this.books[0];
    }
  },
  mounted(){
    console.log('컴포넌트가 마운트 되었습니다.');
  }
};
</script>

<style lang="scss" scoped>

</style>