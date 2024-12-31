<template>
    <div>
        <button @click="printEventInfo('Hello Vue3', $event)">
            인라인 이벤트 핸들러
        </button>
        <hr />
        <input @keyup="onKeyupHandler"/>
    </div>
</template>

<script>
export default {
    setup () {
        const printEventInfo = (message, event) => {
            console.log('messsage: ', message);
            console.log(event.target);
            console.log(event.target.tagName);
        }
        const onKeyupHandler = event => {
            console.log('event.key:' , event.key)
        }

        return {
            printEventInfo, onKeyupHandler
        }
    }
}
</script>

<style lang="scss" scoped>

</style>