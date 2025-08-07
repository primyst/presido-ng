import { GameState } from "./gameState";

type Effect = {
  approval?: number;
  economy?: number;
  security?: number;
  funds?: number;
  corruption?: number;
};

export function applyEffects(state: GameState, effects: Effect): GameState {
  return {
    ...state,
    approval: Math.max(0, Math.min(100, state.approval + (effects.approval || 0))),
    economy: Math.max(0, Math.min(100, state.economy + (effects.economy || 0))),
    security: Math.max(0, Math.min(100, state.security + (effects.security || 0))),
    funds: Math.max(0, state.funds + (effects.funds || 0)),
    corruption: Math.max(0, Math.min(100, state.corruption + (effects.corruption || 0))),
    currentEventIndex: state.currentEventIndex + 1,
  };
}
