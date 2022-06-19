<template>
  <div class="flex">
    <header class=" absolute lg:static top-0">
      <the-navigation></the-navigation>
    </header>
    <main> 
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


