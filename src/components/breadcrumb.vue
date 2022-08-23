<template>
  <div>
    <el-breadcrumb separator="/">
      <!-- to跳转至指定路由， title为标题，separator为面包屑分隔符 -->
      <el-breadcrumb-item v-for="(item, i) in breadList" :key="i">
        <a @click.prevent="handleLink(item)">
          {{ item.meta.title }}
        </a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data () {
    return {
      breadList: null
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    handleLink (item) {
      const { redirect, meta } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(meta.path)
    },
    getBreadcrumb () {
      // 包含当前路由的所有嵌套路径片段的路由记录
      const matched = this.$route.matched.filter((item) => item.meta && item.meta.title)
      // 赋值循环渲染
      this.breadList = matched
    }
  },
  watch: {
    $route (route) {
      // 如果转到重定向页面，不要更新面包屑
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getBreadcrumb()
    }
  }
}
</script>
<style lang="" scoped></style>
