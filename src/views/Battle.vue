<script lang="ts">
import { defineComponent } from 'vue';
import { useMutations, useState } from 'vuex-composition-helpers';

export default defineComponent({
  name: 'Battle',
  setup() {
    const { battlingFighters: fighters } = useState(['battlingFighters']);
    const { enterNewBattle } = useMutations(['enterNewBattle']);
    const { chooseBattleWinner } = useMutations(['chooseBattleWinner']);

    enterNewBattle();

    const endBattle = (winnerId: string) => {
      chooseBattleWinner(winnerId);
      enterNewBattle();
    };

    return {
      fighters,
      endBattle,
    };
  },
});
</script>

<template>
  <div class="battle">
    <button
      v-for="fighter in fighters"
      :key="fighter.id"
      type="button"
      @click="endBattle(fighter.id)"
    >
      <img :src="fighter.imageUrl" />
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
