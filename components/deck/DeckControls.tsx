import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";
import { View, StyleSheet, Text } from "react-native";
import { IconButton } from "../ui/IconButton";
import Timer from "../timer/timer";

interface Props {
  handleFlip: () => void;
  handleAutoplay: () => void;
  handleShuffle: () => void;
  moveToNextCard: () => void;
  setSecondsInTimer: React.Dispatch<React.SetStateAction<number>>;
  isShowingBack: boolean;
  isOnAutoplay: boolean;
  secondsInTimer: number;
}

export function DeckControls({
  handleFlip,
  handleAutoplay,
  handleShuffle,
  moveToNextCard,
  isShowingBack,
  isOnAutoplay,
  secondsInTimer,
  setSecondsInTimer,
}: Props) {
  return (
    <View style={styles.container}>
      <View>
        {isOnAutoplay && (
          <Timer
            secondsInTimer={secondsInTimer}
            setSecondsInTimer={setSecondsInTimer}
            moveToNextCard={moveToNextCard}
            handleFlip={handleFlip}
          />
        )}

        <IconButton
          style={isOnAutoplay ? styles.activePlayButton : styles.button}
          onPress={handleAutoplay}
        >
          <Entypo
            name={isOnAutoplay ? "controller-paus" : "controller-play"}
            size={36}
            color={isOnAutoplay ? Colors.primary : Colors.foreground}
          />
        </IconButton>
      </View>
      <IconButton onPress={handleFlip} style={styles.button}>
        <MaterialCommunityIcons
          name={isShowingBack ? "eye-off" : "eye"}
          size={72}
          color={Colors.foreground}
        />
      </IconButton>
      <IconButton onPress={handleShuffle} style={styles.button}>
        <Entypo name="shuffle" size={36} color={Colors.foreground} />
      </IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    paddingVertical: 24,
    width: "100%",
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 999,
    padding: 20,
  },
  activePlayButton: {
    position: "relative",
    backgroundColor: Colors.foreground,
    borderRadius: 999,
    padding: 20,
  },
});
