import React from 'react';
import { render, fireEvent } from '../test-utils';
import MemoryGame from '../components/MemoryGame';
import { GameLevel } from '../types';

jest.mock('../components/Card', () => 'Card');
jest.mock('../components/GameControls', () => 'GameControls');
jest.mock('../components/HintModal', () => 'HintModal');
jest.mock('../components/RestartModal', () => 'RestartModal');
jest.mock('../components/QuitModal', () => 'QuitModal');
jest.mock('../components/RulesModal', () => 'RulesModal');

describe('MemoryGame', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<MemoryGame />);
    expect(getByTestId('game-container')).toBeTruthy();
  });

  it('starts a new game on mount', () => {
    const { getByTestId } = render(<MemoryGame />);
    expect(getByTestId('cards-container')).toBeTruthy();
  });

  // Add more tests as needed
}); 