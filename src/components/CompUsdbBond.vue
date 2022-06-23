<template>
  <section class="px-3 sm:px-5">
    <!-- Desktop view -->
    <div class="hidden sm:block">
      <div class="grid grid-cols-7 sm:my-3">
        <div></div>
        <div class="col-span-7 xl:col-span-5 main-info lg:ml-7 xl:mx-7">
          <div>
            <h4 class="text-[18px] sm:text-h5 py-0">USDB Bond</h4>
            <img class="mb-5" src="../assets/icon/usdb-bond/usdb-banner.png" />
          </div>

          <div class="flex flex-col sm:flex-row sm:justify-evenly pb-12">
            <div class="text-start sm:text-center">
              <h4 class="text-h4 text-gray">Global Treasury Balance</h4>
              <h4 class="text-h4">$27,993,181</h4>
            </div>
            <div></div>
            <div class="text-start sm:text-center pt-4 sm:pt-0">
              <h4 class="text-h4 text-gray">FHM Price</h4>
              <h4 class="text-h4">$1.02</h4>
            </div>
          </div>

          <!-- Column -->
          <div v-for="value in marketValues" :key="value.id">
            <div class="grid grid-cols-5 items-center ml-4 mr-14">
              <div class="col-span-2 text-center">
                <p class="text-gray" :style="{ display: value.display }">
                  Bond
                </p>

                <div class="flex pt-10">
                  <img
                    class="w-8 mx-8"
                    :style="{ width: value.width + 'rem' }"
                    :src="value.image"
                    alt=""
                  />
                  <p>{{ value.bond }}</p>
                </div>
              </div>
              <div class="text-center">
                <p class="text-gray" :style="{ display: value.display }">
                  Price
                </p>

                <p class="pt-10">{{ value.price }}</p>
              </div>

              <div class="text-right col-span-2">
                <p
                  class="text-gray invisible"
                  :style="{ display: value.display }"
                >
                  .
                </p>
                <p class="mt-8"></p>
                <button
                  class="px-6 py-1 rounded-md border disabled:text-gray disabled:opacity-50"
                  disabled
                  :style="{ marginTop: value.margin }"
                >
                  {{ value.button }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>

    <!-- Mobile view -->
    <div class="block sm:hidden">
      <div class="grid sm:my-3">
        <div class="main-info lg:ml-7 xl:mx-7 pt-6 pb-10 mb-5">
          <div>
            <h4 class="text-h4 mb-5">USDB Bond</h4>
            <img class="mb-2" src="../assets/icon/usdb-bond/usdb-banner.png" />
          </div>
          <div class="flex justify-between">
            <div>
              <p class="text-lg sm:text-h4 text-gray">Global Treasury <br /></p>
              <p class="text-lg sm:text-h4 text-gray">Balance <br /></p>
              <p class="text-lg sm:text-h4">$27,997,907 <br /></p>
            </div>
            <div>
              <p class="text-lg sm:text-h4 text-gray">FHM Price</p>
              <p class="text-lg sm:text-h4">$NaN</p>
            </div>
          </div>
        </div>

        <!-- column -->
        <div v-for="value in marketValues" :key="value.id">
          <div class="main-info lg:ml-7 xl:mx-7 pt-6 pb-10 mb-4">
            <div class="flex items-center ml-6 mb-4">
              <img class="w-8" :src="value.image" alt="" />
              <h4 class="text-md ml-10">{{ value.bond }}</h4>
            </div>

            <div class="flex justify-between">
              <p>Price</p>
              <p>{{ value.price }}</p>
            </div>
            <div>
              <button
                class="w-full py-1 rounded-md border disabled:text-gray disabled:opacity-50"
                disabled
                :style="{ marginTop: value.margin }"
              >
                {{ value.button }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      marketValues: [
        {
          id: "1",
          image: require("../assets/icon/usdb-bond/1.svg"),
          bond: "USDB ➜ FHM",
          price: "$1.02",
          button: "Connect Wallet",
          margin: "10px",
          display: "inline",
        },
        {
          id: "2",
          image: require("../assets/icon/usdb-bond/1.svg"),
          bond: "DAI ➜ USDB",
          price: "$1.00",
          button: "Connect Wallet",
          width: "2",
          margin: "10px",
          display: "none",
        },
        {
          id: "3",
          image: require("../assets/icon/bond/2.svg"),
          bond: "FHM ➜ USDB",
          price: "$1.00",
          bondRoi: ".",
          button: "Connect Wallet",
          width: "2",
          margin: "10px",
          display: "none",
        },
      ],
    };
  },
};
</script>

<style scoped>
.text-h4 {
  @apply text-[1.3rem] font-normal;
}
</style>
