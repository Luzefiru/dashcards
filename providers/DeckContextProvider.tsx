import React, { useContext, createContext, useState } from 'react';
import type { Deck } from '@/types/Deck';
import { AllDecks } from '@/constants/AllDecks';
import Toast from 'react-native-toast-message';

interface DeckContext {
  allDecks: Deck[] | null;
  selectedDeck: Deck | null;
  selectDeckByTitle: ((d: string) => void) | null;
}

const Context = createContext<DeckContext>({
  allDecks: null,
  selectedDeck: null,
  selectDeckByTitle: null
});

export function DeckContextProvider({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(AllDecks[0]);

  function selectDeckByTitle(title: string) {
    const deckToSelect = AllDecks.find((d) => d.title === title);

    if (deckToSelect) {
      setSelectedDeck(deckToSelect);

      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: `Successfully selected deck "${title}"!`
      });
    }
  }

  return (
    <Context.Provider
      value={{
        allDecks: AllDecks,
        selectedDeck,
        selectDeckByTitle
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
