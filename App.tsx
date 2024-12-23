import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import MemoryGame from './src/components/MemoryGame';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <MemoryGame />
    </SafeAreaView>
  );
} 