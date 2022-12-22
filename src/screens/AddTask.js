import React, { Component } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
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
              <TextInput style={styles.input} />
              <View style={styles.buttons}>
                <TouchableOpacity>
                  <Text style={styles.button}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.button}>Salvar</Text>
                </TouchableOpacity>
              </View>
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
  input: {
    fontFamily: commomStyles.fontFamily,
    width: "90%",
    height: 40,
    marginTop: 10,
    paddingHorizontal: 10,
    alignSelf: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    borderRadius: 6,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: commomStyles.colors.today,
  },
});
