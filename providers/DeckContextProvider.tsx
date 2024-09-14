import React, { createContext, useContext, useState } from 'react';
import { AllDecks } from '@/constants/AllDecks';
import { shuffleArray } from '@/utils/shuffleArray';
import Toast from 'react-native-toast-message';
import type { Deck } from '@/types/Deck';

interface DeckContext {
  allDecks: Deck[] | null;
  selectedDeck: Deck | null;
  selectDeckByTitle: ((d: string) => void) | null;
  isShowingBack: boolean;
  setIsShowingBack: React.Dispatch<React.SetStateAction<boolean>>;
  currentCardIndex: number;
  setCurrentCardIndex: React.Dispatch<React.SetStateAction<number>>;
  isOnAutoplay: boolean;
  setIsOnAutoplay: React.Dispatch<React.SetStateAction<boolean>>;
  secondsInTimer: number;
  setSecondsInTimer: React.Dispatch<React.SetStateAction<number>>;
  moveToNextCard: () => void;
  handleFlip: () => void;
  handleAutoplay: () => void;
  handleShuffle: () => void;
}

const Context = createContext<DeckContext>({
  allDecks: null,
  selectedDeck: null,
  selectDeckByTitle: null,
  isShowingBack: false,
  setIsShowingBack: () => {},
  currentCardIndex: 0,
  setCurrentCardIndex: () => {},
  isOnAutoplay: false,
  setIsOnAutoplay: () => {},
  secondsInTimer: -1,
  setSecondsInTimer: () => {},
  moveToNextCard: () => {},
  handleFlip: () => {},
  handleAutoplay: () => {},
  handleShuffle: () => {}
});

export function DeckContextProvider({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(AllDecks[0]);
  const [isShowingBack, setIsShowingBack] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isOnAutoplay, setIsOnAutoplay] = useState(false);
  const [secondsInTimer, setSecondsInTimer] = useState(-1);

  function selectDeckByTitle(title: string) {
    const deckToSelect = AllDecks.find((d) => d.title === title);
    if (deckToSelect) {
      setSelectedDeck(deckToSelect);
      Toast.show({
        type: 'info',
        position: 'bottom',
        text1: `Now studying "${title}"`
      });
    }
  }

  function moveToNextCard() {
    if (selectedDeck && currentCardIndex < selectedDeck.cards.length - 1) {
      setCurrentCardIndex((prev) => prev + 1);
    } else {
      setCurrentCardIndex(0);
    }
  }

  function handleFlip() {
    setIsShowingBack(!isShowingBack);
  }

  function handleAutoplay() {
    setIsOnAutoplay(!isOnAutoplay);
    if (!isOnAutoplay) {
      setSecondsInTimer(8);
    } else {
      setSecondsInTimer(-1);
    }
  }

  function handleShuffle() {
    if (selectedDeck) {
      const shuffledCards = shuffleArray(selectedDeck.cards);

      setSelectedDeck((prevDeck) =>
        prevDeck ? { ...prevDeck, cards: shuffledCards } : prevDeck
      );
    }
  }

  return (
    <Context.Provider
      value={{
        allDecks: AllDecks,
        selectedDeck,
        selectDeckByTitle,
        isShowingBack,
        setIsShowingBack,
        currentCardIndex,
        setCurrentCardIndex,
        isOnAutoplay,
        setIsOnAutoplay,
        secondsInTimer,
        setSecondsInTimer,
        moveToNextCard,
        handleFlip,
        handleAutoplay,
        handleShuffle
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useDeckContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('DeckContext used outside of the provider');
  }
  return context;
}
