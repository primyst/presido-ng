import { GameState, Effect } from "../types/types";

export function applyEffects(gameState: GameState, effects: Effect): GameState {
  return {
    ...gameState,
    money: gameState.money + (effects.money || 0),
    publicApproval: Math.min(100, Math.max(0, gameState.publicApproval + (effects.publicApproval || 0))),
    resources: gameState.resources + (effects.resources || 0),
  };
}
