import React from "react";
import { Text, View, StyleSheet } from "react-native";
import commomStyles from "../commomStyles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import moment from "moment";
import "moment/locale/pt-br";

export default (props) => {
  const doneOrNotStyle =
    props.doneAt != null ? { textDecorationLine: "line-through" } : {};

  const dateEstimate = moment(props.estimateAt)
    .locale("pt-br")
    .format("ddd, D [de] MMMM");
  const dateDone = moment(props.doneAt)
    .locale("pt-br")
    .format("ddd, D [de] MMMM");

  return (
    <View style={styles.container}>
      <View style={styles.checkContainer}>{getCheckView(props.doneAt)}</View>
      <View>
        <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
        <Text style={styles.date}>{commomStyles.Capitalize(dateEstimate)}</Text>
        {props.doneAt != null ? (
          <Text style={styles.date}>
            Concluído em {commomStyles.Capitalize(dateDone)}
          </Text>
        ) : (
          false
        )}
      </View>
    </View>
  );
};

function getCheckView(doneAt) {
  if (doneAt != null) {
    return (
      <View style={styles.done}>
        <FontAwesome name="check" size={15} color="white" />
      </View>
    );
  } else {
    return <View style={styles.pending}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#aaa",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  checkContainer: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#555",
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#555",
    backgroundColor: "#4682B4",
    justifyContent: "center",
    alignItems: "center",
  },
  desc: {
    fontFamily: commomStyles.fontFamily,
    color: commomStyles.colors.mainText,
    fontSize: 16,
  },
  date: {
    fontFamily: commomStyles.fontFamily,
    color: commomStyles.colors.subText,
    fontSize: 14,
  },
});
