import React, { Component } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import commomStyles from "../commomStyles";

export default class AddTask extends Component {
  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background}>
            <View style={styles.container}>
              <Text style={styles.header}>Nova Tarefa</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
  },
  container: {
    flex: 1 / 2,
    backgroundColor: "white",
    marginHorizontal: 30,
  },
  header: {
    fontFamily: commomStyles.fontFamily,
    fontSize: 20,
    backgroundColor: commomStyles.colors.today,
    color: commomStyles.colors.secondary,
    textAlign: "center",
    padding: 5,
  },
});
