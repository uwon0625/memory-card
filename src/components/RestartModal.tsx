import React from 'react';
import { View, Text } from 'react-native';
import tw from '../utils/tw';
import Modal from './common/Modal';
import ModalButton from './common/ModalButton';

interface RestartModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const RestartModal: React.FC<RestartModalProps> = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal visible={visible} onClose={onClose} title="Restart Game">
      <View style={tw`gap-5`}>
        <Text style={tw`text-base text-gray-700 text-center`}>
          Are you sure you want to restart? Your current progress will be lost.
        </Text>
        <View style={tw`flex-row justify-around gap-4`}>
          <ModalButton 
            title="Cancel" 
            variant="secondary" 
            onPress={onClose} 
          />
          <ModalButton 
            title="Restart" 
            variant="danger" 
            onPress={onConfirm} 
          />
        </View>
      </View>
    </Modal>
  );
};

export default RestartModal; 