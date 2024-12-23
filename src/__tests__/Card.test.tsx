import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Card from '../components/Card';

describe('Card', () => {
  const mockCard = {
    id: '1',
    value: 'A',
    suit: 'hearts',
    image: 1, // Mock image resource
    isRed: true,
    isSelected: false,
    isMatched: false,
  };

  const mockOnSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByTestId } = render(
      <Card 
        card={mockCard} 
        isRevealed={false} 
        onSelect={mockOnSelect} 
      />
    );

    expect(getByTestId(`card-A${mockCard.suit}_${mockCard.id}`)).toBeTruthy();
  });

  it('calls onSelect when pressed and not matched', () => {
    const { getByTestId } = render(
      <Card 
        card={mockCard} 
        isRevealed={false} 
        onSelect={mockOnSelect} 
      />
    );

    fireEvent.press(getByTestId(`card-A${mockCard.suit}_${mockCard.id}`));
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });

  it('shows card back when not revealed', () => {
    const { getByTestId } = render(
      <Card 
        card={mockCard} 
        isRevealed={false} 
        onSelect={mockOnSelect} 
      />
    );

    expect(getByTestId('card-back')).toBeTruthy();
  });

  it('shows card face when revealed', () => {
    const { getByTestId } = render(
      <Card 
        card={mockCard} 
        isRevealed={true} 
        onSelect={mockOnSelect} 
      />
    );

    expect(getByTestId('card-face')).toBeTruthy();
  });

  it('shows card face when selected', () => {
    const selectedCard = { ...mockCard, isSelected: true };
    const { getByTestId } = render(
      <Card 
        card={selectedCard} 
        isRevealed={false} 
        onSelect={mockOnSelect} 
      />
    );

    expect(getByTestId('card-face')).toBeTruthy();
  });

  it('shows card face when matched', () => {
    const matchedCard = { ...mockCard, isMatched: true };
    const { getByTestId } = render(
      <Card 
        card={matchedCard} 
        isRevealed={false} 
        onSelect={mockOnSelect} 
      />
    );

    expect(getByTestId('card-face')).toBeTruthy();
  });

  it('does not call onSelect when matched', () => {
    const matchedCard = { ...mockCard, isMatched: true };
    const { getByTestId } = render(
      <Card 
        card={matchedCard} 
        isRevealed={false} 
        onSelect={mockOnSelect} 
      />
    );

    const card = getByTestId(`card-A${mockCard.suit}_${mockCard.id}`);
    expect(card.props.disabled).toBe(true);
    fireEvent.press(card);
    expect(mockOnSelect).not.toHaveBeenCalled();
  });
}); 