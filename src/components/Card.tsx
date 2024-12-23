import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import tw from '../utils/tw';
import { Card as CardType } from '../types';
import { cardImages } from '../constants/cards';

interface CardProps {
  card: CardType;
  isRevealed: boolean;
  onSelect: () => void;
}

const Card: React.FC<CardProps> = ({ card, isRevealed, onSelect }) => {
  const shouldShowFace = isRevealed || card.isSelected || card.isMatched;
  const cardLabel = shouldShowFace ? `${card.value} of ${card.suit}` : 'Card back';
  const cardKey = `${card.value}${card.suit}_${card.id}`;

  const handlePress = () => {
    if (!card.isMatched) {
      onSelect();
    }
  };

  return (
    <TouchableOpacity
      testID={`card-${cardKey}`}
      style={[
        tw`w-[60px] h-[84px] m-1 rounded-lg bg-white shadow`,
        card.isSelected && tw`border-2 border-blue-500`
      ]}
      onPress={handlePress}
      disabled={card.isMatched}
      accessibilityLabel={cardLabel}
    >
      <View style={tw`flex-1 p-0.5`}>
        {shouldShowFace ? (
          <Image
            source={card.image}
            style={tw`w-full h-full rounded-md`}
            accessibilityLabel={cardLabel}
            testID="card-face"
          />
        ) : (
          <Image
            source={cardImages.BACK}
            style={tw`w-full h-full rounded-md`}
            accessibilityLabel="Card back"
            testID="card-back"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card; 