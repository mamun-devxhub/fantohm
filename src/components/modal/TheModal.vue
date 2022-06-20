<template>
  <transition name="modal-fade">
    <div
      class="fixed top-0 bottom-0 right-0 left-0 flex justify-center bg-[#000000da]"
      @click="$emit('close-modal')"
    >
      <div class="grid content-start">
        <div
          class="cursor-pointer flex justify-between items-center py-5"
          @click="$emit('close-modal')"
        >
          <div class="flex">
            <img
              class="w-10 h-6 mr-2"
              src="../../assets/icon/modal/wallet.svg"
              alt=""
            />
            <h2 class="text-xl font-bold">WalletConnect</h2>
          </div>
          <img
            class="w-6"
            src="../../assets/icon/modal/close-icon.svg"
            alt=""
          />
        </div>

        <!-- Modal body -->
        <div class="text-center bg-white rounded-2xl" @click.stop>
          <div
            class="md:w-[330px] w-28 md:h-8 h-8 mt-4 relative top-5 -translate-x-1/2 -translate-y-1/2 left-1/2 rounded-lg yes_no"
          >
            <input
              type="checkbox"
              class="checkbox h-full"
              @click="SetSelectedComponent"
            />
            <div :class="checked ? 'yes' : 'yes1'">QR Code</div>
            <div :class="!checked ? 'no' : 'no1'">Desktope</div>
            <div :class="checked ? 'text' : 'text1'"></div>
          </div>

          <div>
            <!-- <button  @click="SetSelectedComponent('QRcode')">QRcode</button>
            <button @click="SetSelectedComponent('WalletApps')">WalletApps</button> -->
            <component :is="SelectedComponent" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import QRcode from "./QRcode.vue";
import WalletApps from "./WalletApps.vue";
import { shallowRef } from "vue";
export default {
  emits: ["close-modal"],
  data() {
    return {
      checked: false,
      SelectedComponent: shallowRef(WalletApps),
    };
  },

  methods: {
    // toggle() {
    //   this.checked = !this.checked;
    // },
    SetSelectedComponent() {
      this.checked = !this.checked;
      if (this.SelectedComponent === QRcode) {
        this.SelectedComponent = WalletApps;
      } else {
        this.SelectedComponent = QRcode;
      }
    },
  },

  components: {
    QRcode,
    WalletApps,
  },
};
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.checkbox {
  @apply absolute top-4 w-full cursor-pointer z-50 opacity-0 -translate-x-1/2 -translate-y-1/2 left-1/2;
}

.yes_no {
  background-color: #d2d3d7;
}

.yes {
  height: 1.5rem;
  width: 300px;
  top: 1;
  @apply absolute -left-20 rounded-lg text-white font-bold text-center text-sm leading-8 z-10 transition-all duration-300 ease-in-out;
}

.yes1 {
  height: 1.5rem;
  width: 300px;
  top: 1;
  @apply absolute -left-20 rounded-lg text-white font-bold text-center text-sm leading-8 z-10 transition-all duration-300 ease-in-out;
}

.no {
  height: 1.5rem;
  width: 300px;
  left: 100px;
  top: 1;
  @apply absolute  rounded-lg text-white font-bold text-center text-sm leading-8 z-10 transition-all duration-300 ease-in-out;
}

.no1 {
  height: 1.5rem;
  width: 300px;
  left: 100px;
  top: 1;
  @apply absolute rounded-lg text-white font-bold text-center text-sm leading-8 z-10 transition-all duration-300 ease-in-out;
}

.text {
  height: 1.5rem;
  width: 150px;
  left: 5px;
  @apply absolute top-1 rounded-[6px] bg-white text-white font-bold text-center text-sm leading-8 transition-all duration-300 ease-in-out;
}

.text1 {
  height: 1.5rem;
  width: 150px;
  left: 175px;
  @apply absolute top-1 rounded-[6px] bg-white text-white font-medium text-center text-sm leading-8 transition-all duration-300 ease-in-out;
}
</style>
