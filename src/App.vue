<template>
  <div class="flex">
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
import TheNavigation from "./components/common/TheNavigation.vue";
import TheHeader from "./components/common/TheHeader.vue";

export default {
  components: {
    TheNavigation,
    TheHeader,
  },
};
</script>
