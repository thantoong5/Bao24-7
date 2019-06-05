import React, { Component } from 'react'
import { StyleSheet,
        Text, 
        View, 
        Button, 
        Image, 
        TouchableOpacity} from 'react-native'
import HomeScreen from './screens/Home';
import SportsScreen from './screens/Sports';
import DetailsScreen from './screens/Details';
import {  createStackNavigator, 
          createAppContainer, 
          createDrawerNavigator,
          NavigationActions,
          createSwitchNavigator } from "react-navigation";

const StackNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
      initialRouteName: 'Home',
    });

const DrawerNavigator = createDrawerNavigator(
  {
    Home: StackNavigator,
    Sports: SportsScreen,
  }
); 

const AppStack = createAppContainer(DrawerNavigator);

export default class App extends React.Component {

  render() {
    return <AppStack />;
    }
  }
