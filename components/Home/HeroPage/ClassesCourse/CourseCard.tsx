import React from 'react';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../../types';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Courses'>;

interface courseProp {
  item: {
    name: string;
    thumbnail: string;
  };
}

const CourseCard = ({item}: courseProp) => {
  const navigation = useNavigation<NavigationProp>();

  const handlecoursePress = () => {
    navigation.navigate('Courses',{});
    console.log('clicked');
  };

  return (
    <TouchableOpacity onPress={handlecoursePress} activeOpacity={1}>
      <View style={styles.courseCard}>
        <Image
          source={{uri: item.thumbnail}}
          style={styles.courseImage}
          resizeMode="stretch"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  courseCard: {
    width: screenWidth - 50,
    height: 250,
  },
  courseImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});

export default CourseCard;
