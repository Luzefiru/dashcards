import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { DeckListItem } from '@/components/decks/DeckListItem';
import { useDeckContext } from '@/providers/DeckContextProvider';

export default function Credits() {
  const { allDecks } = useDeckContext();

  if (!allDecks) {
    return (
      <SafeAreaView>
        <Text>No decks found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={allDecks}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <DeckListItem deck={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
});
