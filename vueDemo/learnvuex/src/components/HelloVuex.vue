<template>
  <div>
    <p>{{$store.state.counter}}</p>
    <p>{{$store.getters.powerCounter}}</p>
    <p>{{$store.getters.more20stu}}</p>
  </div>
</template>

<script>
export default {
  name:'HelloVuex',
  props:{
    counter:Number
  }
}
</script>