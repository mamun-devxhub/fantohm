<template>
  <section class="px-3 sm:px-5">
    <div class="grid grid-cols-7  sm:my-3">
      <div class="xl:col-span-1 "></div>
      <div class="col-span-7 xl:col-span-5 main-info lg:ml-7 xl:mx-7">
        <div>
          <h4 class="text-[18px] sm:text-h4 py-0">
            Accelerated Staking - 180 Days (⚡️,⚡️)
          </h4>
          <p class="text-xs">
            <span class="font-extrabold">~2 hrs, 48 mins</span> to next
            <a
              href="#"
              class="border-b-[1px] hover:border-b-0 hover:text-text-hover"
              >pool rewards</a
            >
          </p>
        </div>


        <div class="flex flex-col  sm:flex-row sm:justify-evenly pt-10 sm:py-10">
          <div class="text-start sm:text-center sm:pl-14 sm:pr-32">
            <h4 class="text-h4  text-gray">APY</h4>
            <h4 class="text-h4 ">185%</h4>
          </div>
          <div class="text-start sm:text-center pt-4 sm:pt-0">
            <h4 class="text-h4  text-gray">
              Total Value Deposited
            </h4>
            <h4 class="text-h4 ">21274.2010 fwsFHM</h4>
          </div>
        </div>

        <div class="main-info bg-[#212429] my-2 sm:my-5">
          <p class="text-[0.875rem]">
            Each time you stake your 180 day warm-up period resets. When you
            wait until the end of the warm-up period, you can withdraw without
            fees.
          </p>
        </div>

        <div class="text-center mt-5 sm:mt-0">
          <a href="#" @click="$emit('show-the-modal')" class="wallet-button"
            >Connect Wallet</a
          >
         
        </div>
        <p class="text-center mt-5">Connect your wallet to stake fwsFHM</p>
      </div>
      <div class="xl:col-span-1 "></div>
    </div>
  </section>
</template>




<style scoped>
.text-h4 {
  @apply text-[1.3rem] font-normal;
}
</style>
