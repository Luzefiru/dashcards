import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const Timer = () => {
  const [seconds, setSeconds] = useState(8);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      // Clean up the interval when the component unmounts or seconds reach 0
      return () => clearInterval(timer);
    }
  }, [seconds]);

  return (
    <View>
      <Text style={styles.timer}>
        {seconds > 0 ? <Text>00:0{seconds}</Text> : <Text>00:00</Text>}
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
    left: "30%",
  },
});
