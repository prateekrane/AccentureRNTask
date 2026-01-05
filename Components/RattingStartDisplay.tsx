import { View, Text } from "react-native";
import React from "react";

export default function RattingStartDisplay(props: { num: number }) {
  const val = props.num;
  function displayStart() {
    const result = [];
    for (let i = 0; i < val; i++) {
      result.push(<Text key={i}>⭐</Text>);
    }

    return result;
  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {displayStart()}
    </View>
  );
}
