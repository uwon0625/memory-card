import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from '../../utils/tw';

interface ModalButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

const ModalButton: React.FC<ModalButtonProps> = ({ 
  onPress, 
  title, 
  variant = 'primary' 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-green-500';
      case 'secondary':
        return 'bg-amber-600';
      case 'danger':
        return 'bg-red-500';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <TouchableOpacity 
      style={tw`py-2.5 px-5 rounded-lg min-w-[100px] items-center ${getVariantStyles()}`}
      onPress={onPress}
    >
      <Text style={tw`text-white text-base font-semibold`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ModalButton; 