import { SafeAreaView } from 'react-native';
import { DeckHeader } from '@/components/index/DeckHeader';
import { DeckCardArea } from '@/components/index/DeckCardArea';
import { DeckControls } from '@/components/index/DeckControls';
import { useDeckContext } from '@/providers/DeckContextProvider';
import { Loading } from '@/components/ui/Loading';

export default function Index() {
  const deck = useDeckContext().selectedDeck;

  if (deck === null) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DeckHeader />
      <DeckCardArea />
      <DeckControls />
    </SafeAreaView>
  );
}
