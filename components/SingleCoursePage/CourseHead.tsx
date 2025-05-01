import React, {SetStateAction} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Layout from './Layout';
import {useNavigation} from '@react-navigation/native';

interface Course {
  image: string;
  title: string;
  price: number;
  discount?: number;
  description: string;
}
interface props {
  course: Course;
  activeIndex: number;
  setActiveIndex: React.Dispatch<SetStateAction<number>>;
}
const CourseHead = ({course, activeIndex, setActiveIndex}: props) => {
  const navigation = useNavigation();

  const handlePress = (index: number) => {
    setActiveIndex(index); // set the clicked button as active
  };

  const title =
    course.title.length > 40 ? course.title.slice(0, 40) + '...' : course.title;
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      console.log('No screen to go back to');
    }
  };
  return (
    <>
      <Layout row noMargin>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>
      </Layout>
      <Layout noMargin row>
        <TouchableOpacity
          style={[styles.btn, activeIndex === 0 && styles.activeBtn]}
          activeOpacity={1}
          onPress={() => {
            handlePress(0);
          }}>
          <Text
            style={[styles.btnText, activeIndex === 0 && styles.activeText]}>
            Overview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, activeIndex === 1 && styles.activeBtn]}
          activeOpacity={1}
          onPress={() => {
            handlePress(1);
          }}>
          <Text
            style={[styles.btnText, activeIndex === 1 && styles.activeText]}>
            Content
          </Text>
        </TouchableOpacity>
      </Layout>
    </>
  );
};
const styles = StyleSheet.create({
  titleText: {
    fontSize: 17,
    fontWeight: 500,
  },
  btn: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
    borderWidth: 0.2,
    borderColor: 'gray',
  },
  activeBtn: {
    backgroundColor: '#cdd148',
    borderWidth: 0,
  },
  activeText: {
    color: 'white',
  },
  btnText: {
    color: 'black',
  },
});
export default CourseHead;
