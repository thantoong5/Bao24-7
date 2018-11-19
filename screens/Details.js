import React, { Component } from 'react'
import { Text, View, Button, Image } from 'react-native'

export default class Details extends Component {

    static navigationOptions = {
        title: 'Details',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="blue"
            />
          ),
      };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
