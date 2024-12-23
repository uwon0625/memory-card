import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
export const CARD_RATIO = 1.4;
export const CARD_WIDTH = Math.min(windowWidth / 4 - 16, 80); // Maximum of 4 cards per row
export const CARD_HEIGHT = CARD_WIDTH * CARD_RATIO; 