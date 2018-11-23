import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class Sports extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text>Sports</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    backgroundColor: '#fff',
	    alignItems: 'center',
	    
	  },
});


export default Sports;