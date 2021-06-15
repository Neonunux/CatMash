import { sampleSize } from 'lodash';
import { createStore, MutationTree } from 'vuex';

import fighters from '../assets/resources/fighters.json';

const fightersPerBattle = 2;

type Fighter = {
  id: string,
  imageUrl: string,
};

type PastBattle = {
  fighters: Fighter[],
  winnerId: string,
};

export default createStore({
  state: {
    fighters: fighters as Fighter[],
    pastBattles: [] as PastBattle[],
    battlingFighters: [] as Fighter[],
  },
  mutations: {
    enterNewBattle(state) {
      state.battlingFighters = sampleSize(state.fighters, fightersPerBattle);
    },
    chooseBattleWinner(state, winnerId) {
      state.pastBattles.push({
        fighters: [...state.battlingFighters],
        winnerId,
      });
    },
  },
  actions: {
  },
  modules: {
  },
});
