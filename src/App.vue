<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/empty">Empty test</router-link>
    </div>
    <button @click="toggleShow">toggle</button>
    <transition name="trans-fade">
      <div v-if="isShow">test</div>
    </transition>
    <router-view v-slot="{ Component }">
      <transition name="trans-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref, } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const isShow = ref(true);
    const toggleShow = () => {
      isShow.value = !isShow.value
    }
    return { isShow, toggleShow }
  }
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.trans-fade-enter-active,
.trans-fade-leave-active {
  transition: 0.3s opacity;
}
.trans-fade-enter-from,
.trans-fade-leave-to {
  opacity: 0;
}
.trans-fade-leave-from,
.trans-fade-enter-to {
  opacity: 1;
}
</style>
