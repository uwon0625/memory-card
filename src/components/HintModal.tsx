import React from 'react';
import { View, Text } from 'react-native';
import tw from '../utils/tw';
import Modal from './common/Modal';
import ModalButton from './common/ModalButton';
import { Card as CardType, Suit } from '../types';

interface HintModalProps {
  visible: boolean;
  onClose: () => void;
  remainingCards: CardType[];
}

const getSuitSymbol = (suit: Suit): string => {
  switch (suit) {
    case 'hearts': return '♥';
    case 'diamonds': return '♦';
    case 'clubs': return '♣';
    case 'spades': return '♠';
  }
  return '♥';
};

const HintModal: React.FC<HintModalProps> = ({ visible, onClose, remainingCards }) => {
  const cardList = remainingCards.length > 0 
    ? remainingCards
        .map(card => {
          const suitSymbol = getSuitSymbol(card.suit);
          const textColor = card.isRed ? 'text-red-600' : 'text-gray-900';
          return (
            <Text key={card.id}>
              <Text>{card.value}</Text>
              <Text style={tw`${textColor}`}>{suitSymbol}</Text>
            </Text>
          );
        })
        .reduce((prev, curr, i) => (
          <>
            {prev}
            {i > 0 && <Text key={`separator-${i}`}>, </Text>}
            {curr}
          </>
        ))
    : <Text>No cards remaining!</Text>;

  return (
    <Modal visible={visible} onClose={onClose} title="Remaining Cards">
      <View style={tw`gap-5`}>
        <Text style={tw`text-base text-gray-800 text-center leading-6`}>
          {cardList}
        </Text>
        <View style={tw`items-center mt-2`}>
          <ModalButton 
            title="Close" 
            variant="primary" 
            onPress={onClose} 
          />
        </View>
      </View>
    </Modal>
  );
};

export default HintModal; 