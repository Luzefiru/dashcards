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
  isShowingBack: boolean;
}

export function DeckControls({
  handleFlip,
  handleAutoplay,
  handleShuffle,
  isShowingBack,
}: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Timer />
        <IconButton
          style={[styles.button, styles.relative]}
          onPress={handleAutoplay}
        >
          <Entypo name="controller-play" size={36} color={Colors.foreground} />
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
  relative: {
    position: "relative",
  },
});
