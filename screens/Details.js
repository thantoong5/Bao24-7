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
import HeaderDetail from '../components/HeaderDetail';
import Paragraph from '../components/Paragraph';
import firebaseConf from '../lib/FirebaseConf';



export default class Details extends Component {

  constructor(props) {
    super(props);
    this.readDetailData = this.readDetailData.bind(this);
    this.state = {contentNews: []};
  }
  // tùy chỉnh header bar
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
              title={'Menu'}
              color={'green'}
              onPress={() => Alert.alert('abc')}/>
          ),
    };

  componentDidMount() {
    this.readDetailData();
  }

  readDetailData() {
    // lấy dữ liệu được chuyển bởi navigation
    const { navigation } = this.props;
    const id = navigation.getParam('id', '');
    const title = navigation.getParam('title', '');
    const description = navigation.getParam('description', '');

    // lấy instance của class truyền instance cho phương thức
    var that = this;

    // truy xuất firebase 
    firebaseConf.database().ref('categories/0/education/').once('value', function (snapshot) {
        let educationTmp = []
         snapshot.forEach(function (childSnapshot) {
          // kiểm tra bài viết có đúng với id chuyển từ HomeScreen qua hay không?
            if(childSnapshot.val().id === id){
              // lấy dữ liệu (do cấu trúc database nên dùng forEach)
                childSnapshot.val().content.forEach(function (subSnapshot){
                  let item = {
                    title: title,
                    description: description,
                    header: subSnapshot.header,
                    time: subSnapshot.time,
                    image: subSnapshot.image,
                    paragraph: subSnapshot.paragraph
                  }

                  // đẩy dữ liệu vào mảng educationTmp
                  educationTmp.push(item);
                });
            }
        });
         // cập nhật dữ liệu cho mảng contentNews thông qua educationTmp
         that.setState({contentNews: educationTmp});
    });
  }

  render() {
  return (
    <View style={styles.container}>
    <FlatList
        data={this.state.contentNews}
        renderItem={({item}) => 
          item.header ? <HeaderDetail  itemInfo={item} /> : <Paragraph itemInfo={item}/>
          } 
       
        keyExtractor={(item, index) => index.toString()}
        />  
      </View>
    )
  }
}

    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});