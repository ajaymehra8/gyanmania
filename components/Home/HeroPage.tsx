import React from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import VideoCarousel from './HeroPage/Testimonial/VideoCarousel';
import AppReviews from './HeroPage/AppReviews/AppReviews';
import Connect from './HeroPage/connectWithUs/Connect';
import ClassesCourse from './HeroPage/ClassesCourse';
import PopularCourses from './HeroPage/PopularCourses';
let {width, height} = Dimensions.get('window');

height = height - 155;
const HeroPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.heroPage}>
      <VideoCarousel/>
      <ClassesCourse/>
      <PopularCourses/>
      <AppReviews/>
      <Connect/>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  heroPage: {
    minHeight: height,
    width: width,
    paddingVertical: 10,
  },
});

export default HeroPage;
