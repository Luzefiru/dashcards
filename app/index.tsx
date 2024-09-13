import { useState } from 'react';

import { SafeAreaView } from 'react-native';
import { DeckHeader } from '@/components/deck/DeckHeader';
import { DeckCardArea } from '@/components/deck/DeckCardArea';
import { DeckControls } from '@/components/deck/DeckControls';

// This can be removed and swapped with a data fetching solution to dynamically load decks
import { MockData } from '@/constants/MockData';

export default function Index() {
  const deck = MockData;
  const [isShowingBack, setIsShowingBack] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleFlip = () => {
    setIsShowingBack(!isShowingBack);
  };

  const handlePrevCard = () => {
    if (currentCardIndex === 0) {
      setCurrentCardIndex(0);
    } else {
      setCurrentCardIndex((prev) => prev - 1);
    }
    setIsShowingBack(false);
  };

  const handleNextCard = () => {
    if (currentCardIndex === deck.cards.length - 1) {
      setCurrentCardIndex(0);
    } else {
      setCurrentCardIndex((prev) => prev + 1);
    }
    setIsShowingBack(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DeckHeader title={deck.title} subtitle={deck.subtitle} />
      <DeckCardArea
        cards={deck.cards}
        currentCardIndex={currentCardIndex}
        isShowingBack={isShowingBack}
      />
      <DeckControls
        handleFlip={handleFlip}
        handlePrevCard={handlePrevCard}
        handleNextCard={handleNextCard}
        isShowingBack={isShowingBack}
      />
    </SafeAreaView>
  );
}
