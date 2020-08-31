<template>
  <div id="app">
    <h2>---------App内容:Moudle--------</h2>
    <p>{{$store.state.a.name}}</p>
    <button @click="updateName">修改名字</button>
    <p>{{$store.getters.fullname}}</p>
    <p>{{$store.getters.fullname2}}</p>
    <p>{{$store.getters.fullname3}}</p>
    <button @click="asyncUpdateName">异步修改名字</button>
    <hr />

    <h2>---------App内容:info的响应式--------</h2>
    <p>{{$store.state.info}}</p>
    <button @click="updateInfo()">修改信息</button>
    <hr />

    <h2>---------App内容---------</h2>
    <p>{{messsage}}</p>
    <p>{{$store.state.counter}}</p>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent()">addStudent</button>
    <hr />

    <h2>---------App内容：getters---------</h2>
    <p>{{$store.getters.powerCounter}}</p>
    <p>{{$store.getters.more20stu}}</p>
    <p>{{$store.getters.more20stuLength}}</p>
    <p>{{$store.getters.moreAgestu(30)}}</p>
    <hr />

    <h2>---------HelloVuex内容---------</h2>
    <hello-vuex />
    <hr />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import { INCREMENT } from "./store/mutations-types";

export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      messsage: "我是App组件",
      counter: 0,
    };
  },
  // computed:{
  //   more20stu(){
  //     return this.$store.state.students.filter(s => {
  //       return s.age >= 20
  //     })
  //   }
  // },
  methods: {
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      //payload
      //1.普通的提交封装
      // this.$store.commit('addCountla',count)

      //特殊的提交封装
      this.$store.commit({
        type: "addCountla",
        count,
      });
    },
    addStudent() {
      const stu = { id: 114, name: "nami", age: 25 };
      this.$store.commit("addStudentla", stu);
    },
    updateInfo() {
      //commit提交Mutations
      // this.$store.commit('updatmessageeInfola')
      // this.$store.dispatch('aUpdateInfola',{
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('里面已经完成了');
      //   }
      // })
      this.$store.dispatch("aUpdateInfola", "我是携带的信息").then((res) => {
        console.log("里面完成了提交");
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit('updateName','lisi')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  },
};
</script>

<style>
</style>
