export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades' | 'red' | 'black';
export type Value = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'JOKER';

export type CardImageKey = 
  | 'BACK'
  | 'RJ' | 'BJ'  // Add Joker image keys
  | 'A_HEARTS' | '2_HEARTS' | '3_HEARTS' | '4_HEARTS' | '5_HEARTS' | '6_HEARTS'
  | 'A_DIAMONDS' | '2_DIAMONDS' | '3_DIAMONDS'
  // Add more as needed

export interface CardFace {
  value: Value;
  suit: Suit;
  image: number;
  isRed: boolean;
}

export interface Card extends CardFace {
  id: string;
  isSelected: boolean;
  isMatched: boolean;
}

export enum GameLevel {
  Beginner1 = 1,
  Beginner2 = 2,
  Beginner3 = 3,
  Intermediate1 = 4,
  Intermediate2 = 5,
  Expert1 = 6,
  Expert2 = 7,
  Expert3 = 8,
  Expert4 = 9,
  // Add more levels if needed
}

export interface GridConfig {
  rows: number;
  cols: number;
  revealTime: number;
  totalCards: number;
  pointsPerMatch: number;
  requiresColorMatch: boolean;
  requiresPairs: boolean;
  rowCards: number[];
}

export interface GameState {
  score: number;
  level: GameLevel;
  isRevealed: boolean;
  selectedCards: Card[];
  matchedCards: Card[];
  gameStartTime: number | null;
  isGameActive: boolean;
  timeExceeded: boolean;
}

export interface GameStats {
  highScore: number;
  averageTime: number;
  accuracy: number;
}