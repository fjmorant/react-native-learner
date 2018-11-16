import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Button} from 'react-native'
import {createStackNavigator} from 'react-navigation'

type Props = {}

class Principal extends Component<Props> {
  static navigationOptions = {
    title: 'Principal titulo',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Ejemplo StackNavigator</Text>
        <Button
          title="Ir al detalle"
          onPress={() => this.props.navigation.navigate('DetallePantalla')}
        />
      </View>
    )
  }
}

class Detalle extends Component<Props> {
  static navigationOptions = {
    title: 'Detalle titulo',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Detalle StackNavigator</Text>
      </View>
    )
  }
}

const stackNavigator = createStackNavigator({
  PrincipalPantalla: {
    screen: Principal,
  },
  DetallePantalla: {
    screen: Detalle,
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default stackNavigator
