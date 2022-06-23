import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import VueApexCharts from "vue3-apexcharts";
import "./index.css";

import App from './App.vue';
import Dashboard from './components/CompDashBoard.vue';
import CompDex from './components/CompDex.vue';
import CompStake from './components/stake/CompStake.vue';
import CompStaking from "./components/stake/CompStaking.vue";
import CompStake90Days from "./components/stake/CompStake90Days.vue";
import CompStake180Days from "./components/stake/CompStake180Days.vue";
import CompWrap from './components/CompWrap.vue';
import CompInvestments from './components/CompInvestments.vue';
import CompUsdbBond from './components/CompUsdbBond.vue';
import CompAcceleratedBonds from './components/CompAcceleratedBonds.vue';
import CompBond from './components/CompBond.vue';



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Dashboard }, // our-domain.com/teams => TeamsList
    { path: "/dex", component: CompDex },
    { path: "/stake", component: CompStake },
    { path: "/staking", component: CompStaking },
    { path: "/accelerated-90-days", component: CompStake90Days },
    { path: "/accelerated-180-days", component: CompStake180Days },
    { path: "/wrap", component: CompWrap },
    { path: "/invesments", component: CompInvestments },
    { path: "/usdb-bond", component: CompUsdbBond },
    { path: "/accelerated-bonds", component: CompAcceleratedBonds },
    { path: "/bond", component: CompBond },
  ],
  linkActiveClass: "active",
});

const app = createApp(App);

app.use(router);
app.use(VueApexCharts);

app.mount('#app');
