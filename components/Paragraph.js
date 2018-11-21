import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native';

class Paragraph extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
  	render() {
    return (
      <View style={styles.container}>
        {
          
          this.props.itemInfo.image === null ? <Text></Text> : <Image
              style={styles.image}
              resizeMode={'cover'}
              source={{uri: this.props.itemInfo.image}}/> 
        }
      	
      	<Text style={styles.paragraph}>{this.props.itemInfo.paragraph}</Text>
      </View>
    );
  }
}

// lấy chiều dài, chiều rộng thiết bị
const dimensions = Dimensions.get('window');
const deviceWidth = dimensions.width;
const deviceHeight = dimensions.height;
// tạo chiều dài, chiều rộng cho ảnh
const imageWidth = deviceWidth * 92 /100;
const imageHeight = deviceHeight * 36 /100;
//tạo margin cho view cha
const margin = deviceWidth - deviceWidth*96/100;

const styles = StyleSheet.create({
	container:{
	    marginLeft: margin,
	    marginRight: margin,
	    marginBottom: 12,
	    marginTop: 8,
  	},
  	image: {
  		width: imageWidth,
  		height: imageHeight,
  	},
  	paragraph: {
  		fontSize: 18,
  		lineHeight: 26,
  		marginTop: 20,
  		marginBottom: 20,
  		textAlign: 'justify',
  	}
});


export default Paragraph;