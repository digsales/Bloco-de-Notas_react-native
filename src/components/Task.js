import React from "react";
import { Text, View } from "react-native";

export default (props) => {
  return (
    <View>
      <Text>{props.desc}</Text>
      <Text>{String(props.estimateAt)}</Text>
      <Text>{String(props.doneAt)}</Text>
    </View>
  );
};
