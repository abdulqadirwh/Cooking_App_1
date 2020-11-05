import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import UserSearchScreen from './screens/UserSearchScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'

export default class App extends Component {
  render(){
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  WelcomeScreen:WelcomeScreen,
  UserSearchScreen:UserSearchScreen
})

const AppContainer = createAppContainer(AppNavigator);

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
