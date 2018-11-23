import React, { Component } from 'react'
import { StyleSheet,
        Text, 
        View, 
        Button, 
        Image, 
        FlatList,
        TouchableOpacity,
        Dimensions,
        PropTypes,
        Alert } from 'react-native'
import MainNews from '../components/MainNews';
import SubNews from '../components/SubNews';
import firebaseConf from '../lib/FirebaseConf';



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.readNewsData = this.readNewsData.bind(this);
    this.state = {education:[]};
  }

  componentDidMount() {
    this.readNewsData();
  }

  readNewsData() {
     // lấy instance của class truyền instance cho phương thức
    var that = this;
    
    firebaseConf.database().ref('categories/0/education/').once('value', function (snapshot) {
        let educationTmp =[];
        // lấy dữ liệu (do cấu trúc database nên dùng forEach)
        snapshot.forEach(function (childSnapshot) {
            let item = {
              id: childSnapshot.val().id,
              mainContent: childSnapshot.val().mainContent,
              title: childSnapshot.val().title,
              description: childSnapshot.val().description,
              image: childSnapshot.val().image
            }
            // đẩy dữ liệu item vào educationTmp
            educationTmp.push(item);
        });
        // cập nhật array education thông qua dữ liệu của array educationTmp
        that.setState({education: educationTmp});
        
    });
  }
  render() {
    
    return (
      <View style={styles.container}>
        <FlatList
            data={this.state.education}
            
            renderItem={({item}) =>  
              item.mainContent ? <MainNews  itemNav={this.props.navigation} 
                                            itemInfo={item} /> : <SubNews itemNav={this.props.navigation} 
                                                                          itemInfo={item} />
                } 
           
            keyExtractor={(item,index) => index.toString()}
            />  
      </View>
    )
  }
}


/// lấy chiều dài, chiều rộng thiết bị
  const dimensions = Dimensions.get('window');
  const deviceWidth = dimensions.width;
  const margin = deviceWidth * 4 / 100;

  const logoWidth = dimensions.width * 8 /100;
  const logoHeight = dimensions.width * 8 /100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  logo: {
    width: logoWidth,
    height: logoHeight,
    marginLeft: margin,
  },
});
