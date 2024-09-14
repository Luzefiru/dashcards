import { useState } from 'react';

import { SafeAreaView } from 'react-native';
import { DeckHeader } from '@/components/index/DeckHeader';
import { DeckCardArea } from '@/components/index/DeckCardArea';
import { DeckControls } from '@/components/index/DeckControls';
import { useDeckContext } from '@/providers/DeckContextProvider';
import { Loading } from '@/components/ui/Loading';

export default function Index() {
  const deck = useDeckContext().selectedDeck;
  const [isShowingBack, setIsShowingBack] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isOnAutoplay, setIsOnAutoplay] = useState(false);
  const [secondsInTimer, setSecondsInTimer] = useState(-1);

  if (deck === null) {
    return <Loading />;
  }

  const moveToNextCard = () => {
    if (currentCardIndex < deck.cards.length - 1) {
      setCurrentCardIndex((prev) => prev + 1);
    } else {
      setCurrentCardIndex(0);
    }
  };

  const handleFlip = () => {
    setIsShowingBack(!isShowingBack);
  };

  const handleAutoplay = () => {
    setIsOnAutoplay(!isOnAutoplay);

    if (!isOnAutoplay) {
      setSecondsInTimer(8);
    } else {
      setSecondsInTimer(-1);
    }
  };

  const handleShuffle = () => {
    setCurrentCardIndex(Math.floor(Math.random() * deck.cards.length));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DeckHeader title={deck.title} subtitle={deck.subtitle} />
      <DeckCardArea
        cards={deck.cards}
        currentCardIndex={currentCardIndex}
        isShowingBack={isShowingBack}
        handleFlip={handleFlip}
        setCurrentCardIndex={setCurrentCardIndex}
      />
      <DeckControls
        handleFlip={handleFlip}
        isShowingBack={isShowingBack}
        handleAutoplay={handleAutoplay}
        handleShuffle={handleShuffle}
        moveToNextCard={moveToNextCard}
        isOnAutoplay={isOnAutoplay}
        secondsInTimer={secondsInTimer}
        setSecondsInTimer={setSecondsInTimer}
      />
    </SafeAreaView>
  );
}
