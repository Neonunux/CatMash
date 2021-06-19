<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useState } from 'vuex-composition-helpers';

import { rankFighters } from './rankingUtilities';

export default defineComponent({
  name: 'FighterRanking',
  setup() {
    const { pastBattles } = useState(['pastBattles']);
    const scores = computed(() => rankFighters(pastBattles.value));

    return {
      scores,
    };
  },
});
</script>

<template>
  <ul>
    <li
      v-for="{ element, score } in scores"
      :key="element"
    >
      {{ element }} - {{ score }}
    </li>
  </ul>
</template>
