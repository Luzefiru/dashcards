import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Progress from "react-native-progress";
import type { Card } from "@/types/Card";

interface Props {
  cards: Card[];
  currentCardIndex: number;
  cardWidth: number;
}

export function ProgressBar({ cards, currentCardIndex, cardWidth }: Props) {
  return (
    <View style={styles.progressBar}>
      <Progress.Bar
        progress={(currentCardIndex + 1) / cards.length}
        width={cardWidth - 10}
        height={7}
        color="#45FF5B"
        unfilledColor="white"
        borderWidth={0}
      />
      <Text style={styles.cardNumber}>
        {currentCardIndex + 1}/{cards.length}{" "}
        <Text style={styles.mutedText}>Cards</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    position: "absolute",
    bottom: "25%",
    left: "10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 5,
  },
  cardNumber: {
    fontWeight: "bold",
    fontSize: 12,
  },
  mutedText: {
    color: "#7B7980",
  },
});
