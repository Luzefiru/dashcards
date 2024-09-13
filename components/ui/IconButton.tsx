import React, { ReactNode, useRef } from 'react';
import {
  Animated,
  Pressable,
  PressableProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface IconButtonProps extends PressableProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

export function IconButton({
  onPress,
  style,
  children,
  ...rest
}: IconButtonProps) {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 0.9,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 0.8,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      {...rest}
    >
      <Animated.View
        style={[
          styles.button,
          style,
          { transform: [{ scale: scaleValue }], opacity: opacityValue },
        ]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    elevation: 1,
  },
});
