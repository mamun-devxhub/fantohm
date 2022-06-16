import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Dashboard from './components/CompDashBoard.vue';
import CompDex from './components/CompDex.vue';
import CompStake from './components/CompStake.vue';
import CompWrap from './components/CompWrap.vue';
import CompInvestments from './components/CompInvestments.vue';
import CompUsdbBond from './components/CompUsdbBond.vue';
import CompAcceleratedBonds from './components/CompAcceleratedBonds.vue';
import CompBond from './components/CompBond.vue';
import CompBridge from './components/CompBridge.vue';
import CompWebsite from './components/CompWebsite.vue';
import CompGovernance from './components/CompGovernance.vue';
import CompDocs from './components/CompDocs.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard }, // our-domain.com/teams => TeamsList
    { path: '/dex', component: CompDex },
    { path: '/stake', component: CompStake },
    { path: '/wrap', component: CompWrap },
    { path: '/invesments', component: CompInvestments },
    { path: '/usdb-bond', component: CompUsdbBond },
    { path: '/accelerated-bonds', component: CompAcceleratedBonds },
    { path: '/bond', component: CompBond },
    { path: '/bridge', component: CompBridge },
    { path: '/website', component: CompWebsite },
    { path: '/governance', component: CompGovernance },
    { path: '/docs', component: CompDocs },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
