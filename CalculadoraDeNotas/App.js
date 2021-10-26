import React, { Component } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={(styles.textInput)}
          keyboardType="numeric" placeholder="Nota 1" />
        <TextInput style={(styles.textInput)}
          keyboardType="numeric" placeholder="Nota 2" />
        <TextInput style={(styles.textInput)}
          keyboardType="numeric" placeholder="Nº de Faltas" />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButon}>
            Calcular
          </Text>
        </TouchableOpacity>
        <Text style={styles.textResultado}>
          Aluno foi Aprovado
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1 //crescer a tela conforme e adicionadao coisas
  },

  textInput: {
    padding: 30,
    backgroundColor: '#cccccc',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    fontSize: 20,
  },

  button: {
    margin: 20,
    padding: 20,
    backgroundColor: '#37474f',
  },

  textButon: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    alignSelf: 'center'
  },

  textResultado: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
  }


})