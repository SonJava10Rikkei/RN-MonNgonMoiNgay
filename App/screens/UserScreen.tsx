import React from 'react';
import {
  FlatList,
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
import ItemViewDish from '../components/itemViewDish';

const UserScreen = () => {
  const Navigation = useNavigation();
  const listProduct = [
    {
      imageProduct: IMAGES.dishCaBienKko,
      title: 'Cơm tấm chân giò',
      imageLike: ICONS.iconHeart,
    },

    {
      imageProduct: IMAGES.dishCanhGheRauMuon,
      title: 'Canh ghẹ rau muống',
      imageLike: ICONS.iconHeart,
    },

    {
      imageProduct: IMAGES.dishChaBo,
      title: 'Chả bò',
      imageLike: ICONS.iconHeart,
    },
    {
      imageProduct: IMAGES.dishChaLua,
      title: 'Chả lụa',
      imageLike: ICONS.iconHeart,
    },
    {
      imageProduct: IMAGES.dishChaoCaPhoMai,
      title: 'Cháo cá phô mai',
      imageLike: ICONS.iconHeart,
    },
    {
      imageProduct: IMAGES.dishGoiDuaLeo,
      title: 'Gỏi dưa leo',
      imageLike: ICONS.iconHeart,
    },
    {
      imageProduct: IMAGES.dishOvernightOat,
      title: 'Overnight Oat',
      imageLike: ICONS.iconHeart,
    },
    {
      imageProduct: IMAGES.dishPhoXao,
      title: 'Phở xào',
      imageLike: ICONS.iconHeart,
    },
  ];

  // @ts-ignore
  const render = ({item}) => {
    return (
      <ItemViewDish
        imageLike={item?.imageLike}
        title={item?.title}
        imageProduct={item?.imageProduct}
      />
    );
  };
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={IMAGES.backgroundHistory} style={styles.container}> */}
      <HeaderComponent
        title="Cá nhân"
        iconLeft={ICONS.iconBack}
        iconRight1={ICONS.iconCategoriesWhite}
        iconRight2={ICONS.iconSearchWhite}
        // showIconLeft={true}
        // showSearchDish={true}
        // showIconRight1={true}
        showIconRight2={true}
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
      {/* </ImageBackground> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default UserScreen;
