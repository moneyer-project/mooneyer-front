<template>
  <el-header height="">
    <img alt="Moneyer logo" src="@/assets/logo.png"/>
    <h1>{{ msg }}</h1>
  </el-header>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Header',
  props: {
    msg: {
      type: String,
      required: true,
      default: "Home"
    }
  },
  computed: {},
  methods: {}
})
</script>

<style scoped>

</style>
