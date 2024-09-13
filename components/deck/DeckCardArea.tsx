import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import type { Card } from '@/types/Card';

interface Props {
  cards: Card[];
  currentCardIndex: number;
}

export function DeckCardArea({ cards, currentCardIndex }: Props) {
  const currentCard = cards[currentCardIndex];

  return (
    <View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>{currentCard.front}</Text>
      </View>
      <View style={styles.curvedBackground} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 32,
    paddingVertical: 128,
    marginHorizontal: 32,
    borderRadius: 16,
    backgroundColor: Colors.foreground,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1C133C',
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 10,
    shadowRadius: 12,
    elevation: 3,
  },

  cardText: {
    fontSize: 20,
    textAlign: 'center',
  },

  curvedBackground: {
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    height: 160,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: -10,
  },
});
