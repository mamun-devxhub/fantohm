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
import TheNavigation from "./components/TheNavigation.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheNavigation,
    TheHeader,
  },
};
</script>
<style>
.apexcharts-tooltip {
  background-color: #161d26 !important;
  color: white;
  border-color: #161d26 !important;
  width: 240px;
  border-radius: 20px !important;
  padding: 8px 20px;
}

.apexcharts-tooltip-title {
  background-color: #161d26 !important;
  color: white;
  border-color: #161d26 !important;
}
</style>
