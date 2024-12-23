import '@testing-library/jest-native/extend-expect';

// Mock expo-linear-gradient
jest.mock('expo-linear-gradient', () => ({
  LinearGradient: ({ children, style }) => children
}));

// Mock React Native components
jest.mock('react-native', () => ({
  Platform: {
    OS: 'ios',
    select: jest.fn((obj) => obj.ios),
  },
  StyleSheet: {
    create: jest.fn((styles) => styles),
  },
  Dimensions: {
    get: jest.fn(() => ({
      width: 375,
      height: 667,
      scale: 1,
      fontScale: 1,
    })),
  },
  Modal: ({ children, visible, onRequestClose }) => 
    visible ? children : null,
  View: 'View',
  Text: 'Text',
  TouchableOpacity: 'TouchableOpacity',
  Image: 'Image',
  ScrollView: 'ScrollView',
}));