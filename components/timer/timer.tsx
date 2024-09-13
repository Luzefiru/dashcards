import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

interface Props {
  setSecondsInTimer: React.Dispatch<React.SetStateAction<number>>;
  secondsInTimer: number;
}
const Timer = ({ secondsInTimer, setSecondsInTimer }: Props) => {
  useEffect(() => {
    if (secondsInTimer > 0) {
      const timer = setInterval(() => {
        // @ts-ignore
        setSecondsInTimer((prev) => prev - 1);
      }, 1000);

      // Clean up the interval when the component unmounts or seconds reach 0
      return () => clearInterval(timer);
    }
  }, [secondsInTimer]);

  return (
    <View>
      <Text style={styles.timer}>
        {secondsInTimer > 0 ? (
          <Text>00:0{secondsInTimer}</Text>
        ) : (
          <Text>00:00</Text>
        )}
      </Text>
    </View>
  );
};

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
