import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../../types';

const {width: screenWidth} = Dimensions.get('window');

interface Course {
  image: string;
  title: string;
  price: number;
  discount?: number;
}
interface propType {
  item: Course;
}
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SingleCourse'
>;

const CourseCard = ({item}: propType) => {
  const navigation = useNavigation<NavigationProp>();

  const getDiscountPrice = (price: number, discount: number) => {
    const discountPrice = discount * (100 / price);
    const finalPrice = price - discountPrice;

    // Round to 2 decimal places
    return parseFloat(finalPrice.toFixed(2));
  };
  const handleClick = () => {
    navigation.navigate('SingleCourse', {_id: 'kldsa'});
  };
  return (
    <TouchableOpacity activeOpacity={1} onPress={handleClick}>
      <View style={styles.courseCard}>
        <Image
          source={{uri: item.image}}
          style={styles.courseImage}
          resizeMode="stretch"
        />
        <View style={styles.contentView}>
          <Text style={styles.title}>{item.title}</Text>
          {!item.discount ? (
            <Text>₹ {item.price}</Text>
          ) : (
            <View style={styles.priceView}>
              <Text style={styles.priceText}>
                ₹ {getDiscountPrice(item.price, item.discount)}
              </Text>

              <Text style={styles.originalPriceText}>₹ {item.price}</Text>
              <Text style={styles.discountText}>{item.discount}% off</Text>
            </View>
          )}
          <TouchableOpacity activeOpacity={1} style={styles.btn} onPress={handleClick}>
            <Text style={styles.btnText}>Get this Course</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  courseCard: {
    width: screenWidth - 70,
    minHeight: 400,
    borderRadius: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },

  courseImage: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: 'black',
    fontWeight: 700,
    fontSize: 18,
    marginTop: 8,
    lineHeight: 25,
  },
  btn: {
    width: '100%',
    backgroundColor: '#a39116',
    alignSelf: 'center',
    marginTop: 5,
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
    fontSize: 25,
  },
  contentView: {
    gap: 10,
    paddingHorizontal: 5,
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
export default CourseCard;
