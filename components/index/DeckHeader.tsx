import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useDeckContext } from '@/providers/DeckContextProvider';

export function DeckHeader() {
  const { selectedDeck } = useDeckContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedDeck?.title ?? 'Your Deck'}</Text>
      <Text style={styles.subtitle}>
        {selectedDeck?.subtitle ?? 'Shuffling cards...'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingBottom: 48,
    paddingTop: 16
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.textPrimary
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.textPrimary
  }
});
