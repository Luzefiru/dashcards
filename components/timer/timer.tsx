import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

interface Props {
  setSecondsInTimer: React.Dispatch<React.SetStateAction<number>>;
  secondsInTimer: number;
  moveToNextCard: () => void;
  handleFlip: () => void;
}
export function Timer({
  secondsInTimer,
  setSecondsInTimer,
  moveToNextCard,
  handleFlip,
}: Props) {
  useEffect(() => {
    if (secondsInTimer > 0) {
      const timer = setInterval(() => {
        // @ts-ignore
        if (secondsInTimer === 4) {
          handleFlip();
        }

        setSecondsInTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (secondsInTimer === 0) {
      setSecondsInTimer(8);
      handleFlip();
      setTimeout(() => {
        moveToNextCard();
      }, 350);
    }
  }, [secondsInTimer]);

  return (
    <View>
      <Text style={styles.timer}>
        {secondsInTimer > 4 ? (
          <Text>00:0{secondsInTimer - 4}</Text>
        ) : (
          <Text>00:00</Text>
        )}
      </Text>
    </View>
  );
}

export default Timer;

const styles = StyleSheet.create({
  timer: {
    textAlign: "center",
    marginBottom: 8,
    fontWeight: "bold",
    position: "absolute",
    top: -25,
    left: "28%",
  },
});
