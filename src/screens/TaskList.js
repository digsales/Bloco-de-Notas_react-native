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
import Task from "../components/Task";
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

  render() {
    const today = moment().locale("pt-br").format("ddd, D [de] MMMM");
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>
              {commomStyles.Capitalize(today)}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <Task
            desc="Estudar para prova"
            estimateAt={new Date(2022, 10, 29, 19, 15)}
            doneAt={new Date()}
          />
          <Task
            desc="Ler Livro"
            estimateAt={new Date(2023, 0, 1)}
            doneAt={null}
          />
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
