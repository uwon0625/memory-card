import React from 'react';
import { View, Text } from 'react-native';
import tw from '../utils/tw';
import Modal from './common/Modal';
import ModalButton from './common/ModalButton';

interface RulesModalProps {
  visible: boolean;
  onClose: () => void;
}

const RulesModal: React.FC<RulesModalProps> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose} title="Game Rules">
      <View style={tw`gap-3`}>
        <Text style={tw`text-lg font-bold text-gray-800 mt-2`}>How to Play:</Text>
        <Text style={tw`text-base text-gray-700 ml-2 leading-5`}>1. Remember card positions in time</Text>
        <Text style={tw`text-base text-gray-700 ml-2 leading-5`}>2. Click cards in any order</Text>
        <Text style={tw`text-base text-gray-700 ml-2 leading-5`}>3. Use Undo to correct mistakes</Text>
        <Text style={tw`text-base text-gray-700 ml-2 leading-5`}>4. All cards must be in ascending order (A→2→3...→10→J→Q→K→Joker)</Text>
        <Text style={tw`text-base text-gray-700 ml-2 leading-5`}>5. Each level adds more cards (Level N has 2N cards)</Text>
        
        <Text style={tw`text-lg font-bold text-gray-800 mt-2`}>Scoring:</Text>
        <Text style={tw`text-base text-gray-700 ml-2 leading-5`}>• Complete level: +10 points</Text>
        <Text style={tw`text-base text-gray-700 ml-2 leading-5`}>• Wrong order: -2 points</Text>
        <Text style={tw`text-base text-gray-700 ml-2 leading-5`}>• Using hint: -1 point</Text>

        <View style={tw`mt-5 items-center`}>
          <ModalButton 
            title="Got it!" 
            variant="primary" 
            onPress={onClose} 
          />
        </View>
      </View>
    </Modal>
  );
};

export default RulesModal; 