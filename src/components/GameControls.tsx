import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from '../utils/tw';
import { GameLevel } from '../types';

interface GameControlsProps {
  score: number;
  level: GameLevel;
  timeLeft: number;
  showTimer: boolean;
  onNewGame: () => void;
  onReset: () => void;
  onUndo: () => void;
  onQuit: () => void;
  onHint: () => void;
  onRules: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({ 
  score, 
  level, 
  timeLeft,
  showTimer,
  onNewGame, 
  onReset,
  onUndo,
  onQuit,
  onHint,
  onRules 
}) => {
  return (
    <View style={tw`w-full absolute bottom-0 pb-3 px-2.5 bg-white/90 rounded-t-2xl shadow-lg items-center self-center max-w-[500px] mx-auto pt-3 gap-2`}>
      {showTimer && (
        <View style={tw`absolute -top-12 left-4 w-10 h-10 rounded-full bg-white justify-center items-center shadow`}>
          <Text style={tw`text-base font-bold text-gray-800`}>
            {Math.ceil(timeLeft / 1000)}
          </Text>
        </View>
      )}
      
      <View style={tw`w-full max-w-[400px] flex-row justify-center px-4 gap-2 mb-1`}>
        <TouchableOpacity 
          style={tw`py-1 px-2 rounded-lg flex-1 items-center bg-green-500`}
          onPress={onNewGame}
        >
          <Text style={tw`text-white text-sm font-bold`}>New Game</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={tw`py-1 px-2 rounded-lg flex-1 items-center bg-gray-600`}
          onPress={onUndo}
        >
          <Text style={tw`text-white text-sm font-bold`}>Undo</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={tw`py-1 px-2 rounded-lg flex-1 items-center bg-blue-500`}
          onPress={onHint}
        >
          <Text style={tw`text-white text-sm font-bold`}>Hint</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`w-full max-w-[400px] flex-row justify-around py-1.5 border-t border-b border-gray-200 my-1 bg-gray-50`}>
        <View style={tw`flex-row items-center px-3`}>
          <Text style={tw`text-base text-gray-600 font-semibold tracking-wide`}>
            SCORE: <Text style={tw`text-lg font-bold text-blue-500 ml-1`}>{score}</Text>
          </Text>
        </View>
        <View style={tw`flex-row items-center px-3`}>
          <Text style={tw`text-base text-gray-600 font-semibold tracking-wide`}>
            LEVEL: <Text style={tw`text-lg font-bold text-blue-500 ml-1`}>{level}</Text>
          </Text>
        </View>
      </View>

      <View style={tw`w-full max-w-[400px] flex-row justify-center px-4 gap-2 mt-2`}>
        <TouchableOpacity 
          style={tw`py-1 px-2 rounded-lg flex-1 items-center bg-amber-500`}
          onPress={onReset}
        >
          <Text style={tw`text-white text-sm font-bold`}>Restart</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={tw`py-1 px-2 rounded-lg flex-1 items-center bg-purple-500`}
          onPress={onRules}
        >
          <Text style={tw`text-white text-sm font-bold`}>Rules</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={tw`py-1 px-2 rounded-lg flex-1 items-center bg-red-500`}
          onPress={onQuit}
        >
          <Text style={tw`text-white text-sm font-bold`}>Quit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameControls; 