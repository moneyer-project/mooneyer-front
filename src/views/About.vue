<template>
  <el-container direction="vertical">
    <Header msg="About"/>
    <el-main>
      <p>See <code>README.md</code> for more information.</p>
      <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
      </p>
      <el-button @click="increment()">count is: {{ count }}</el-button>
      <p>
        Edit <code>views/About.vue</code> to test hot module replacement.
      </p>
    </el-main>
    <BottomBar/>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import BottomBar from "../components/BottomBar.vue";
import Header from "../components/Header.vue";

export default defineComponent({
  name: 'About',
  components: {Header, BottomBar},
  computed: {
    count(): number {
      return this.$store.state.count
    }
  },
  methods: {
    increment(): void {
      this.$store.commit('increment');
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
