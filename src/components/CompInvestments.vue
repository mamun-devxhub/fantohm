<template>
  <section class="px-3 sm:px-5">
    <!-- Desktop view -->
    <div class="hidden sm:block">
      <div class="grid grid-cols-7 sm:my-3">
        <div></div>
        <div class="col-span-7 xl:col-span-5 main-info lg:ml-7 xl:mx-7">
          <div>
            <h4 class="text-[18px] sm:text-h5 py-0">Investments (📈,📈)</h4>
          </div>

          <div class="flex flex-col sm:flex-row sm:justify-evenly pb-12">
            <div class="text-start sm:text-center">
              <h4 class="text-h4 text-gray">Global Treasury Balance</h4>
              <h4 class="text-h4">$28,005,396</h4>
            </div>
            <div></div>
            <div class="text-start sm:text-center pt-4 sm:pt-0">
              <h4 class="text-h4 text-gray">FHM Price</h4>
              <h4 class="text-h4">$1.04</h4>
            </div>
          </div>

          <!-- Column -->
          <div v-for="value in marketValues" :key="value.id">
            <div class="grid grid-cols-5 items-center ml-4 mr-14">
              <div class="col-span-2 text-center">
                <p class="text-gray" :style="{ display: value.display }">
                  Investment
                </p>

                <div class="grid grid-cols-2 justify-around pt-10">
                  <img
                    class="justify-self-center col-span-1"
                    :style="{ width: value.width + 'rem' }"
                    :src="value.image"
                    alt=""
                  />
                  <p class="col-span-1 justify-self-start">{{ value.investment }}</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-gray" :style="{ display: value.display }">
                  Balance
                </p>

                <p class="pt-10">{{ value.balance }}</p>
              </div>
              <div class="text-right">
                <p class="text-gray" :style="{ display: value.display }">
                  Price
                </p>

                <p class="pt-10">{{ value.price }}</p>
              </div>
              <div class="text-right">
                <p class="text-gray" :style="{ display: value.display }">
                  Value
                </p>

                <p class="pt-10">{{ value.value }}</p>
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
            <h4 class="text-h4 mb-5">Investments (📈,📈)</h4>
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
            <div class="flex items-center ml-5 mb-4">
              <img
                class="w-8"
                :style="{ width: value.width + 'rem' }"
                :src="value.image"
                alt=""
              />
              <h4 class="text-md ml-10">{{ value.investment }}</h4>
            </div>

            <div class="flex justify-between">
              <p>Balance</p>
              <p>{{ value.balance }}</p>
            </div>
            <div class="flex justify-between">
              <p>Price</p>
              <p>{{ value.price }}</p>
            </div>
            <div class="flex justify-between">
              <p>Value</p>
              <p>{{ value.value }}</p>
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
          image: require("../assets/icon/investment/0.svg"),
          investment: "USDB-DAI LP",
          balance: "3544896",
          price: "$1.00",
          value: "$3,545,776",
          width: "2",
          display: "inline",
        },
        {
          id: "2",
          image: require("../assets/icon/investment/1.svg"),
          investment: "USDB",
          balance: "2666400.80",
          price: "$1.0",
          value: "$2,666,401",
          width: "2",
          display: "none",
        },
        {
          id: "3",
          image: require("../assets/icon/investment/2.svg"),
          investment: "USDC",
          balance: "1513068.10",
          price: "$1.0",
          value: "$1,516,094",
          width: "2",
          display: "none",
        },
        {
          id: "4",
          image: require("../assets/icon/investment/3.svg"),
          investment: "DAI",
          balance: "1137926.13",
          price: "$1.0",
          value: "$1,139,064",
          width: "2",
          display: "none",
        },
        {
          id: "5",
          image: require("../assets/icon/investment/4.svg"),
          investment: "wBTC",
          balance: "11.14",
          price: "$21,054.00",
          value: "$234,738",
          width: "2",
          display: "none",
        },
        {
          id: "6",
          image: require("../assets/icon/investment/5.svg"),
          investment: "BEETS-FTM LP",
          balance: "",
          price: "",
          value: "$67,800",
          width: "4.5",
          display: "none",
        },
        {
          id: "7",
          image: require("../assets/icon/investment/6.svg"),
          investment: "DUSK",
          balance: "312124.61",
          price: "$0.12",
          value: "$38,510",
          width: "2",
          display: "none",
        },
        {
          id: "8",
          image: require("../assets/icon/investment/8.svg"),
          investment: "LQDR-FTM LP",
          balance: "312124.61",
          price: "$0.12",
          value: "$12,069",
          width: "4.5",
          display: "none",
        },
        {
          id: "9",
          image: require("../assets/icon/investment/7.svg"),
          investment: "LUNA",
          balance: "9370.48",
          price: "$0.00",
          value: "$1",
          width: "2",
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
