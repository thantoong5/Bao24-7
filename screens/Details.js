import React, { Component } from 'react'
import { StyleSheet,
        Text, 
        View, 
        Button, 
        Image, 
        FlatList,
        TouchableOpacity,
        Dimensions } from 'react-native'
import HeaderDetail from '../components/HeaderDetail';
import Paragraph from '../components/Paragraph';
export default class Details extends Component {

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
                  title: 'Những người hùng vô danh trên bục giảng',
                  description: '(Dân trí) - "Dù là tên tuổi không đăng trên báo, không được thưởng huân chương, song những người thầy giáo tốt là những người anh hùng vô danh...”',
                  time: '06:18 ngày 20/11/2018',
                  header: true,
                },
                {
                  image: 'https://dantricdn.com/zoom/480_300/2018/11/20/2011giaovien-15426481886201902990885.jpg',
                  paragraph: 'Trong buổi gặp mặt với gần 200 cán bộ quản lý, nhà giáo tiêu biểu có thành tích nổi bật trong sự nghiệp trồng người, đại diện cho hơn 1,4 triệu nhà giáo, cán bộ quản lý giáo dục cả nước ngày 19/1, Thủ tướng Nguyễn Xuân Phúc đã dẫn câu nói của Chủ tịch Hồ Chí Minh: “Người thầy giáo tốt, thầy giáo xứng đáng là thầy giáo - là người vẻ vang nhất. Dù là tên tuổi không đăng trên báo, không được thưởng huân chương, song những người thầy giáo tốt là những người anh hùng vô danh...”.',
                  header: false,
                },
                {
                  image: 'https://dantricdn.com/zoom/480_300/2018/11/20/2011giaovien-15426481886201902990885.jpg',
                  paragraph: 'Trong buổi gặp mặt với gần 200 cán bộ quản lý, nhà giáo tiêu biểu có thành tích nổi bật trong sự nghiệp trồng người, đại diện cho hơn 1,4 triệu nhà giáo, cán bộ quản lý giáo dục cả nước ngày 19/1, Thủ tướng Nguyễn Xuân Phúc đã dẫn câu nói của Chủ tịch Hồ Chí Minh: “Người thầy giáo tốt, thầy giáo xứng đáng là thầy giáo - là người vẻ vang nhất. Dù là tên tuổi không đăng trên báo, không được thưởng huân chương, song những người thầy giáo tốt là những người anh hùng vô danh...”.',
                  header: false,
                },
                {
                  image: '',
                  paragraph: 'Trong buổi gặp mặt với gần 200 cán bộ quản lý, nhà giáo tiêu biểu có thành tích nổi bật trong sự nghiệp trồng người, đại diện cho hơn 1,4 triệu nhà giáo, cán bộ quản lý giáo dục cả nước ngày 19/1, Thủ tướng Nguyễn Xuân Phúc đã dẫn câu nói của Chủ tịch Hồ Chí Minh: “Người thầy giáo tốt, thầy giáo xứng đáng là thầy giáo - là người vẻ vang nhất. Dù là tên tuổi không đăng trên báo, không được thưởng huân chương, song những người thầy giáo tốt là những người anh hùng vô danh...”.',
                  header: false,
                },
              ]
            }
            renderItem={({item}) => 
              item.header ? <HeaderDetail itemInfo={item} /> : <Paragraph itemInfo={item}/>
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