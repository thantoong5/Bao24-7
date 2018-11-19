import React, { Component } from 'react'
import { StyleSheet,
        Text, 
        View, 
        Button, 
        Image, 
        FlatList,
        TouchableOpacity } from 'react-native'

// tạo logo trên header bar
class LogoTitle extends Component {
    render() {
      return (
          <Image
            source={{uri:'https://pbs.twimg.com/profile_images/945288665990709249/dN0BK_em_400x400.jpg'}}
            style={{ width: 30, height: 30 }}
          /> 
      );
    }
  }

  class MainNews extends Component {
    render(){
      return (
        <View>
          <TouchableOpacity
          style={{width:'100%'}}
            onPress={() => {this.props.itemNav.navigate('Details')}}>
            {/* ảnh minh họa */}
            <Image
              source={{uri: this.props.itemInfo.image}}
              style={{ width: 300, height: 300 }}
            />
            {/* tiêu đề bài viết */}
            <Text>{this.props.itemInfo.title}</Text>
          </TouchableOpacity>
          {/* nội dung trích dẫn */}
          <Text>{this.props.itemInfo.content}</Text>
        </View> 
      )
    }
  }

  class SubNews extends Component {
    render(){
      return (
        <View>
          <TouchableOpacity
          style={{width:'100%'}}
            onPress={() => {this.props.itemNav.navigate('Details')}}>
            {/* ảnh minh họa */}
            <Image
              source={{uri: this.props.itemInfo.image}}
              style={{ width: 300, height: 300 }}
            />
            {/* tiêu đề bài viết */}
            <Text>{this.props.itemInfo.title}</Text>
          </TouchableOpacity>
          {/* nội dung trích dẫn */}
          <Text>{this.props.itemInfo.content}</Text>
        </View> 
      )
    }
  }


export default class Home extends Component {
    // cấu hình header bar
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
              onPress={() => alert('This is a button!')}
              title="Info"
              color="blue"
            />
          ),
      };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
            data={
              [
                {
                  id: 1,
                  image : 'https://dantricdn.com/zoom/327_245/2018/11/19/4649375119786462191015516465916291663265792n-1542618670242709289852.jpg',
                  content: 'abc',
                  title: 'abcdeeeeeeeeeeeeeeee',
                  mainContent: true,
                },
                {
                  id: 2,
                  image : 'https://dantricdn.com/zoom/327_245/2018/11/19/4649375119786462191015516465916291663265792n-1542618670242709289852.jpg',
                  content: 'abc',
                  title: 'abcd',
                  mainContent: false,
                }
              ]
            }
            renderItem={({item}) =>   
                   item.mainContent ? <MainNews itemNav={this.props.navigation} itemInfo={item}/> : <SubNews itemNav={this.props.navigation} itemInfo={item}/>   
                } 
            // thêm key (id) cho mỗi item
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
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
});
