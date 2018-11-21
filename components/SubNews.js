import React, { Component } from 'react'
import { StyleSheet,
        Text, 
        View, 
        Button, 
        Image, 
        FlatList,
        TouchableOpacity,
        Dimensions } from 'react-native'

export default class SubNews extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
    render(){
      return (
        <View style={styles.container}>
        	<TouchableOpacity 
            
        		onPress={() => this.props.itemNav.navigate('Details',{
                id: this.props.itemInfo.id,
                title: this.props.itemInfo.title,
                description: this.props.itemInfo.description
              }
            )}>
        		<Text style={styles.title}>{this.props.itemInfo.title}</Text>
        	</TouchableOpacity>
    		<View style={styles.child}>
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
              style={{width: imageWidth,height: imageHeight,marginRight: 10,}}
            />
    			</TouchableOpacity>
                     	
          		<Text style={styles.description}>{this.props.itemInfo.description}</Text>
    		</View>
        </View> 
      )
    }
  }

/// lấy chiều dài, chiều rộng thiết bị
const dimensions = Dimensions.get('window');
const deviceWidth = dimensions.width;
const deviceHeight = dimensions.height;
// tạo chiều dài, chiều rộng cho ảnh
const imageWidth = deviceWidth * 32 /100;
const imageHeight = deviceHeight * 10 / 100;
//tạo margin cho view cha
const margin = deviceWidth - deviceWidth*96/100;

const styles = StyleSheet.create({
	container: {
		marginLeft: margin,
		marginRight: margin,
		borderTopWidth: 2,
		borderTopColor: '#4197e1',
		borderStyle: 'solid',
		marginBottom: 16,
	},
  title: {
    color: '#000',
    marginTop: 4,
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'normal',
    textAlign: 'justify',
    lineHeight: 24,
    
  },
  description: {
  	flex: 2,
    color: '#4F4F4F',
    marginTop: 10,
    fontStyle: 'normal',
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 20,
  },
  child: {
    flexDirection: 'row',
    height: imageHeight,
    alignItems: 'center',
  }
});