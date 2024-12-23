import React from 'react';
import { Modal as RNModal, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from '../../utils/tw';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose, title, children }) => {
  return (
    <RNModal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={tw`flex-1 bg-black/50 justify-center items-center`}>
        <LinearGradient
          colors={['#ffffff', '#f8f9fa', '#e9ecef']}
          style={tw`w-[85%] max-w-[400px] rounded-2xl shadow-lg overflow-hidden`}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={tw`p-4 border-b border-black/10 items-center bg-white/70`}>
            <Text style={tw`text-xl font-bold text-gray-800 text-center`}>
              {title}
            </Text>
          </View>
          <View style={tw`p-4`}>
            {children}
          </View>
        </LinearGradient>
      </View>
    </RNModal>
  );
};

export default Modal; 