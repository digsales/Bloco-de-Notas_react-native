import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from "react-native";

import commomStyles from "../commomStyles";
import todayImage from "../../assets/imgs/today.jpg";
// import * as Font from "expo-font";

import moment from "moment";
import "moment/locale/pt-br";

export default class TaskList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fontsLoaded: false,
  //   };
  // }

  // async loadFonts() {
  //   await Font.loadAsync({
  //     Lato: require("../../assets/fonts/Lato.ttf"),
  //   });
  //   this.setState({ fontsLoaded: true });
  // }

  // componentDidMount() {
  //   this.loadFonts();
  // }

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    const today = moment().locale("pt-br").format("ddd, D [de] MMMM");
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{this.Capitalize(today)}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <Text>Tarefa #01</Text>
          <Text>Tarefa #02</Text>
          <Text>Tarefa #03</Text>
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
  titleBar: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  title: {
    fontFamily: commomStyles.fontFamily,
    color: commomStyles.colors.secondary,
    fontSize: 50,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: commomStyles.fontFamily,
    color: commomStyles.colors.secondary,
    fontSize: 20,
    marginBottom: 10,
  },
});
