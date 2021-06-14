<script lang="ts">
import { sampleSize } from 'lodash';
import { defineComponent, ref } from 'vue';

import baseFighters from '../assets/resources/fighters.json';

type Fighter = {
  id: string,
  imageUrl: string,
  score: number,
};

const initialScore = 0;
const winGain = 1;
const loseGain = -1;

const fighters = baseFighters.map((fighter) => ({
  ...fighter,
  score: initialScore,
}));

export default defineComponent({
  name: 'Home',
  setup() {
    const fighterA = ref<Fighter>(fighters[0]);
    const fighterB = ref<Fighter>(fighters[0]);

    const enterNextBattle = () => {
      [
        fighterA.value,
        fighterB.value,
      ] = sampleSize(fighters, 2);
    };
    enterNextBattle();

    const chooseWinner = (fighterId: string) => {
      fighterA.value.score += fighterA.value.id === fighterId ? winGain : loseGain;
      fighterB.value.score += fighterB.value.id === fighterId ? winGain : loseGain;
      enterNextBattle();
    };

    return {
      fighterA,
      fighterB,
      chooseWinner,
    };
  },
});
</script>

<template>
  <div class="battle">
    <button
      type="button"
      @click="chooseWinner(fighterA.id)"
    >
      <img :src="fighterA.imageUrl" />
    </button>
    <button
      type="button"
      @click="chooseWinner(fighterB.id)"
    >
      <img :src="fighterB.imageUrl" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.battle {
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    width: 100%;
  }
}
</style>
