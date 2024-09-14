import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDeckContext } from '@/providers/DeckContextProvider';
import { Colors } from '@/constants/Colors';
import type { Deck } from '@/types/Deck';

interface Props {
  deck: Deck;
}

export function DeckListItem({ deck }: Props) {
  const { selectDeckByTitle } = useDeckContext();

  const handleSelectDeck = () => {
    if (selectDeckByTitle) {
      selectDeckByTitle(deck.title);
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleSelectDeck}>
      <View>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.subtitle}>{deck.subtitle}</Text>
        <Text style={styles.cardCount}>{deck.cards.length} cards</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.foreground,
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: Colors.textBackground,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 2
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textForeground
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textMutedForeground,
    marginBottom: 4
  },
  cardCount: {
    fontSize: 12,
    color: Colors.textMutedForeground,
    fontStyle: 'italic'
  }
});
