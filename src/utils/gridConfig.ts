import { GameLevel, GridConfig } from '../types';

export const getGridConfig = (level: GameLevel): GridConfig => {
  // Calculate cards and time based on level number
  const totalCards = 2 * level;
  const revealTime = (2 * level - 1) * 1000;

  switch (level) {
    case GameLevel.Beginner1:
      return {
        rows: 1,
        cols: 2,
        revealTime,
        totalCards,
        pointsPerMatch: 10,
        requiresColorMatch: false,
        requiresPairs: true,
        rowCards: [2],
      };
    case GameLevel.Beginner2:
      return {
        rows: 1,
        cols: 4,
        revealTime,
        totalCards,
        pointsPerMatch: 15,
        requiresColorMatch: false,
        requiresPairs: true,
        rowCards: [4],
      };
    case GameLevel.Beginner3:
      return {
        rows: 2,
        cols: 3,
        revealTime,
        totalCards,
        pointsPerMatch: 20,
        requiresColorMatch: false,
        requiresPairs: true,
        rowCards: [3, 3],
      };
    case GameLevel.Intermediate1:
      return {
        rows: 2,
        cols: 4,
        revealTime,
        totalCards,
        pointsPerMatch: 25,
        requiresColorMatch: false,
        requiresPairs: true,
        rowCards: [4, 4],
      };
    case GameLevel.Intermediate2:
      return {
        rows: 3,
        cols: 4,
        revealTime,
        totalCards,
        pointsPerMatch: 30,
        requiresColorMatch: false,
        requiresPairs: true,
        rowCards: [3, 4, 3],
      };
    case GameLevel.Expert1:
      return {
        rows: 3,
        cols: 4,
        revealTime: 1000,
        totalCards: 12,
        pointsPerMatch: 35,
        requiresColorMatch: true,
        requiresPairs: true,
        rowCards: [4, 4, 4],
      };
    case GameLevel.Expert2:
      return {
        rows: 4,
        cols: 4,
        revealTime: 800,
        totalCards: 14,
        pointsPerMatch: 40,
        requiresColorMatch: true,
        requiresPairs: true,
        rowCards: [3, 4, 4, 3],
      };
    case GameLevel.Expert3:
      return {
        rows: 4,
        cols: 4,
        revealTime: 600,
        totalCards: 16,
        pointsPerMatch: 45,
        requiresColorMatch: true,
        requiresPairs: true,
        rowCards: [4, 4, 4, 4],
      };
    case GameLevel.Expert4:
      return {
        rows: 5,
        cols: 4,
        revealTime: 500,
        totalCards: 18,
        pointsPerMatch: 50,
        requiresColorMatch: true,
        requiresPairs: true,
        rowCards: [3, 4, 4, 4, 3],
      };
    default:
      return {
        rows: 1,
        cols: 2,
        revealTime: 2000,
        totalCards: 2,
        pointsPerMatch: 10,
        requiresColorMatch: false,
        requiresPairs: true,
        rowCards: [2],
      };
  }
}; 