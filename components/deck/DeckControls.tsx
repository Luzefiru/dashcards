import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from '../ui/IconButton';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from '@/constants/Colors';

export function DeckControls() {
  return (
    <View style={styles.container}>
      <IconButton style={styles.button}>
        <MaterialIcons
          name="video-collection"
          size={32}
          color={Colors.foreground}
        />
      </IconButton>
      <IconButton style={styles.button}>
        <MaterialIcons
          name="flip-camera-android"
          size={64}
          color={Colors.foreground}
        />
      </IconButton>
      <IconButton style={styles.button}>
        <MaterialIcons name="shuffle" size={32} color={Colors.foreground} />
      </IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    paddingVertical: 24,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 999,
  },
});
