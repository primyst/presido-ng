import { GameState, Effect } from "@/types";

export function applyEffects(state: GameState, effects: Effect[]): GameState {
  const newState = { ...state };

  for (const effect of effects) {
    if (effect.money) {
      newState.resources.money += effect.money;
    }
    if (effect.reputation) {
      newState.reputation += effect.reputation;
    }
    if (effect.security) {
      newState.sectors.security += effect.security;
    }
    if (effect.education) {
      newState.sectors.education += effect.education;
    }
    if (effect.healthcare) {
      newState.sectors.healthcare += effect.healthcare;
    }
    if (effect.infrastructure) {
      newState.sectors.infrastructure += effect.infrastructure;
    }
    if (effect.agriculture) {
      newState.sectors.agriculture += effect.agriculture;
    }
    if (effect.economy) {
      newState.sectors.economy += effect.economy;
    }
    if (effect.environment) {
      newState.sectors.environment += effect.environment;
    }

    // Clamp values
    newState.reputation = clamp(newState.reputation, 0, 100);
    for (const key in newState.sectors) {
      newState.sectors[key as keyof typeof newState.sectors] = clamp(
        newState.sectors[key as keyof typeof newState.sectors],
        0,
        100
      );
    }
  }

  return newState;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
