import { colors } from 'src/styles';

export const getTitleVariants = (cardColor: string, textColor: string) => ({
  focused: { color: cardColor },
  lostFocus: { color: textColor },
});

export const containerVariants = {
  focused: {
    height: '100%',
  },
  lostFocus: {
    height: '0%',
  },
};

export const bodyTextVariants = {
  focused: {
    opacity: 1,
    transition: {
      delay: 0.8,
    },
  },
  lostFocus: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
