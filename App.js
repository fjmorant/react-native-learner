import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Button} from 'react-native'
import {createStackNavigator} from 'react-navigation'

type Props = {}

class Main extends Component<Props> {
  static navigationOptions = {
    title: 'Main title',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Example StackNavigator</Text>
        <Button
          title="Go to the details"
          onPress={() => this.props.navigation.navigate('DetailScreen')}
        />
      </View>
    )
  }
}

class Detail extends Component<Props> {
  static navigationOptions = {
    title: 'Detail title',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Detail StackNavigator</Text>
      </View>
    )
  }
}

const stackNavigator = createStackNavigator({
  MainScreen: {
    screen: Main,
  },
  DetailScreen: {
    screen: Detail,
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
