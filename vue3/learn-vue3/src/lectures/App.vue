<template>
    <div>
        <div :class="{ active: isActive}">텍스트 입니다.</div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup () {
        const isActive = ref(true);

        return {
            isActive,

        }
    }
}
</script>

<style scoped>
.active {
    font-weight:900;
}
</style>