import { useState } from "react";

import { SafeAreaView } from "react-native";
import { DeckHeader } from "@/components/deck/DeckHeader";
import { DeckCardArea } from "@/components/deck/DeckCardArea";
import { DeckControls } from "@/components/deck/DeckControls";

// This can be removed and swapped with a data fetching solution to dynamically load decks
import { MockData } from "@/constants/MockData";

export default function Index() {
  const deck = MockData;
  const [isShowingBack, setIsShowingBack] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isOnAutoplay, setIsOnAutoplay] = useState(false);
  const [secondsInTimer, setSecondsInTimer] = useState(0);

  const handleFlip = () => {
    setIsShowingBack(!isShowingBack);
  };

  const handleAutoplay = () => {
    setIsOnAutoplay(!isOnAutoplay);

    setSecondsInTimer(8);
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
      />
      <DeckControls
        handleFlip={handleFlip}
        isShowingBack={isShowingBack}
        handleAutoplay={handleAutoplay}
        handleShuffle={handleShuffle}
        isOnAutoplay={isOnAutoplay}
        secondsInTimer={secondsInTimer}
        setSecondsInTimer={setSecondsInTimer}
      />
    </SafeAreaView>
  );
}
