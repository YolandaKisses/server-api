<template>
  <div style="width: 20%">
    <el-tabs v-model="menuActiveIndex" type="border-card" @tab-click="tabClick" style="margin-top: 30px">
      <el-tab-pane v-for="item in list" :key="item.id">
        <span slot="label"><i class="el-icon-date"></i> {{ item.name }}</span>
        {{ item.name }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuActiveIndex: '',
      list: [
        {
          id: '1',
          name: 'test1'
        },
        {
          id: '2',
          name: 'test2'
        },
        {
          id: '3',
          name: 'test3'
        },
        {
          id: '4',
          name: 'test4'
        },
        {
          id: '5',
          name: 'test5'
        },
        {
          id: '6',
          name: 'test6'
        }
      ]
    }
  },
  methods: {
    tabClick () {}
  }
}
</script>

<style>
</style>
