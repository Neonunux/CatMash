import { map, sampleSize } from 'lodash';
import { createStore } from 'vuex';

import fighters from '../assets/resources/fighters.json';

const fightersPerBattle = 2;

export type Fighter = {
  id: string,
  imageUrl: string,
};

export type PastBattle = {
  fighterIds: string[],
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
      const fighterIds = map(state.battlingFighters, 'id');
      state.pastBattles.push({
        fighterIds,
        winnerId,
      });
    },
  },
  actions: {
  },
  modules: {
  },
});
