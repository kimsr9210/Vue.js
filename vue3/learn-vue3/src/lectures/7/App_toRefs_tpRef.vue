<template>
    <div>
        <p>author : {{ author }}</p>
        <p>title : {{ title }}</p>
    </div>
</template>

<script>
import { reactive, toRef} from 'vue'

export default {
    
    setup () {
        const book = reactive({
            author: 'Vue Team',
            year: '2020',
            title: 'Vue 3 Guide',
            description: '당신은 이 책을 지금 바로 읽습니다 ;)',
            price: '무료'
            });

            //let { author, title } = book //반응성을 잃어버린 String 형태임
            //const { author, title } = toRefs(book); //여러개 
            const author = toRef(book, 'author'); //한개
            const title = toRef(book, 'title'); //한개
        return {author, title, book}
    }
}
</script>

<style lang="scss" scoped>

</style>