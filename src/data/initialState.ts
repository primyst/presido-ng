import { GameState } from "../types";

export const initialState: GameState = {
  money: 1000,
  resources: {
    food: 100,
    water: 100,
    medicine: 50,
    energy: 75,
  },
  turn: 1,
  history: [],
};
