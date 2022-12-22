import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import commomStyles from "../commomStyles";
import todayImage from "../../assets/imgs/today.jpg";
import Task from "../components/Task";
import AddTask from "./AddTask";
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

  state = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: [
      {
        id: Math.random(),
        desc: "Comprar livro de react native",
        estimateAt: new Date(2022, 11, 1),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: "Ler livro de react native",
        estimateAt: new Date(2023, 0, 1),
        doneAt: null,
      },
      {
        id: Math.random(),
        desc: "Treinar react native",
        estimateAt: new Date(),
        doneAt: null,
      },
    ],
  };

  componentDidMount = () => {
    this.filterTasks();
  };

  toggleFilter = () => {
    this.setState({ showDoneTasks: !this.state.showDoneTasks }, () =>
      this.filterTasks()
    );
  };

  filterTasks = () => {
    let visibleTasks = null;
    if (this.state.showDoneTasks) {
      visibleTasks = [...this.state.tasks];
    } else {
      const pending = function (task) {
        return task.doneAt === null;
      };
      visibleTasks = this.state.tasks.filter(pending);
    }
    this.setState({ visibleTasks });
  };

  toggleTask = (taskId) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    });
    this.setState({ tasks }, () => this.filterTasks());
  };

  render() {
    const today = moment().locale("pt-br").format("ddd, D [de] MMMM");
    return (
      <View style={styles.container}>
        <AddTask
          isVisible={this.state.showAddTask}
          onCancel={() => this.setState({ showAddTask: false })}
        />
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toggleFilter}>
              <FontAwesome
                name={this.state.showDoneTasks ? "eye" : "eye-slash"}
                color={commomStyles.colors.secondary}
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>
              {commomStyles.Capitalize(today)}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <FlatList
            data={this.state.visibleTasks}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Task {...item} toggleTask={this.toggleTask} />
            )}
          />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.7}
          onPress={() => this.setState({ showAddTask: true })}
        >
          <FontAwesome
            name="plus"
            size={20}
            color={commomStyles.colors.secondary}
          />
        </TouchableOpacity>
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
  iconBar: {
    // flexDirection: "row",
    // justifyContent: "flex-end",
    alignItems: "flex-end",
    marginHorizontal: 20,
    marginTop: Platform.OS === "ios" ? 45 : 40,
  },
  addButton: {
    position: "absolute",
    right: 30,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: commomStyles.colors.today,
    alignItems: "center",
    justifyContent: "center",
  },
});
