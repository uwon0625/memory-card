import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import tw from '../utils/tw';
import Card from './Card';
import GameControls from './GameControls';
import { Card as CardType, GameLevel } from '../types';
import { generateCards, getGridConfig } from '../utils';
import HintModal from './HintModal';
import RestartModal from './RestartModal';
import QuitModal from './QuitModal';
import RulesModal from './RulesModal';

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(GameLevel.Beginner1);
  const [selectedCards, setSelectedCards] = useState<CardType[]>([]);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showHintModal, setShowHintModal] = useState(false);
  const [showRestartModal, setShowRestartModal] = useState(false);
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showTimer, setShowTimer] = useState(false);

  // Add back initial game start
  useEffect(() => {
    startNewGame();
  }, []);

  // Start timer and show cards
  const startLevel = useCallback((levelCards: CardType[], newLevel: GameLevel) => {
    setCards(levelCards);
    setSelectedCards([]);
    const initialTime = (2 * newLevel - 1) * 1000;
    setTimeLeft(initialTime);
    setShowTimer(true);
    setIsRevealed(true);
  }, []);

  useEffect(() => {
    if (showTimer) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          const newTime = Math.max(0, prev - 1000);
          if (newTime === 0) {
            setShowTimer(false);
            setIsRevealed(false);
            clearInterval(timer);
          }
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showTimer]);

  const startNewGame = useCallback(() => {
    const newCards = generateCards(getGridConfig(level));
    startLevel(newCards, level);
  }, [level, startLevel]);

  const handleRestart = useCallback(() => {
    const newLevel = GameLevel.Beginner1;
    setLevel(newLevel);
    setScore(0);
    const newCards = generateCards(getGridConfig(newLevel));
    startLevel(newCards, newLevel);
    setShowRestartModal(false);
  }, [startLevel]);

  const handleCardSelect = useCallback((card: CardType) => {
    if (!card.isSelected && !card.isMatched) {
      const newSelectedCards = [...selectedCards, card];
      setSelectedCards(newSelectedCards);
      setCards(prev => prev.map(c => 
        c.id === card.id ? { ...c, isSelected: true } : c
      ));

      // Check order when all cards are selected
      if (newSelectedCards.length === cards.length) {
        const getValue = (value: string): number => {
          switch (value) {
            case 'A': return 1;
            case 'J': return 11;
            case 'Q': return 12;
            case 'K': return 13;
            case 'JOKER': return 14;
            default: return parseInt(value);
          }
        };

        // Check if all selected cards are in ascending order
        const isCorrectOrder = newSelectedCards.every((card, index) => {
          if (index === 0) return true;
          return getValue(card.value) > getValue(newSelectedCards[index - 1].value);
        });

        setTimeout(() => {
          if (isCorrectOrder) {
            // Progress to next level
            setScore(prev => prev + getGridConfig(level).pointsPerMatch);
            const nextLevel = (level + 1) as GameLevel;
            
            // Check if next level exists in GridConfig
            if (getGridConfig(nextLevel)) {
              setLevel(nextLevel);
              const newLevelCards = generateCards(getGridConfig(nextLevel));
              startLevel(newLevelCards, nextLevel);
            } else {
              // Handle game completion
              console.log('Game completed!');
              // You might want to show a completion modal or handle it differently
            }
          } else {
            // Wrong order - start new game at current level
            setScore(prev => Math.max(0, prev - 2));
            const newCards = generateCards(getGridConfig(level));
            startLevel(newCards, level);
          }
        }, 1000);
      }
    }
  }, [cards, selectedCards, level, startLevel]);

  const handleUndo = useCallback(() => {
    setSelectedCards(prev => prev.slice(0, -1));
    setCards(prev => prev.map(card => 
      card.isSelected && !card.isMatched ? { ...card, isSelected: false } : card
    ));
  }, []);

  const handleHint = useCallback(() => {
    setShowHintModal(true);
  }, []);

  const handleReset = useCallback(() => {
    setShowRestartModal(true);
  }, []);

  const handleQuit = useCallback(() => {
    setShowQuitModal(true);
  }, []);

  const handleRules = useCallback(() => {
    setShowRulesModal(true);
  }, []);

  const getRemainingCards = useCallback(() => {
    return cards.filter(card => !card.isMatched);
  }, [cards]);

  // Group cards into rows based on gridConfig
  const cardRows = cards.reduce((rows: CardType[][], card, index) => {
    const config = getGridConfig(level);
    let currentRow = 0;
    let cardsCount = 0;
    
    // Find which row this card belongs to
    for (let i = 0; i < config.rowCards.length; i++) {
      if (index >= cardsCount && index < cardsCount + config.rowCards[i]) {
        currentRow = i;
        break;
      }
      cardsCount += config.rowCards[i];
    }
    
    if (!rows[currentRow]) {
      rows[currentRow] = [];
    }
    rows[currentRow].push(card);
    return rows;
  }, []);

  return (
    <View testID="game-container" style={tw`flex-1 bg-gray-100 pb-[120px]`}>
      <View testID="cards-container" style={tw`flex-1 flex-col justify-center items-center p-2.5 max-h-[85%] w-full gap-5`}>
        {cardRows.map((row, rowIndex) => (
          <View 
            key={`row-${rowIndex}`} 
            style={tw`flex-row justify-center items-center gap-2.5 px-2.5`}
          >
            {row.map((card) => (
              <Card
                key={card.id}
                card={card}
                isRevealed={isRevealed || selectedCards.includes(card)}
                onSelect={() => handleCardSelect(card)}
              />
            ))}
          </View>
        ))}
      </View>

      <GameControls
        score={score}
        level={level}
        timeLeft={timeLeft}
        showTimer={showTimer}
        onNewGame={startNewGame}
        onReset={handleReset}
        onUndo={handleUndo}
        onQuit={handleQuit}
        onHint={handleHint}
        onRules={handleRules}
      />

      <HintModal 
        visible={showHintModal}
        onClose={() => setShowHintModal(false)}
        remainingCards={getRemainingCards()}
      />

      <RestartModal
        visible={showRestartModal}
        onClose={() => setShowRestartModal(false)}
        onConfirm={handleRestart}
      />

      <QuitModal
        visible={showQuitModal}
        onClose={() => setShowQuitModal(false)}
        onConfirm={() => {
          // Implement quit logic
          setShowQuitModal(false);
        }}
      />

      <RulesModal
        visible={showRulesModal}
        onClose={() => setShowRulesModal(false)}
      />
    </View>
  );
};

export default MemoryGame;
