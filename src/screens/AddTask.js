import React, { Component } from "react";
import {
  Platform,
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import moment from "moment/moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import commomStyles from "../commomStyles";

const initialState = { desc: "", date: new Date(), showDatePicker: false };

export default class AddTask extends Component {
  state = {
    ...initialState,
  };

  save = () => {
    const newTask = {
      desc: this.state.desc,
      date: this.state.date,
      // ...this.state
    };

    this.props.onSave && this.props.onSave(newTask);
    this.setState({ ...initialState });
  };

  getDatePicker = () => {
    let datePicker = (
      <DateTimePicker
        value={this.state.date}
        onChange={(_, date) => this.setState({ date, showDatePicker: false })}
        mode="date"
      />
    );

    const dateString = moment(this.state.date)
      .locale("pt-br")
      .format("ddd, D [de] MMMM [de] YYYY");

    if (Platform.OS === "android") {
      return (datePicker = (
        <View>
          <TouchableOpacity
            onPress={() => this.setState({ showDatePicker: true })}
          >
            <Text style={styles.date}>
              {commomStyles.Capitalize(dateString)}
            </Text>
          </TouchableOpacity>
          {this.state.showDatePicker && datePicker}
        </View>
      ));
    } else {
      return datePicker;
    }
  };

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
              <TextInput
                style={styles.input}
                placeholder="Informe a descrição"
                value={this.state.value}
                onChangeText={(desc) => this.setState({ desc })}
              />
              {this.getDatePicker()}
              <View style={styles.buttons}>
                <TouchableOpacity onPress={this.props.onCancel}>
                  <Text style={styles.button}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.save}>
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
    // width: "90%",
    height: 40,
    margin: 15,
    // marginTop: 15,
    paddingHorizontal: 10,
    // alignSelf: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    borderRadius: 6,
  },
  buttons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: commomStyles.colors.today,
  },
  date: {
    marginLeft: 15,
    fontFamily: commomStyles.fontFamily,
    fontSize: 18,
    // textAlign: "center",
  },
});
