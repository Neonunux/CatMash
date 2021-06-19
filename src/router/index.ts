import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Battle from '../views/Battle.vue';
import Ranking from '../views/ranking/Ranking.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'battle',
    component: Battle,
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
