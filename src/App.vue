<template>
  <div class="flex body-background">
    <header class="absolute lg:static top-0 w-[19rem]">
      <the-navigation></the-navigation>
    </header>
    <main class="w-full overflow-y-auto">
      <the-header @show-the-modal="showModal = true"></the-header>
      <TheModal v-show="showModal" @close-modal="showModal = false" />
      <transition name="scale" mode="out-in">
        <router-view @show-the-modal="showModal = true"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import TheNavigation from "./components/common/TheNavigation.vue";
import TheHeader from "./components/common/TheHeader.vue";
import TheModal from "./components/modal/TheModal.vue";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    TheNavigation,
    TheHeader,
    TheModal,
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
.body-background {
  @apply h-full w-full;
  background: linear-gradient(180deg, #313945, #161d26) no-repeat;
  position: fixed;
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.2);
}
</style>
