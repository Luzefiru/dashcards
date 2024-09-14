import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { Colors } from '@/constants/Colors';
import { ProgressBar } from './ProgressBar';
import { useDeckContext } from '@/providers/DeckContextProvider';
import type { Card } from '@/types/Card';

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth - 64;

export function DeckCardArea() {
  const flip = useSharedValue(0);
  const {
    selectedDeck,
    currentCardIndex,
    isShowingBack,
    handleFlip,
    setCurrentCardIndex
  } = useDeckContext();
  const cards = selectedDeck?.cards || [];

  useEffect(() => {
    flip.value = withTiming(isShowingBack ? 1 : 0, { duration: 500 });
  }, [isShowingBack, flip]);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(flip.value, [0, 1], [0, 180]);
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      opacity: flip.value < 0.5 ? 1 : 0
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(flip.value, [0, 1], [180, 360]);
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      opacity: flip.value > 0.5 ? 1 : 0
    };
  });

  return (
    <View style={styles.container}>
      <Carousel
        style={{ overflow: 'visible' }}
        loop
        width={screenWidth}
        height={screenWidth * 2}
        data={cards}
        scrollAnimationDuration={500}
        defaultIndex={currentCardIndex}
        onSnapToItem={(index) => setCurrentCardIndex(index)}
        renderItem={({ index }) => (
          <CardItem
            card={cards[index]}
            frontAnimatedStyle={frontAnimatedStyle}
            backAnimatedStyle={backAnimatedStyle}
            handleFlip={handleFlip}
          />
        )}
      />
      <ProgressBar
        cards={cards}
        currentCardIndex={currentCardIndex}
        cardWidth={cardWidth}
      />
      <View style={styles.curvedBackground} />
    </View>
  );
}

const CardItem = ({
  card,
  frontAnimatedStyle,
  backAnimatedStyle,
  handleFlip
}: {
  card: Card;
  frontAnimatedStyle: Animated.AnimateStyle<any>;
  backAnimatedStyle: Animated.AnimateStyle<any>;
  handleFlip: () => void;
}) => (
  <Pressable onPress={handleFlip}>
    {/* Front Side */}
    <Animated.View
      style={[styles.cardSide, frontAnimatedStyle, styles.cardContainer]}
    >
      <Text style={styles.cardText}>{card.front}</Text>
    </Animated.View>

    {/* Back Side */}
    <Animated.View
      style={[
        styles.cardSide,
        styles.cardBack,
        backAnimatedStyle,
        styles.cardContainer
      ]}
    >
      <Text style={styles.cardText}>{card.back}</Text>
    </Animated.View>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    paddingHorizontal: 32,
    width: cardWidth,
    height: 288,
    marginHorizontal: 32,
    borderRadius: 16,
    backgroundColor: Colors.foreground,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardSide: {
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  cardBack: {
    backgroundColor: Colors.foreground
  },
  cardText: {
    fontSize: 20,
    textAlign: 'center'
  },
  curvedBackground: {
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    height: 160,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: -10
  },
  cardWithProgressBarContainer: {
    display: 'flex'
  },
  progressBar: {
    position: 'absolute',
    bottom: '25%',
    left: '50%'
  }
});
