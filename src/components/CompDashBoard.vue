<template>
  <div class="dashboard">
    <div class="grid grid-cols-4 main-info mb-8">
      <div>
        <p class="text-h6">FHM Price</p>
        <p class="text-h5">$1.07</p>
      </div>
      <div>
        <p class="text-h6">Market Cap</p>
        <p class="text-h5">$2,691,053</p>
      </div>
      <div>
        <p class="text-h6">Circulating Supply</p>
        <p class="text-h5">2522364 / 4444823</p>
      </div>
      <div>
        <p class="text-h6">Supply Burnt</p>
        <p class="text-h5">98%</p>
      </div>
      <div>
        <p class="text-h6">Global Accelerated APY</p>
        <p class="text-h5">$1.07</p>
      </div>
      <div>
        <p class="text-h6">Treasury Balance</p>
        <p class="text-h5">$28,432,324</p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div class="main-info">
        <p class="text-h6">Total Value Deposited</p>
        <p class="text-h5">$2,378,260</p>
      </div>
      <div class="main-info">
        <p class="text-h6">Current network values</p>
        <p class="text-h5">Fantom network</p>

        <div class="space-y-3 last-child">
          <div class="flex justify-between items-center border-bottom">
            <p class="text-h6">fwsFHM Price</p>
            <p class="text-h5 text-base">$75.43</p>
          </div>
          <div class="flex justify-between items-center border-bottom">
            <p class="text-h6">Current Index</p>
            <p class="text-h5 text-base">73.65</p>
          </div>
          <div class="flex justify-between items-center border-bottom">
            <p class="text-h6">Epoch</p>
            <p class="text-h5 text-base">9.5 hours</p>
          </div>
          <div class="flex justify-between items-center border-bottom">
            <p class="text-h6">Staked FHM</p>
            <p class="text-h5 text-base">89.72%</p>
          </div>
          <div class="flex justify-between items-center border-bottom">
            <p class="text-h6">Epoch Rebase</p>
            <p class="text-h5 text-base">0% / 26.02 sFHM</p>
          </div>
          <div class="flex justify-between items-center border-bottom">
            <p class="text-h6">Accelerated 90-Day APY</p>
            <p class="text-h5 text-base">54%</p>
          </div>
          <div class="flex justify-between items-center border-bottom">
            <p class="text-h6">Accelerated 90-Day ROI</p>
            <p class="text-h5 text-base">11%</p>
          </div>
          <div class="flex justify-between items-center border-bottom">
            <p class="text-h6">Accelerated 90-Day Rebase</p>
            <p class="text-h5 text-base">0.04% / 0.1009 fwsFHM</p>
          </div>
          <div class="flex justify-between items-center border-bottom">
            <p class="text-h6">Accelerated 180-Day APY</p>
            <p class="text-h5 text-base">185%</p>
          </div>
          <div class="flex justify-between items-center border-bottom">
            <p class="text-h6">Accelerated 180-Day ROI</p>
            <p class="text-h5 text-base">68%</p>
          </div>
          <div class="flex justify-between items-center border-bottom">
            <p class="text-h6">Accelerated 180-Day Rebase</p>
            <p class="text-h5 text-base">0.11% / 23.9866 fwsFHM</p>
          </div>
        </div>
      </div>
      <div class="main-info">
        <p class="text-h6">Protocol Owned Liquidity FHM-DAI</p>
        <p class="text-h5">99.99%</p>
      </div>
      <div class="main-info">
        <p class="text-h6">FHM Staked</p>
        <p class="text-h5">87.85%</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.main-info {
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  border: 2px solid hsla(0, 0%, 100%, 0.1);
  background: none;
  box-shadow: none;
}
.border-bottom {
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  padding-bottom: 5px;
}
.last-child div:last-child {
  border-bottom: 0;
}
</style>