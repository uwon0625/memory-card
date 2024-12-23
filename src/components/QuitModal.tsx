import React from 'react';
import { View, Text } from 'react-native';
import tw from '../utils/tw';
import Modal from './common/Modal';
import ModalButton from './common/ModalButton';

interface QuitModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const QuitModal: React.FC<QuitModalProps> = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal visible={visible} onClose={onClose} title="Quit Game">
      <View style={tw`gap-5`}>
        <Text style={tw`text-base text-gray-700 text-center`}>
          Are you sure you want to quit? Your progress will be lost.
        </Text>
        <View style={tw`flex-row justify-around gap-4`}>
          <ModalButton 
            title="Cancel" 
            variant="secondary" 
            onPress={onClose} 
          />
          <ModalButton 
            title="Quit" 
            variant="danger" 
            onPress={onConfirm} 
          />
        </View>
      </View>
    </Modal>
  );
};

export default QuitModal; 