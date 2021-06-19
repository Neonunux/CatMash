/* eslint-disable import/prefer-default-export */

import { sortBy } from 'lodash';

import type { PastBattle } from '@/store';

type ScoreEntry<K> = {
  element: K,
  score: number,
};

class ScoreMap<K> {
  private map: Map<K, number>

  constructor() {
    this.map = new Map<K, number>();
  }

  givePoints(key: K, amount: number) {
    const previousScore = this.map.get(key) ?? 0;
    const newScore = previousScore + amount;
    this.map.set(key, newScore);
  }

  toScoreEntries() {
    return [...this.map].map(([element, score]) => ({ element, score }));
  }
}

export function rankFighters(pastBattles: PastBattle[]): ScoreEntry<string>[] {
  const scoreMap = new ScoreMap<string>();

  pastBattles.forEach((pastBattle) => {
    const fighterCount = pastBattle.fighterIds.length;
    const participationGain = -1;
    const winGain = fighterCount - 1 - participationGain;

    pastBattle.fighterIds.forEach((fighterId) => scoreMap.givePoints(fighterId, participationGain));
    scoreMap.givePoints(pastBattle.winnerId, winGain);
  });

  const scoreEntries = scoreMap.toScoreEntries();
  const sortedScoreEntries = sortBy(scoreEntries, 'score').reverse();

  return sortedScoreEntries;
}
