import React, { Component } from 'react'
import { StyleSheet,
        Text, 
        View, 
        Button, 
        Image, 
        FlatList,
        TouchableOpacity,
        Dimensions,
        Alert } from 'react-native'
import MainNews from '../components/MainNews';
import SubNews from '../components/SubNews';
import firebaseConf from '../lib/FirebaseConf';

class LogoTitle extends Component {
    render() {
      return (
          <Image
            source={{uri:'https://diylogodesigns.com/wp-content/uploads/2016/02/Economic-Times-News-logo-design.png'}}
            resizeMode={'cover'}
            style={styles.logo}
          /> 
      );
    }
  }

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.readNewsData = this.readNewsData.bind(this);
    this.state = {education:[]};
    
  }
    /// tùy chỉnh header bar
    static navigationOptions = {
        headerTitle: <LogoTitle />,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: (
            <Button
              title={'Menu'}
              color={'green'}
              onPress={() => Alert.alert('abc')}/>
          ),
      };

  // phương thức này được gọi khi component đã được gắn kết vào trong 'sơ đồ mối quan hệ các component' , 
  // nơi dùng để lấy dữ liệu hoặc tạo DOM nodes 
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

  const logoWidth = dimensions.width * 12 /100;
  const logoHeight = dimensions.width * 12 /100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: logoWidth,
    height: logoHeight,
    marginLeft: margin,
  },

});
