import { SafeAreaView, View } from 'react-native';
import { DeckHeader } from '@/components/deck/DeckHeader';
import { DeckCardArea } from '@/components/deck/DeckCardArea';
import { DeckControls } from '@/components/deck/DeckControls';

// This can be removed and swapped with a data fetching solution to dynamically load decks
import { MockData } from '@/constants/MockData';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DeckHeader title={MockData.title} subtitle={MockData.subtitle} />
      <DeckCardArea cards={MockData.cards} currentCardIndex={0} />
      <DeckControls />
    </SafeAreaView>
  );
}
