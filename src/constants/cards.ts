type CardValue = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
type CardSuit = 'HEARTS' | 'DIAMONDS' | 'CLUBS' | 'SPADES';

export const CARD_VALUES: CardValue[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
export const CARD_SUITS: CardSuit[] = ['HEARTS', 'DIAMONDS', 'CLUBS', 'SPADES'];

export const cardImages = {
  BACK: require('../../assets/cards/faces/BACK.png'),
  RJ: require('../../assets/cards/faces/RJ.png'),  // Red Joker
  BJ: require('../../assets/cards/faces/BJ.png'),  // Black Joker
  
  // Hearts
  A_HEARTS: require('../../assets/cards/faces/AH.png'),
  '2_HEARTS': require('../../assets/cards/faces/2H.png'),
  '3_HEARTS': require('../../assets/cards/faces/3H.png'),
  '4_HEARTS': require('../../assets/cards/faces/4H.png'),
  '5_HEARTS': require('../../assets/cards/faces/5H.png'),
  '6_HEARTS': require('../../assets/cards/faces/6H.png'),
  '7_HEARTS': require('../../assets/cards/faces/7H.png'),
  '8_HEARTS': require('../../assets/cards/faces/8H.png'),
  '9_HEARTS': require('../../assets/cards/faces/9H.png'),
  '10_HEARTS': require('../../assets/cards/faces/10H.png'),
  J_HEARTS: require('../../assets/cards/faces/JH.png'),
  Q_HEARTS: require('../../assets/cards/faces/QH.png'),
  K_HEARTS: require('../../assets/cards/faces/KH.png'),
  
  // Diamonds
  A_DIAMONDS: require('../../assets/cards/faces/AD.png'),
  '2_DIAMONDS': require('../../assets/cards/faces/2D.png'),
  '3_DIAMONDS': require('../../assets/cards/faces/3D.png'),
  '4_DIAMONDS': require('../../assets/cards/faces/4D.png'),
  '5_DIAMONDS': require('../../assets/cards/faces/5D.png'),
  '6_DIAMONDS': require('../../assets/cards/faces/6D.png'),
  '7_DIAMONDS': require('../../assets/cards/faces/7D.png'),
  '8_DIAMONDS': require('../../assets/cards/faces/8D.png'),
  '9_DIAMONDS': require('../../assets/cards/faces/9D.png'),
  '10_DIAMONDS': require('../../assets/cards/faces/10D.png'),
  J_DIAMONDS: require('../../assets/cards/faces/JD.png'),
  Q_DIAMONDS: require('../../assets/cards/faces/QD.png'),
  K_DIAMONDS: require('../../assets/cards/faces/KD.png'),
  
  // Clubs
  A_CLUBS: require('../../assets/cards/faces/AC.png'),
  '2_CLUBS': require('../../assets/cards/faces/2C.png'),
  '3_CLUBS': require('../../assets/cards/faces/3C.png'),
  '4_CLUBS': require('../../assets/cards/faces/4C.png'),
  '5_CLUBS': require('../../assets/cards/faces/5C.png'),
  '6_CLUBS': require('../../assets/cards/faces/6C.png'),
  '7_CLUBS': require('../../assets/cards/faces/7C.png'),
  '8_CLUBS': require('../../assets/cards/faces/8C.png'),
  '9_CLUBS': require('../../assets/cards/faces/9C.png'),
  '10_CLUBS': require('../../assets/cards/faces/10C.png'),
  J_CLUBS: require('../../assets/cards/faces/JC.png'),
  Q_CLUBS: require('../../assets/cards/faces/QC.png'),
  K_CLUBS: require('../../assets/cards/faces/KC.png'),
  
  // Spades
  A_SPADES: require('../../assets/cards/faces/AS.png'),
  '2_SPADES': require('../../assets/cards/faces/2S.png'),
  '3_SPADES': require('../../assets/cards/faces/3S.png'),
  '4_SPADES': require('../../assets/cards/faces/4S.png'),
  '5_SPADES': require('../../assets/cards/faces/5S.png'),
  '6_SPADES': require('../../assets/cards/faces/6S.png'),
  '7_SPADES': require('../../assets/cards/faces/7S.png'),
  '8_SPADES': require('../../assets/cards/faces/8S.png'),
  '9_SPADES': require('../../assets/cards/faces/9S.png'),
  '10_SPADES': require('../../assets/cards/faces/10S.png'),
  J_SPADES: require('../../assets/cards/faces/JS.png'),
  Q_SPADES: require('../../assets/cards/faces/QS.png'),
  K_SPADES: require('../../assets/cards/faces/KS.png'),
} as const;