import React from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import VideoCarousel from './HeroPage/VideoCarousel';
let {width, height} = Dimensions.get('window');
height = height - 155;
const HeroPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.heroPage}>
      <VideoCarousel/>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  heroPage: {
    minHeight: height,
    width: width,
    padding: 10,
  },
});

export default HeroPage;
