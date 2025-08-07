import { GameState } from "../types/GameState";
import { EventEffect } from "../types/Event";

export function applyEffects(state: GameState, effects: EventEffect[]): GameState {
  let newState = { ...state };

  for (const effect of effects) {
    switch (effect.type) {
      case "publicApproval":
        newState.publicApproval = Math.max(0, Math.min(100, newState.publicApproval + effect.value));
        break;
      case "economy":
        newState.economy = Math.max(0, Math.min(100, newState.economy + effect.value));
        break;
      case "corruption":
        newState.corruption = Math.max(0, Math.min(100, newState.corruption + effect.value));
        break;
      case "security":
        newState.security = Math.max(0, Math.min(100, newState.security + effect.value));
        break;
      case "funds":
        newState.resources.funds = Math.max(0, newState.resources.funds + effect.value);
        break;
      case "oil":
        newState.resources.oil = Math.max(0, newState.resources.oil + effect.value);
        break;
      default:
        break;
    }
  }

  return newState;
}
