<template>
  <section
    class="grid justify-end sticky top-0 bg-[rgba(0, 0, 0, 0.87)] py-5 px-3"
  >
    <div>
      <ul class="flex">
        <li class="relative group">
          <a href="#" class="button-style box-shadow px-3"
            ><img
              class="w-5 h-5 mr-1"
              src="../assets/images/steelseries.svg"
              alt=""
            />
            Fantom</a
          >

          <ul
            class="hidden group-hover:block transition-all duration-500 ease-linear"
          >
            <li
              class="absolute -left-3 top-12 bg-[rgba(60,67,78,1)] pt-4 pb-8 px-2 rounded-md box-shadow"
            >
              <a
                href="#"
                class="flex text-white hover:bg-[#555B64] pr-16 pl-3 py-2 rounded-md transition-all duration-100 ease-linear"
                ><img
                  class="w-5 h-5 mr-1"
                  src="../assets/images/steelseries.svg"
                  alt=""
                />Moonriver</a
              >
            </li>
          </ul>
        </li>

        <li>
          <a href="#" class="button-style box-shadow px-3"
            ><img
              class="w-5 h-5 mr-1"
              src="../assets/images/steelseries.svg"
              alt=""
            />FHM</a
          >
        </li>

        <li>
          <a href="#" class="px-5 button-style box-shadow">Connect Wallet</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.button-style {
  @apply py-2 bg-[rgba(60,67,78,0.4)] flex items-center  rounded-md shadow-lg mr-3 text-white hover:bg-[#4E555E] transition-all duration-100 ease-linear;
}
</style>
