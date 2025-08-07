export type GameState = {
  approval: number;
  economy: number;
  security: number;
  funds: number;
  corruption: number;
  currentEventIndex: number;
};

export const initialGameState: GameState = {
  approval: 60,
  economy: 50,
  security: 50,
  funds: 100,
  corruption: 20,
  currentEventIndex: 0,
};
