import { SafeAreaView, Text } from 'react-native';

export default function Credits() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>More decks coming soon...</Text>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    paddingVertical: 16,
    paddingHorizontal: 32
  }
};
