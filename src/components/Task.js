import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import { Swipeable } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import moment from "moment";
import "moment/locale/pt-br";

import commomStyles from "../commomStyles";

export default (props) => {
  const doneOrNotStyle =
    props.doneAt != null ? { textDecorationLine: "line-through" } : {};

  const dateEstimate = moment(props.estimateAt)
    .locale("pt-br")
    .format("ddd, D [de] MMMM");
  const dateDone = moment(props.doneAt)
    .locale("pt-br")
    .format("ddd, D [de] MMMM");

  const getRightContent = () => {
    return (
      <TouchableOpacity
        style={styles.right}
        onPress={() => props.onDelete && props.onDelete(props.id)}
      >
        <FontAwesome
          name="trash-o"
          size={30}
          color={commomStyles.colors.secondary}
        />
      </TouchableOpacity>
    );
  };

  const getLeftContent = () => {
    return (
      <View style={styles.left}>
        <FontAwesome
          name="trash-o"
          size={20}
          color={commomStyles.colors.secondary}
        />
        <Text style={styles.excludeText}>Excluir</Text>
      </View>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={getRightContent}
        renderLeftActions={getLeftContent}
        onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)}
      >
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => props.onToggleTask(props.id)}
          >
            <View style={styles.checkContainer}>
              {getCheckView(props.doneAt)}
            </View>
          </TouchableWithoutFeedback>
          <View>
            <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
            <Text style={styles.date}>
              {commomStyles.Capitalize(dateEstimate)}
            </Text>
            {props.doneAt != null ? (
              <Text style={styles.date}>
                Concluído em {commomStyles.Capitalize(dateDone)}
              </Text>
            ) : (
              false
            )}
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
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
    backgroundColor: "white",
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
  right: {
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  left: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  excludeText: {
    fontFamily: commomStyles.fontFamily,
    color: "white",
    fontSize: 20,
    marginLeft: 10,
  },
});
