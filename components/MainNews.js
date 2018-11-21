import React, { Component } from 'react'
import { StyleSheet,
        Text, 
        View, 
        Button, 
        Image, 
        FlatList,
        TouchableOpacity,
        Dimensions } from 'react-native'

export default class MainNews extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
    render(){
      return (
        <View style={styles.mainNews}>
          <TouchableOpacity 
             
            onPress={() => this.props.itemNav.navigate('Details',{
                id: this.props.itemInfo.id,
                title: this.props.itemInfo.title,
                description: this.props.itemInfo.description
              }
            )}>
            
            <Image
              resizeMode={'cover'}
              source={{uri: this.props.itemInfo.image}}
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity              
            onPress={() => this.props.itemNav.navigate('Details',{
                id: this.props.itemInfo.id,
                title: this.props.itemInfo.title,
                description: this.props.itemInfo.description
              }
            )}>
            
            <Text style={styles.title}>{this.props.itemInfo.title}</Text>
          </TouchableOpacity>
          
          <Text style={styles.description}>{this.props.itemInfo.description}</Text>
        </View> 
      )
    }
  }

/// lấy chiều dài, chiều rộng thiết bị
const dimensions = Dimensions.get('window');
const deviceWidth = dimensions.width;
const deviceHeight = dimensions.height;
// tạo chiều dài, chiều rộng cho ảnh
const imageWidth = deviceWidth * 92 /100;
const imageHeight = deviceHeight * 36 /100;
//tạo margin cho view cha
const margin = deviceWidth - deviceWidth*96/100;

const styles = StyleSheet.create({
  mainNews:{
    marginLeft: margin,
    marginRight: margin,
    marginBottom: 12,
    marginTop: 8,
  },
  title: {
    color: '#000',
    marginTop: 3,
    fontWeight: 'bold',
    fontSize: 26,
    fontStyle: 'normal',
    textAlign: 'justify',
    lineHeight: 32,
  },
  description: {
    color: '#4F4F4F',
    marginTop: 10,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  }
});