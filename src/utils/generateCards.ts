import { Card, GridConfig, Value, Suit } from '../types';
import { CARD_VALUES, CARD_SUITS } from '../constants/cards';
import { cardImages } from '../constants/cards';

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const generateCards = (config: GridConfig): Card[] => {
  // Create array of all possible cards (52 regular cards + 2 Jokers)
  const allCards: Array<{ value: string; suit: string }> = [];
  
  // Generate standard 52 cards
  CARD_VALUES.forEach(value => {
    CARD_SUITS.forEach(suit => {
      allCards.push({ value, suit });
    });
  });

  // Add Red and Black Jokers
  allCards.push(
    { value: 'JOKER', suit: 'RED' },
    { value: 'JOKER', suit: 'BLACK' }
  );

  // Shuffle all 54 cards and take required number
  const shuffledCards = shuffleArray(allCards);
  const selectedCards = shuffledCards.slice(0, config.totalCards);

  // Create card objects
  return selectedCards.map(card => {
    const imageKey = card.value === 'JOKER' 
      ? `${card.suit === 'RED' ? 'RJ' : 'BJ'}` as keyof typeof cardImages
      : `${card.value}_${card.suit}` as keyof typeof cardImages;

    return {
      id: `${card.value}_${card.suit}`,
      value: card.value as Value,
      suit: card.suit.toLowerCase() as Suit,
      image: cardImages[imageKey],
      isRed: card.suit === 'HEARTS' || card.suit === 'DIAMONDS' || card.suit === 'RED',
      isSelected: false,
      isMatched: false,
    };
  });
}; 