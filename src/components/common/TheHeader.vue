<template>
  <section
    class="grid justify-end sticky z-10 top-0 bg-[#2D3541] pt-3 pb-5 sm:py-5 px-0 sm:px-3"
  >
    <div>
      <ul class="flex">
        <li class="relative group ">
          <a href="#" class="button-style box-shadow px-2 sm:px-3"
            ><img
              class="w-5 h-5 mr-0 sm:mr-2"
              src="../../assets/icon/header/1.svg"
              alt=""
            />
            <span class="hidden sm:block"> Fantom</span></a
          >

          <ul
            class="opacity-0 group-hover:opacity-100  transition-all duration-300 ease-linear"
          >
            <li
              class="absolute -left-3 top-12 bg-[rgba(60,67,78,1)] pt-4 pb-8 px-2 rounded-md box-shadow"
            >
              <a
                href="#"
                class="flex items-center text-white hover:bg-[#555B64] pr-16 pl-3 py-2 rounded-md transition-all duration-100 ease-linear"
                ><img
                  class="w-5 h-5 mr-2"
                  src="../../assets/icon/header/3.svg"
                  alt=""
                />Moonriver</a
              >
            </li>
          </ul>
        </li>

        <li>
          <a href="#" class="button-style box-shadow px-3"
            ><img
              class="w-5 h-5 mr-2"
              src="../../assets/icon/header/2.svg"
              alt=""
            />FHM</a
          >
        </li>

        <li>
          <a
            href="#"
            @click="$emit('show-the-modal')"
            class="px-5 button-style box-shadow"
            >Connect Wallet</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.background {
  background: linear-gradient(180deg, #313945, #161d26);
}
.button-style {
  @apply py-2 bg-[rgba(60,67,78,0.4)] flex items-center  rounded-md shadow-lg mr-2 sm:mr-3 text-white text-[15px] hover:bg-[#4E555E] transition-all duration-100 ease-linear;
}
</style>
