<template>
  <section class="pl-10 pr-6 my-3">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-3">
      <div>
        <div class="main-info p-10 mb-3">
          <h2 class="text-4xl font-extrabold text-[#EDF3FC]">
            Multi-chain swap
          </h2>
          <h5 class="text-xl font-light text-[#EDF3FC] opacity-80">
            +5000 crypto assets
          </h5>
        </div>
        <div class="main-info mb-3">
          <!-- Input 1 -->
          <p class="text-[12px] mb-1">You pay</p>
          <div class="grid grid-cols-12 items-center">
            <div
              class="col-span-12 order-2 sm:order-1 sm:col-span-10 border-[1px] rounded-md p-4"
            >
              <div class="grid grid-cols-5 items-center">
                <div class="col-span-12 sm:col-span-4">
                  <input
                    class="bg-transparent border-[1px] border-gray opacity-70 placeholder:text-lg focus:outline-2 placeholder:font-medium w-full py-2 pl-4 rounded-md"
                    type="text"
                    placeholder="Enter an amount"
                  />
                </div>

                <div
                  class="col-span-12 sm:col-span-1 flex items-center justify-end sm:justify-center pt-2 sm:pt-0"
                >
                  <p class="text-md text-right ml-3 leading-5 pr-1">
                    ETH <br /><span class="text-[12px]">0</span>
                  </p>
                  <img class="h-9" src="../assets/icon/dex/1.png" alt="" />
                </div>
              </div>
            </div>

            <div
              class="col-span-12 order-1 sm:order-2 sm:col-span-2 text-center mb-3 sm:mb-0 sm:ml-2 border-[1px] rounded-md py-[6.5px]"
            >
              <img
                class="w-10 mt-[2px] inline"
                src="../assets/icon/dex/0.svg"
                alt=""
              />
              <p class="text-xs sm:mt-1 hidden sm:block">ETH</p>
            </div>
          </div>

          <!-- Input 2 -->
          <p class="text-[12px] mb-1 mt-5">You Receive</p>
          <div class="grid grid-cols-12 items-center">
            <div
              class="col-span-12 order-2 sm:order-1 sm:col-span-10 border-[1px] rounded-md p-4"
            >
              <div class="grid grid-cols-5 items-center">
                <div class="col-span-12 sm:col-span-4">
                  <input
                    class="bg-transparent border-[1px] border-gray opacity-70 placeholder:text-lg focus:outline-2 placeholder:font-medium w-full py-2 pl-4 rounded-md"
                    type="text"
                    placeholder="Enter an amount"
                  />
                </div>

                <div
                  class="col-span-12 sm:col-span-1 flex items-center justify-end sm:justify-center pt-2 sm:pt-0"
                >
                  <p class="text-md text-right ml-3 leading-5 pr-1">
                    FHM <br /><span class="text-[12px]">0</span>
                  </p>
                  <img class="h-9" src="../assets/icon/dex/2.png" alt="" />
                </div>
              </div>
            </div>

            <div
              class="col-span-12 order-1 sm:order-2 sm:col-span-2 text-center mb-3 sm:mb-0 sm:ml-2 border-[1px] rounded-md py-[6.5px]"
            >
              <img
                class="w-10 mt-[2px] inline"
                src="../assets/icon/dex/3.svg"
                alt=""
              />
              <p class="text-xs sm:mt-1 hidden sm:block">ETH</p>
            </div>
          </div>

          <!-- Text -->
          <div class="p-3 my-6 rounded-md bg-[#363E48]">
            <p>
              Swap consists of multiple transactions on multiple chains. Please
              stay on screen and confirm all transactions.
            </p>
          </div>

          <!-- Textarea -->
          <div>
            <div
              class="grid justify-center items-center h-80 w-full border-dashed border-2 border-[#A6A9BE] border-opacity-60 rounded-md relative"
            >
              <div class="group">
                <img
                  class="absolute top-3 right-3"
                  src="../assets/icon/dex/4.svg"
                  alt=""
                />

                <div
                  class="absolute top-9 right-0 sm:right-4 opacity-0 group-hover:opacity-100 grid gap-x-2 justify-between items-center grid-cols-12 sm:grid-cols-10 bg-[#3A3D52] py-2 px-2 sm:px-4 rounded-md transition-all duration-300"
                >
                  <div class="col-span-5 sm:col-span-4">
                    <p class="text-lg font-medium">Swap Settings</p>
                    <p class="text-[10px] font-medium">
                      Slippage tolerance per Swap
                    </p>
                  </div>

                  <!-- Button -->
                  <div class="col-span-7 sm:col-span-6">
                    <div>
                      <button
                        v-for="(button, index) in buttons"
                        :key="index"
                        :style="{
                          'background-color':
                            activeButton === index + 1 ? color : '',
                        }"
                        @click="setActive(index)"
                        class="px-2 py-1 bg-[#2B2D3E] rounded-sm ml-1 text-[12px]"
                      >
                        {{ button.number }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <p class="">Enter amount to find routes</p>
            </div>
            <div class="text-center mt-7">
              <a href="#" @click="$emit('show-the-modal')" class="wallet-button"
                >Connect Wallet</a
              >
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="main-info p-[4.65rem] mb-3"></div>
        <div class="main-info mb-3 p-8 text-center">
          <a href="#" @click="$emit('show-the-modal')" class="wallet-button"
            >Connect Wallet</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      color: "#F5C677",
      activeButton: 0,
      buttons: [
        {
          number: "0.5%",
        },
        {
          number: "1%",
        },
        {
          number: "3%",
        },
        {
          number: "5%",
        },
        {
          number: "8%",
        },
        {
          number: "13%",
        },
        {
          number: "20%",
        },
      ],
    };
  },
  methods: {
    setActive(index) {
      this.activeButton = index + 1;
    },
  },
};
</script>

<style scoped>
.orange {
  background-color: #f6c777;
}
</style>
