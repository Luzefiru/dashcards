import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';
import type { Card } from '@/types/Card';

interface Props {
  cards: Card[];
  currentCardIndex: number;
  isShowingBack: boolean;
}

export function DeckCardArea({
  cards,
  currentCardIndex,
  isShowingBack,
}: Props) {
  const currentCard = cards[currentCardIndex];

  const flip = useSharedValue(0);

  React.useEffect(() => {
    flip.value = withTiming(isShowingBack ? 1 : 0, { duration: 500 });
  }, [isShowingBack]);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(flip.value, [0, 1], [0, 180]);
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      opacity: flip.value < 0.5 ? 1 : 0,
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(flip.value, [0, 1], [180, 360]);
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      opacity: flip.value > 0.5 ? 1 : 0,
    };
  });

  return (
    <View>
      {/* Front Side */}
      <Animated.View
        style={[styles.cardSide, frontAnimatedStyle, styles.cardContainer]}
      >
        <Text style={styles.cardText}>{currentCard.front}</Text>
      </Animated.View>

      {/* Back Side */}
      <Animated.View
        style={[
          styles.cardSide,
          styles.cardBack,
          backAnimatedStyle,
          styles.cardContainer,
        ]}
      >
        <Text style={styles.cardText}>{currentCard.back}</Text>
      </Animated.View>
      <View style={styles.curvedBackground} />
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth - 64;
const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 32,
    width: cardWidth,
    height: 288,
    marginHorizontal: 32,
    borderRadius: 16,
    backgroundColor: Colors.foreground,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardSide: {
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },

  cardBack: {
    position: 'absolute',
    backgroundColor: Colors.foreground,
  },

  cardText: {
    fontSize: 20,
    textAlign: 'center',
  },

  curvedBackground: {
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    height: 160,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: -10,
  },
});
