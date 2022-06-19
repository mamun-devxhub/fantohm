<template>
  <div class="flex ">
    <header class="absolute lg:static top-0 w-[19rem]">
      <the-navigation></the-navigation>
    </header>
    <main class="w-full">
      <the-header></the-header>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>


