<template>
  <transition name="modal-fade">
    <div
      class="
        fixed
        top-0
        bottom-0
        right-0
        left-0
        z-50
        flex
        justify-center
        background
      "
      @click="$emit('close-modal')"
    >
      <div class="w-3/5 bg-modal" @click.stop>
        <!-- Modal body -->
        <div class="relative">
          <p>{{name}}</p>
          <p class="text-3xl">
            <span class="text-white font-bold">{{value}}</span> Today
          </p>
          <button @click="$emit('close-modal')" class="absolute top-0 right-0">
            <img
              class="w-6"
              src="../../assets/icon/modal/close-icon.svg"
              alt=""
            />
          </button>
        </div>

        <div class="text-center rounded-2xl py-6">
          <ApexChart :height="height" :series="series" />
        </div>
        <p class="text-white text-base">
          {{title}}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import ApexChart from "./ApexChart.vue";

export default {
  components: {
    ApexChart,
  },
  props: ["height", "series","name", "title", "value"],
  emits: ["close-modal"],
  data() {
    return {
      checked: true,
    };
  },
};
</script>

<style scoped>
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.background {
  background: rgba(37, 41, 46, 0.7);
}
.bg-modal {
  background-color: rgba(60, 67, 78, 0.99);
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 2rem;
  margin: auto;
  border-radius: 1rem;
}
</style>
