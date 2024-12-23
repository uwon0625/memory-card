import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GameControls from '../components/GameControls';
import { GameLevel } from '../types';

describe('GameControls', () => {
  const mockProps = {
    score: 100,
    level: GameLevel.Beginner1,
    timeLeft: 5000,
    showTimer: true,
    onNewGame: jest.fn(),
    onReset: jest.fn(),
    onUndo: jest.fn(),
    onQuit: jest.fn(),
    onHint: jest.fn(),
    onRules: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders game statistics', () => {
    const { getByText } = render(<GameControls {...mockProps} />);

    expect(getByText('100')).toBeTruthy(); // Score value
    expect(getByText('1')).toBeTruthy(); // Level value
  });

  it('shows timer when showTimer is true', () => {
    const { getByText } = render(<GameControls {...mockProps} />);
    expect(getByText('5')).toBeTruthy(); // 5 seconds
  });

  it('hides timer when showTimer is false', () => {
    const { queryByText } = render(<GameControls {...mockProps} showTimer={false} />);
    expect(queryByText('5')).toBeNull();
  });

  it('calls onNewGame when New Game button is pressed', () => {
    const { getByText } = render(<GameControls {...mockProps} />);
    fireEvent.press(getByText('New Game'));
    expect(mockProps.onNewGame).toHaveBeenCalled();
  });

  it('calls onUndo when Undo button is pressed', () => {
    const { getByText } = render(<GameControls {...mockProps} />);
    fireEvent.press(getByText('Undo'));
    expect(mockProps.onUndo).toHaveBeenCalled();
  });

  it('calls onHint when Hint button is pressed', () => {
    const { getByText } = render(<GameControls {...mockProps} />);
    fireEvent.press(getByText('Hint'));
    expect(mockProps.onHint).toHaveBeenCalled();
  });

  it('calls onReset when Restart button is pressed', () => {
    const { getByText } = render(<GameControls {...mockProps} />);
    fireEvent.press(getByText('Restart'));
    expect(mockProps.onReset).toHaveBeenCalled();
  });

  it('calls onRules when Rules button is pressed', () => {
    const { getByText } = render(<GameControls {...mockProps} />);
    fireEvent.press(getByText('Rules'));
    expect(mockProps.onRules).toHaveBeenCalled();
  });

  it('calls onQuit when Quit button is pressed', () => {
    const { getByText } = render(<GameControls {...mockProps} />);
    fireEvent.press(getByText('Quit'));
    expect(mockProps.onQuit).toHaveBeenCalled();
  });
}); 