<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <img src="../assets/plus.png" alt="Plus" class="addBtn"/>
    </span>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      newTodoItem: ""
    }
  },
  methods:{
    addTodo:function(){
      //저장하는 로직
      console.log("하이");
      
      localStorage.setItem(this.newTodoItem, this.newTodoItem); //데이터 호출
      this.clearInput();
    },
    clearInput: function(){
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  display: flex; /* Add flexbox for alignment */
  align-items: center; /* Center items vertically */
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  flex-grow: 1; /* Take up remaining space */
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763fb); /* Fix gradient background */
  display: flex;
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  width: 3rem;
  height: 3rem; /* Ensure it is square */
  border-radius: 0 5px 5px 0;
}

.addContainer img {
  width: 1.5rem; /* Adjust as needed */
  height: 1.5rem; /* Ensure image is square */
  object-fit: cover; /* Ensure image scales properly */
}
</style>