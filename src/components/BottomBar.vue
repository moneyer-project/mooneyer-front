<template>
  <el-footer>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <router-link :to="{name: 'home'}">
            <font-awesome-icon icon="home" />
            Home
          </router-link>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <router-link :to="{name: 'about'}">
            <font-awesome-icon icon="info-circle" />
            About
          </router-link>
        </div>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'BottomBar',
  props: {},
  computed: {},
  methods: {}
})
</script>

<style scoped>

</style>
