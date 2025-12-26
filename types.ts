export type TicketData = {
  id: number;
  numbers: number[];
  type: number; // 7 or 9 numbers
  group: string;
};

export enum GameMode {
  LIVE = 'LIVE',
  MANUAL = 'MANUAL',
  BINGO = 'BINGO'
}

export interface MatchResult {
  matches: number;
  isQuadra: boolean;
  isQuina: boolean;
  isSena: boolean;
}