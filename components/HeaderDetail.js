import React, { Component } from 'react'
import { StyleSheet,
        Text, 
        View, 
        Button, 
        Image, 
        FlatList,
        TouchableOpacity,
        Dimensions } from 'react-native'

export default class HeaderDetail extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
    render(){
      return (
        <View style={styles.container}>
        
          <Text style={styles.title}>{this.props.itemInfo.title}</Text>
          
          <Text style={styles.time}>{this.props.itemInfo.time}</Text>
          
          <Text style={styles.description}>{this.props.itemInfo.description}</Text>

        </View> 
      )
    }
  }
// lấy chiều dài, chiều rộng thiết bị
const dimensions = Dimensions.get('window');
const deviceWidth = dimensions.width;
const deviceHeight = dimensions.height;
//tạo margin cho view cha
const margin = deviceWidth - deviceWidth*96/100;

const styles = StyleSheet.create({
  container:{
    marginLeft: margin,
    marginRight: margin,
    marginBottom: 12,
    marginTop: 8,
  },
  title: {
    color: '#000',
    marginTop: 3,
    fontWeight: 'bold',
    fontSize: 28,
    fontStyle: 'normal',
    textAlign: 'justify',
    lineHeight: 32,
  },
  description: {
    color: '#1f1f1f',
    marginTop: 10,
    fontStyle: 'italic',
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 26,
    marginTop: 16,
    marginBottom: 20,
  },
  time: {
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: 13,
    color: '#888',
    paddingTop: 10,
  },
});