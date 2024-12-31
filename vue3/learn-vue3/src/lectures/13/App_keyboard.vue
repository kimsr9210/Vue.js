<template>
    <div>
        <input type="text" @keyup.enter="addTodo" />
        <!-- <input type="text" @keyup.ctrl.enter="addTodo" /> 다른 키랑 같이 조합하는 경우-->
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{ todo }}
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    setup () {
        const todos = reactive([]);
        const addTodo = event => {
            todos.push(event.target.value);
            event.target.value = '';
            event.target.focus();
        };
        return {todos, addTodo}
    }
}
</script>

<style lang="scss" scoped>

</style>