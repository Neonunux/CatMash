<script lang="ts">
import { defineComponent } from 'vue';

import FighterRanking from './FighterRanking.vue';

export default defineComponent({
  name: 'Ranking',
  components: {
    FighterRanking,
  },
});
</script>

<template>
  <fighter-ranking />
</template>
