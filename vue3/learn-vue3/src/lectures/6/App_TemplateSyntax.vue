<template>
    <div>
        <h2>보간법</h2>
        <p>{{ message }}</p>
        <p v-once>{{ message }}</p>
        <button v-on:click="message = message + '!'">클릭하면 메세지에 ! 가 들어갑니다.?</button>
        <hr />
        <h2>HTML</h2>
        <p>{{ rawHtml }}</p>
        <p v-html="rawHtml"></p>
        <hr />
        <h2>속성 바인딩</h2>
        <div v-bind:title="dynamicTitle">마우스를 올려보세요 타이틀이 나옵니다</div>
        <div :title="dynamicTitle">v-bind는 단축속성을 지원함 </div>
        <input type="text" value="김소련" v-bind:disabled="isInputDisabled">
        <input v-bind="attrs"/>
        <h2>JavaScript</h2>
        {{ message.split('').reverse().join('') }}<br />
        {{ isInputDisabled ? '예' : '아니오' }}
    </div>
</template>

<script>
import { ref } from 'vue';
    export default {
        setup(){
            const message = ref('안녕하세요');
            const rawHtml = ref('<strong>안녕하세요</strong>');
            const dynamicTitle = ref('타이틀이 정말 나왔죠? >,.<');
            const isInputDisabled = ref(true);
            const attrs = ref({
                type : 'text',
                value: '12345567',
                disabled : false,

            });
            return {
                message,
                rawHtml,
                dynamicTitle,
                isInputDisabled,
                attrs
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>