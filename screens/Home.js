import React, { Component } from 'react'
import { StyleSheet,
        Text, 
        View, 
        Button, 
        Image, 
        FlatList,
        TouchableOpacity,
        Dimensions } from 'react-native'
import MainNews from '../components/MainNews';
import SubNews from '../components/SubNews';
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

export default class Home extends Component {
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
              onPress={() => alert('This is a button!')}
              title="Info"
              color="blue"
            />
          ),
      };

  render() {
    const dimensions = Dimensions.get('window');
    const deviceWidth = dimensions.width;
    const padding = deviceWidth - deviceWidth*96/100;
    return (
      <View style={styles.container}>
        <FlatList

            data={
              [
                { 
                  
                  image : 'https://dantricdn.com/zoom/480_300/2018/11/20/2011giaovien-15426481886201902990885.jpg',
                  title: 'Những người hùng vô danh trên bục giảng',
                  description: '(Dân trí) - "Dù là tên tuổi không đăng trên báo, không được thưởng huân chương, song những người thầy giáo tốt là những người anh hùng vô danh...”',
                  mainContent: true,
                },
                {
                  image : 'https://dantricdn.com/zoom/480_300/2018/11/20/2011giaovien-15426481886201902990885.jpg',
                  title: 'Những người hùng vô danh trên bục giảng',
                  description: '(Dân trí) - "Dù là tên tuổi không đăng trên báo, không được thưởng huân chương, song những người thầy giáo tốt là những người anh hùng vô danh...”',
                  mainContent: false,
                },
                {
                  image : 'https://dantricdn.com/zoom/480_300/2018/11/20/2011giaovien-15426481886201902990885.jpg',
                  title: 'Những người hùng vô danh trên bục giảng',
                  description: '(Dân trí) - "Dù là tên tuổi không đăng trên báo, không được thưởng huân chương, song những người thầy giáo tốt là những người anh hùng vô danh...”',
                  mainContent: false,
                },
                { 
                  
                  image : 'https://dantricdn.com/zoom/480_300/2018/11/20/2011giaovien-15426481886201902990885.jpg',
                  title: 'Những người hùng vô danh trên bục giảng',
                  description: '(Dân trí) - "Dù là tên tuổi không đăng trên báo, không được thưởng huân chương, song những người thầy giáo tốt là những người anh hùng vô danh...”',
                  mainContent: true,
                },
                {
                  image : 'https://dantricdn.com/zoom/480_300/2018/11/20/2011giaovien-15426481886201902990885.jpg',
                  title: 'Những người hùng vô danh trên bục giảng',
                  description: '(Dân trí) - "Dù là tên tuổi không đăng trên báo, không được thưởng huân chương, song những người thầy giáo tốt là những người anh hùng vô danh...”',
                  mainContent: false,
                },
                {
                  image : 'https://dantricdn.com/zoom/480_300/2018/11/20/2011giaovien-15426481886201902990885.jpg',
                  title: 'Những người hùng vô danh trên bục giảng',
                  description: '(Dân trí) - "Dù là tên tuổi không đăng trên báo, không được thưởng huân chương, song những người thầy giáo tốt là những người anh hùng vô danh...”',
                  mainContent: false,
                },

              ]
            }
            renderItem={({item}) =>  
              item.mainContent ? <MainNews itemNav={this.props.navigation} itemInfo={item} /> : <SubNews itemNav={this.props.navigation} itemInfo={item} />
                } 
            // thêm key (id) cho mỗi item
            keyExtractor={(item,index) => index.toString()}
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
