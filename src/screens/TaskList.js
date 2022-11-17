import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from "react-native";
import todayImage from "../../assets/imgs/today.jpg";
import moment from "moment";
import "moment/locale/pt-br";

export default class TaskList extends Component {
  render() {
    const today = moment().locale("pt-br").format("ddd, D [de] MMMM");
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={[styles.textoCria, { fontSize: 40 }]}>Hoje</Text>
            <Text style={styles.textoCria}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <Text>TaskList</Text>
        </View>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor="transparent"
          translucent
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
    justifyContent: "center",
  },
  taskList: {
    flex: 7,
  },
  textoCria: {
    color: "white",
    fontSize: 30,
  },
  titleBar: {
    flex: 1,
    justifyContent: "flex-end",
    paddingLeft: 16,
    paddingBottom: 16,
  },
});
