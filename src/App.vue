<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>

// let imgs =  []
// const modulesFiles = require.context('../static/images',true,/\.(jpg|gif|png)$/)
// const modules = modulesFiles.keys().reduce((modules,modulePath) => {
//     const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//     const value = modulesFiles(modulePath)
//     imgs.push(value)
// },{})
export default {
  name: 'App',
  data () {
    return {
      count: 0,
      percent: 0,
    }
  },
  created() {
    
  },
  mounted: function() {
    // this.$NProgress.configure({ showSpinner: false })
    // this.preload()
  },
  methods: {
    //预加载
    preload: function() {
      //console.log(NProgress.start())
      this.$NProgress.start()
      console.time()
      for (let img of imgs) {
        let image = new Image()
        image.src = img
        image.onload = () => {
          //console.log(image)
          this.count++
          // 计算图片加载的百分数，绑定到percent变量
          let percentNum = Math.floor(this.count / imgs.length * 100)
          this.percent = percentNum
          console.log(this.count / imgs.length)
          this.$NProgress.set(this.count / imgs.length)
          if (this.percent == 100) {
            this.$NProgress.done()
            console.timeEnd()
          }
          document.getElementById("show").appendChild(image)
        }
      }
    },

  },
}
</script>
<style lang="scss">
body {
  height: 100%;
  margin: 0;
  padding: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}
html {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a { text-decoration: none; }
a:hover { text-decoration: none; }
#app {
  width: 100%;
}
#show {
  img {
    width: 100%;
  }
}
</style>