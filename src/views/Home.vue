<template>
  <div>
    <el-container>
      <el-aside width="240px">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/A-Business">A</el-menu-item>
              <el-menu-item index="/B-Extension">B</el-menu-item>
              <el-menu-item index="/C-Management">C</el-menu-item>
              <el-menu-item index="/D-customer">D</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <bread />
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import bread from '../components/breadcrumb.vue'
export default {
  components: { bread },
  name: 'Main',
  data () {
    return {
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('/user/login').then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style scoped>
.el-header {

  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  height: 100%;
}

.el-aside {

  background-color: #d3dce6;
  color: #333;
  height: 100vh;
}

.el-main {

  background-color: #e9eef3;
  color: #333;
}
</style>
