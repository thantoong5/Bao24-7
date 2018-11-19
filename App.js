import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home';
import Details from './screens/Details';
import { createStackNavigator, createAppContainer } from "react-navigation";


const RootStack = createStackNavigator(
  {
    Home: Home,
    Details: Details
  },
  {
    initialRouteName: 'Home'
  }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
