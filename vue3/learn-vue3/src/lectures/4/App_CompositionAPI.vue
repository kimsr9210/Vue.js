<template>
  <div>
    <h2>반응형 메시지</h2>
    <p>{{ reactiveMessage }}</p>
    <button v-on:click="addReactiveMessage">Add Message</button>
    <h2>일반 메세지</h2>
    <p>{{ normalMessage }}</p>
    <button v-on:click="addNormalMessage">Add Message</button>
  </div>
</template>

<script>
import { isRef ,onBeforeMount,onMounted,ref } from 'vue'; //ref : 반응형 api

  export default {
    setup(){
      console.log('setup()');
      const reactiveMessage = ref('Hello Reactive Message');
      const addReactiveMessage = () => {
        reactiveMessage.value = reactiveMessage.value + '!';
      }

      console.log('ifRef(reactiveMessage): ' , isRef(reactiveMessage));

      let normalMessage = 'Hello Normal Message';
      const addNormalMessage = () => {
        normalMessage = normalMessage + '!';
      }

      console.log('ifRef(normalMessage): ' , isRef(normalMessage));

      onMounted(() => {
        console.log('onMounted');
      });

      onBeforeMount(() => {
        console.log('onBeforeMount')
      });

      return{
        reactiveMessage,
        normalMessage,
        addReactiveMessage,
        addNormalMessage
      };
    },
  };


</script>

<style lang="scss" scoped>

</style>