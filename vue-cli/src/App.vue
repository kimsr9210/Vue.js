<template>
  <div>
    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue' //파일의 내용을 변수에 담음

//기존 방법
// let AppHeader = {
//   template:'<header><h1>Header</h1></header>'
// }

export default {
  data: function(){
    return{
      str:'hi'
    }
  },
  components:{
    'app-header':AppHeader
  }
}
</script>

<style>

</style>