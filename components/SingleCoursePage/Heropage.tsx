import React from 'react';
import Layout from './Layout';
import {StyleSheet, Image} from 'react-native';
import PageHead from './HeroPage/PageHead';

interface Course {
  image: string;
  title: string;
  price: number;
  discount?: number;
  description:string;

}
interface props {
  course: Course;
}
const Heropage = ({course}: props) => {
  console.log(course);
  return (
    <Layout noMargin gap={20}>
      <PageHead course={course} />
      <Image
        source={{uri: course.image}}
        style={styles.image}
        resizeMode={'stretch'}
      />
    </Layout>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 160,
    borderRadius: 10,
  },
});
export default Heropage;
