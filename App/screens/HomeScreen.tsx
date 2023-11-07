import React from 'react';
import {
  FlatList, SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HeaderComponent from '../components/HeaderComponent';
import IMAGES from '../theme/images';
import ICONS from '../theme/icon';
import ListItemViewCategory from '../components/ListItemViewCategory';

const HomeScreen = () => {
  const Navigation = useNavigation();
  const listProduct = [
    {
      id:1,
      imageProduct: IMAGES.dishCaBienKko,
      title: 'Cơm tấm chân giò',
      imageLike: ICONS.iconHeart,
    },

    {
      id:2,
      imageProduct: IMAGES.dishCanhGheRauMuon,
      title: 'Canh ghẹ rau muống',
      imageLike: ICONS.iconHeart,
    },

    {
      id:3,
      imageProduct: IMAGES.dishChaBo,
      title: 'Chả bò',
      imageLike: ICONS.iconHeart,
    },
    {
      id:4,
      imageProduct: IMAGES.dishChaLua,
      title: 'Chả lụa',
      imageLike: ICONS.iconHeart,
    },
    {
      id:5,
      imageProduct: IMAGES.dishChaoCaPhoMai,
      title: 'Cháo cá phô mai',
      imageLike: ICONS.iconHeart,
    },
    {
      id:6,
      imageProduct: IMAGES.dishGoiDuaLeo,
      title: 'Gỏi dưa leo',
      imageLike: ICONS.iconHeart,
    },
    {
      id:7,
      imageProduct: IMAGES.dishOvernightOat,
      title: 'Overnight Oat',
      imageLike: ICONS.iconHeart,
    },
    {
      id:8,
      imageProduct: IMAGES.dishPhoXao,
      title: 'Phở xào',
      imageLike: ICONS.iconHeart,
    },
  ];

  // @ts-ignore
  const render = ({item}) => {
    return (
      <ListItemViewCategory
        iconItem={item?.imageLike}
        titleItem={item?.title}
        imageItem={item?.imageProduct}
        product={true}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        iconLeft={ICONS.iconBack}
        iconRight1={ICONS.iconCategoriesWhite}
        iconRight2={ICONS.iconSearchWhite}
        showSearchDish={true}
      />
      <ScrollView>
        <View>
          <FlatList
            data={listProduct}
            renderItem={render}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
          <TouchableOpacity
            onPress={() => {
              Navigation.goBack();
            }}>
            <Text style={styles.text}>{'Go back'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#ff0000',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default HomeScreen;
