<template>
    <div :style="styleObject">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sint excepturi obcaecati! Tempore ipsum, cum magnam perspiciatis sapiente repellendus porro hic totam? Aliquid modi ipsam et velit vel ea amet?</div>
    </div>
    <button v-on:click="fontSize++">+</button>
    <button v-on:click="fontSize--">-</button>
</template>

<script>
import { computed, ref } from 'vue';

export default {
    setup () {
        // const styleObject = reactive({
        //     color : 'red',
        //     fontSize: '13px'
        // }); 

        const fontSize = ref(13);
        const styleObject = computed(() => {
            return {
                color : 'red',
                fontSize: fontSize.value + 'px',
            }
        });
        return {styleObject, fontSize}
    }
}
</script>

<style lang="scss" scoped>

</style>