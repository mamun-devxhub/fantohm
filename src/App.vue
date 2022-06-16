<template>
  <div class="flex justify-between ">
    <header>
      <the-navigation></the-navigation>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
