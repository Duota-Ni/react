<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
      <hr/>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleform">
        <el-form-item label="年龄" prop="age" :rules="[
        {required:true,message:'年龄不能为空'},
        {type:'number',message:'年龄必须为数字值'}
        ]">
        <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
        <el-button type='primary' @click="submitForm('numberValidateForm.age')">submit</el-button>
        <el-button @click="resetForm('numberValidateForm')">reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      numberValidateForm:{
        age:''
      }
    }
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    },
    submitForm(formName){
      this.$refs[formName].validate((valid)=>{
        if(valid){
          alert('submit!')
        }else{
          console.log('error submit!');
          return false;
        }
      })
    },
    resetForm(formName){
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
