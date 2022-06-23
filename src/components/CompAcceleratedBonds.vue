<template>
  <section class="px-3 sm:px-5">
    <!-- Desktop view -->
    <div class="hidden sm:block">
      <div class="grid grid-cols-7 sm:my-3">
        <div></div>
        <div class="col-span-7 xl:col-span-5 main-info lg:ml-7 xl:mx-7">
          <div>
            <h4 class="text-[18px] sm:text-h5 mb-3">Accelerated Bonds</h4>
          </div>

          <div class="flex flex-col sm:flex-row sm:justify-evenly pb-12">
            <div class="text-start sm:text-center">
              <h4 class="text-h4 text-gray">Global Treasury Balance</h4>
              <h4 class="text-h4">$28,026,308</h4>
            </div>
            <div></div>
            <div class="text-start sm:text-center pt-4 sm:pt-0">
              <h4 class="text-h4 text-gray">FHM Price</h4>
              <h4 class="text-h4">$1.03</h4>
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
                  <img class="w-8 mx-8" :src="value.image" alt="" />
                  <p>{{ value.bond }}</p>
                </div>
              </div>
              <div class="text-left">
                <p class="text-gray" :style="{ display: value.display }">
                  Price
                </p>

                <p class="pt-10 invisible">{{ value.price }}</p>
              </div>
              <div class="text-left">
                <p class="text-gray" :style="{ display: value.display }">
                  Bond ROI
                </p>

                <p class="pt-10 invisible">{{ value.bondRoi }}</p>
              </div>
              <div class="text-right">
                <p class="text-gray" :style="{ display: value.display }">
                  Purchased
                </p>

                <p class="pt-10">{{ value.purchased }}</p>
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
            <h4 class="text-h4 mb-5">Accelerated Bonds</h4>
          </div>
          <div class="flex justify-between ">
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
              <p>Purchased</p>
              <p>{{ value.purchased }}</p>
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
          image: require("../assets/icon/investment/3.svg"),
          bond: "DAI",
          price: ".",
          bondRoi: ".",
          purchased: "$1,021,433",
          display: "inline",
        },
        {
          id: "2",
          image: require("../assets/icon/investment/2.svg"),
          bond: "USDC",
          price: ".",
          bondRoi: ".",
          purchased: "$3,013,657",
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
