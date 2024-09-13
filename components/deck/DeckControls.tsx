import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from '@/constants/Colors';
import { View, StyleSheet } from 'react-native';
import { IconButton } from '../ui/IconButton';

interface Props {
  handleFlip: () => void;
  handlePrevCard: () => void;
  handleNextCard: () => void;
  isShowingBack: boolean;
}

export function DeckControls({
  handleFlip,
  handlePrevCard,
  handleNextCard,
  isShowingBack,
}: Props) {
  return (
    <View style={styles.container}>
      <IconButton style={styles.button} onPress={handlePrevCard}>
        <MaterialIcons name="arrow-back" size={36} color={Colors.foreground} />
      </IconButton>
      <IconButton onPress={handleFlip} style={styles.button}>
        <MaterialCommunityIcons
          name={isShowingBack ? 'eye-off' : 'eye'}
          size={72}
          color={Colors.foreground}
        />
      </IconButton>
      <IconButton onPress={handleNextCard} style={styles.button}>
        <MaterialIcons
          name="arrow-forward"
          size={36}
          color={Colors.foreground}
        />
      </IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    paddingVertical: 24,
    width: '100%',
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 999,
    padding: 20,
  },
});
