### 1.使用vue和webpack安装脚手架
vue cli 2.0 
```
vue init webpack projectname
```
vue cli 3.0
```
vue create hello-world
```

### 2.extends
声明扩展另一个组件，extends之后就可以直接在CompB里面使用CompA的属性和方法this.xxx  
CompA.vue
```vue
<script>
  export default {
    name:'CompA'
    props: {
      value: {
        default() {
          return ''
        }
      },
      someset: {
        type: Array,
        default() {
          return []
      }
    },
    computed:{
      someseting() {
        return this.someset.includes(this.value)
      }
    },
    methods:{
      dosomething(){
        this.$emit('input',value)
      }
    }
  }
</script>
```

CompB.vue
```vue
<script>
  import CompA from './common/CompA'
  
  export default {
    name:'CompB'
    extends:CompA,
    methods:{
      doAnother() {
        if(this.value){  //这里的this.value和this.dosomething都是在CompA中扩展来的
          this.dosomething('lalla')
        }
      }
    }
  }
</script>
```

### v-loading 
[！示例](https://coffcer.github.io/vue-loading/ ) 
```js
//用法1
v-loading="loading"

//用法2
v-loading="loading"
:loading-options="{ text: 'custom text ...' }"
```

### vuex
状态管理，即可以跨路径去调用一些方法，如
```js
 // 打开弹窗
      this.$store.dispatch(
        'dialogManager/openDialog',
        key
      )
```
this.$store.dispatch这个方法可以调用vuex/modules/'dialogManager下的方法