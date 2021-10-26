import React, { Component } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { nota1: 0, nota2: 0, faltas: 0, resultado: "" }
    this.calcular = this.calcular.bind(this)

  }
  calcular() {
    let num1 = parseInt(this.state.nota1)
    let num2 = parseInt(this.state.nota2)
    let media = (num1 + num2) / 2

    if (media >= 6 && this.state.faltas <= 10) {
      this.setState({ resultado: "Aprovado" })
    } else {
      this.setState({ resultado: "Reprovado" })
    }

  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput style={(styles.textInput)}
          onChangeText={(nota1) => { this.setState({ nota1 }) }}
          keyboardType="numeric" placeholder="Nota 1"
        />
        <TextInput style={(styles.textInput)}
          onChangeText={(nota2) => { this.setState({ nota2 }) }}
          keyboardType="numeric" placeholder="Nota 2"
        />
        <TextInput style={(styles.textInput)}
          onChangeText={(faltas) => { this.setState({ faltas }) }}
          keyboardType="numeric" placeholder="Nº de Faltas"
        />

        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.textButon}>
            Calcular
          </Text>
        </TouchableOpacity>
        <Text style={styles.textResultado}>
          {this.state.resultado}
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