import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.desc}</Text>
      <Text>{String(props.estimateAt)}</Text>
      <Text>{String(props.doneAt)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#aaa",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
});
