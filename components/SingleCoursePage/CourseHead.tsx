import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Layout from './Layout';

interface Course {
  image: string;
  title: string;
  price: number;
  discount?: number;
}
interface props {
  course: Course;
}
const CourseHead = ({course}: props) => {
  return (
    <Layout row>
      <Icon name="arrow-back" size={30} />
      <Text style={styles.titleText}>{course.title}</Text>
    </Layout>
  );
};
const styles = StyleSheet.create({
  titleText: {
    fontSize: 17,
    fontWeight: 500,
  },
});
export default CourseHead;
