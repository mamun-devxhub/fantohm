/* eslint-disable */

<template>
  <nav
    class="box-shadow background h-fit pt-14 pb-24 px-10 hidden lg:block z-50"
  >
    <div class="py-10 w-28">
      <router-link to="/"
        ><img src="../assets/icon/navbar/logo.svg" alt=""
      /></router-link>
    </div>
    <ul>
      <li class="nav-link">
        <img class="w-6 mr-3" src="../assets/icon/navbar/1.svg" alt="" />
        <router-link class="anchor" to="/">Dashboard</router-link>
      </li>

      <li class="nav-link">
        <img class="w-6 mr-3" src="../assets/icon/navbar/2.svg" alt="" />
        <router-link class="anchor" to="/dex">DEX</router-link>
      </li>

      <li
        class="flex items-start text-primary py-2 text-[14.5px] font-normal hover:text-text-hover active:text-text-hover"
      >
        <img class="w-6 h-6 mr-3" src="../assets/icon/navbar/3.svg" alt="" />
        <div>
          <router-link class="anchor" to="/stake">Stake</router-link>
          <ul class="py-3">
            <li>
              <router-link
                class="text-secondary text-[10.5px] font-semibold hover:text-text-hover active:text-text-hover"
                to="/staking"
                >Staking</router-link
              >
            </li>
            <li>
              <router-link
                class="text-secondary text-[10.5px] font-semibold hover:text-text-hover active:text-text-hover"
                to="/accelerated-90-days"
                >Accelerated 90 Days</router-link
              >
            </li>
            <li>
              <router-link
                class="text-secondary text-[10.5px] font-semibold hover:text-text-hover active:text-text-hover"
                to="/accelerated-180-days"
                >Accelerated 180 Days</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <span class="h-[0.1px] w-full bg-secondary block opacity-50 mb-3"></span>

      <li class="nav-link">
        <img class="w-6 mr-3" src="../assets/icon/navbar/4.svg" alt="" />
        <router-link class="anchor" to="/wrap">Wrap</router-link>
      </li>

      <li class="nav-link">
        <img class="w-6 mr-3" src="../assets/icon/navbar/5.svg" alt="" />
        <router-link class="anchor" to="/invesments">Invesments</router-link>
      </li>

      <li class="nav-link">
        <img class="w-6 mr-3" src="../assets/icon/navbar/6.svg" alt="" />
        <router-link class="anchor" to="/usdb-bond">USDB Bond</router-link>
      </li>

      <li class="nav-link">
        <img class="w-6 mr-3" src="../assets/icon/navbar/7.svg" alt="" />
        <router-link class="anchor" to="/accelerated-bonds"
          >Accelerated Bonds</router-link
        >
      </li>

      <li class="nav-link">
        <img class="w-6 mr-3" src="../assets/icon/navbar/8.svg" alt="" />
        <router-link class="anchor" to="/bond">Bond</router-link>
      </li>

      <li class="nav-link">
        <img class="w-6 mr-3" src="../assets/icon/navbar/9.svg" alt="" />
        <router-link class="anchor" to="/bridge">Bridge</router-link>
      </li>

      <li class="nav-link">
        <img class="w-6 mr-3" src="../assets/icon/navbar/10.svg" alt="" />
        <router-link class="anchor" to="/website">Website</router-link>
      </li>

      <li class="nav-link">
        <img class="w-6 mr-3" src="../assets/icon/navbar/11.svg" alt="" />
        <router-link class="anchor" to="/governance">Governance</router-link>
      </li>

      <li class="nav-link">
        <img class="w-6 mr-3" src="../assets/icon/navbar/12.svg" alt="" />
        <router-link class="anchor" to="/docs">Docs</router-link>
      </li>
    </ul>

    <!-- Icons -->
    <div
      class="fixed bottom-3 flex social-icon-background opacity-90 px-4 py-2"
    >
      <a href="#">
        <img
          class="mr-3 hover:scale-110"
          src="../assets/icon/navbar/13.svg"
          alt=""
        />
      </a>
      <a href="#">
        <img
          class="mr-3 hover:scale-110"
          src="../assets/icon/navbar/14.svg"
          alt=""
        />
      </a>
      <a href="#">
        <img
          class="mr-3 hover:scale-110"
          src="../assets/icon/navbar/15.svg"
          alt=""
        />
      </a>
      <a href="#">
        <img
          class="mr-3 hover:scale-110"
          src="../assets/icon/navbar/16.svg"
          alt=""
        />
      </a>
      <a href="#">
        <img
          class="mr-3 hover:scale-110"
          src="../assets/icon/navbar/17.svg"
          alt=""
        />
      </a>
    </div>
  </nav>

  <!-- Mobile menu -->

  <!-- Nav Button -->
  <button
    class="z-40 relative top-4 left-3 w-10 h-10 text-gray-500 focus:outline-none lg:hidden"
    @click="toogleMenuHandler"
  >
    <span class="sr-only">Open main menu</span>
    <div
      class="absolute block p-5 bg-[#343B47] rounded-md transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
    >
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-5 bg-primary transform transition duration-500 ease-in-out -translate-x-1/2 -translate-y-1/2 left-1/2"
        :class="{
          ' -translate-y-1.5': !isShown,
        }"
      ></span>
      <span
        aria-hidden="true"
        class="block absolute h-[2px] w-4 mt-[1px] bg-primary transform transition duration-500 ease-in-out -translate-x-1/2 -translate-y-1/2 left-1/2"
        :class="{ 'opacity-0': isShown }"
      ></span>
      <span
        aria-hidden="true"
        class="block absolute h-[2.5px] w-3 bg-primary transform transition duration-500 ease-in-out -translate-x-1/2 -translate-y-1/2 left-1/2"
        :class="{
          ' translate-y-1.5': !isShown,
        }"
      ></span>
    </div>
  </button>

  <!-- Nav links -->

  <nav >
    <div>
      <transition name="slide">
        <ul
          v-if="toggleMenu"
          class="box-shadow background h-fit shadow-lg pt-14 pb-24 px-10 relative left-0 z-30 w-fit transition-all duration-200 ease-linear"
        >
        <!-- <div class="fixed top-0 bottom-0 right-0 left-0 flex justify-center backdrop-blur-lg bg-[rgba(60,67,78, 0.4)] -z-50 transition-all duration-300 ease-linear"></div> -->
          <div class="py-10 w-28">
            <img src="../assets/icon/navbar/logo.svg" alt="" />
          </div>

          <li class="nav-link">
            <img class="w-6 mr-3" src="../assets/icon/navbar/1.svg" alt="" />
            <router-link class="anchor" to="/" @click="toogleMenuHandler"
              >Dashboard</router-link
            >
          </li>

          <li class="nav-link">
            <img class="w-6 mr-3" src="../assets/icon/navbar/2.svg" alt="" />
            <router-link class="anchor" to="/dex" @click="toogleMenuHandler"
              >DEX</router-link
            >
          </li>

          <li
            class="flex items-start text-primary py-2 text-[14.5px] font-normal hover:text-text-hover active:text-text-hover"
          >
            <img
              class="w-6 h-6 mr-3"
              src="../assets/icon/navbar/3.svg"
              alt=""
            />

            <div>
              <router-link @click="toogleMenuHandler" class="anchor" to="/stake"
                >Stake</router-link
              >
              <ul class="py-3">
                <li>
                  <router-link
                    class="text-secondary text-[10.5px] font-semibold hover:text-text-hover active:text-text-hover"
                    to="/staking"
                    >Staking</router-link
                  >
                </li>
                <li>
                  <router-link
                    @click="toogleMenuHandler"
                    class="text-secondary text-[10.5px] font-semibold hover:text-text-hover active:text-text-hover"
                    to="/accelerated-90-days"
                    >Accelerated 90 Days</router-link
                  >
                </li>
                <li>
                  <router-link
                    @click="toogleMenuHandler"
                    class="text-secondary text-[10.5px] font-semibold hover:text-text-hover active:text-text-hover"
                    to="/accelerated-180-days"
                    >Accelerated 180 Days</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
          <span
            class="h-[0.1px] w-full bg-secondary block opacity-50 mb-3"
          ></span>

          <li class="nav-link">
            <img class="w-6 mr-3" src="../assets/icon/navbar/4.svg" alt="" />
            <router-link @click="toogleMenuHandler" class="anchor" to="/wrap"
              >Wrap</router-link
            >
          </li>

          <li class="nav-link">
            <img class="w-6 mr-3" src="../assets/icon/navbar/5.svg" alt="" />
            <router-link
              @click="toogleMenuHandler"
              class="anchor"
              to="/invesments"
              >Invesments</router-link
            >
          </li>

          <li class="nav-link">
            <img class="w-6 mr-3" src="../assets/icon/navbar/6.svg" alt="" />
            <router-link
              @click="toogleMenuHandler"
              class="anchor"
              to="/usdb-bond"
              >USDB Bond</router-link
            >
          </li>

          <li class="nav-link">
            <img class="w-6 mr-3" src="../assets/icon/navbar/7.svg" alt="" />
            <router-link
              @click="toogleMenuHandler"
              class="anchor"
              to="/accelerated-bonds"
              >Accelerated Bonds</router-link
            >
          </li>

          <li class="nav-link">
            <img class="w-6 mr-3" src="../assets/icon/navbar/8.svg" alt="" />
            <router-link @click="toogleMenuHandler" class="anchor" to="/bond"
              >Bond</router-link
            >
          </li>

          <li class="nav-link">
            <img class="w-6 mr-3" src="../assets/icon/navbar/9.svg" alt="" />
            <router-link @click="toogleMenuHandler" class="anchor" to="/bridge"
              >Bridge</router-link
            >
          </li>

          <li class="nav-link">
            <img class="w-6 mr-3" src="../assets/icon/navbar/10.svg" alt="" />
            <router-link @click="toogleMenuHandler" class="anchor" to="/website"
              >Website</router-link
            >
          </li>

          <li class="nav-link">
            <img class="w-6 mr-3" src="../assets/icon/navbar/11.svg" alt="" />
            <router-link
              @click="toogleMenuHandler"
              class="anchor"
              to="/governance"
              >Governance</router-link
            >
          </li>

          <li class="nav-link">
            <img class="w-6 mr-3" src="../assets/icon/navbar/12.svg" alt="" />
            <router-link class="anchor" to="/docs">Docs</router-link>
          </li>

          <!-- Icons -->
          <div
            class="fixed bottom-3 flex social-icon-background opacity-90 px-4 py-2"
          >
            <a href="#">
              <img
                class="mr-3 hover:bg-text-hover hover:scale-110"
                src="../assets/icon/navbar/13.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                class="mr-3 hover:scale-110"
                src="../assets/icon/navbar/14.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                class="mr-3 hover:scale-110"
                src="../assets/icon/navbar/15.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                class="mr-3 hover:scale-110"
                src="../assets/icon/navbar/16.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                class="mr-3 hover:scale-110"
                src="../assets/icon/navbar/17.svg"
                alt=""
              />
            </a>
          </div>
        </ul>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isShown: false,
      toggleMenu: false,
    };
  },
  methods: {
    toogleMenuHandler() {
      this.isShown = !this.isShown;
      this.toggleMenu = !this.toggleMenu;
      console.log("hi");
    },
  },
};
</script>

<style scoped>
.background {
  background-color: rgba(60, 67, 78, 1);
  background-image: linear-gradient(180deg, #313945, #282f3b 72%, #161d26);
}
.social-icon-background {
  background: linear-gradient(
    180deg,
    rgba(22, 29, 38, 0),
    rgba(22, 29, 38, 0.8522759446) 40%,
    #161d26
  );
}
.nav-link {
  @apply flex items-center text-primary py-2 text-[14.5px] font-normal hover:text-text-hover active:text-text-hover;
}
.anchor.active {
  @apply text-text-hover border-primary border-b-[1px] inline;
}
.slide-enter-active,
.slide-leave-active {
  left: -100%;
}
</style>
