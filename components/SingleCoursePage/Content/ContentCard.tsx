import React from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../types';
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SingleCourse'
>;

interface Content {
  image: string;
  title: string;
  video: string;
}
interface props {
  item: Content;
}
const {width: screenWidth} = Dimensions.get('window');

const ContentCard = ({item}: props) => {
  const navigation = useNavigation<NavigationProp>();
  const handleClick = () => {
    navigation.navigate('SingleCourse', {_id: 'kldsa'});
  };
  const shortText = item.title.length > 24 ? item.title.slice(0, 24) : '';

  return (
    <TouchableOpacity activeOpacity={1} onPress={handleClick}>
      <View style={styles.ContentCard}>
        <Image
          source={{uri: item.image}}
          style={styles.courseImage}
          resizeMode="stretch"
        />
        <View style={styles.contentView}>
          <Text style={styles.title}>
            {shortText ? `${shortText} ...` : item.title}
          </Text>

        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  ContentCard: {
    width: screenWidth - 10,
    minHeight: 120,
    paddingVertical: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 15,

    borderColor: 'gray',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingRight: 10,
  },

  courseImage: {
    width: '40%',
    height: 110,
    borderRadius: 10,
  },
  contentView: {
    width: '50%',
    gap: 5,
  },
  title: {
    width: '99%',
    color: 'black',
    fontWeight: 700,
    fontSize: 15,
    marginTop: 8,
    lineHeight: 25,
  },
  btn: {
    width: 110,
    backgroundColor: '#a39116',
    marginTop: 3,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  btnText: {
    color: '#fff',
    fontWeight: 500,
    letterSpacing: 1.2,
    fontSize: 15,
  },

  priceView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  priceText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  originalPriceText: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  discountText: {
    fontSize: 12,
    color: '#ff8c00',
  },
});

export default ContentCard;
