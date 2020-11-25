### v-loading   
加载数据时显示动效。
```vue

v-loading = 'loading'

<script>
data(){
  return {
    loading:true
  }
}
</script>
```

### autocomplete 
autocomplete 是一个可带输入建议的输入框组件，fetch-suggestions 是一个返回输入建议的方法属性，如 querySearch(queryString, cb)，在该方法中你可以在你的输入建议数据准备好时通过 cb(data) 返回到 autocomplete 组件中。  
