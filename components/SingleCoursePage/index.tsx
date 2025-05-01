import React, { useState} from 'react';
import CourseHead from './CourseHead';
import Heropage from './Heropage';
import AboutPage from './AboutPage';
import TalkToMe from './TalkToMe';
import PriceOverview from './PriceOverview';
import PayBtn from './PayBtn';
import {StyleSheet, View, ScrollView} from 'react-native';
import Content from './Content';
interface props {
  _id: string;
}
const Page = ({_id}: props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const course = {
    image:
      'https://i.ytimg.com/vi/wvxQT2RFICg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAWYt8tSOyBGhfOQkITJejM-sM8Ww',
    title:
      'Some application kjlsadj lksdfjal lkjdfsa lkjsdfal of trigonometry class.',
    price: 100,
    discount: 20,
    description: `This is a test description to check everything is working or not , modify it later`,
  };
  return (
    <>
      <CourseHead
        course={course}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      {activeIndex == 0 ? (
        <ScrollView>
          <View style={styles.main}>
            <Heropage course={course} />
            <AboutPage course={course} />
            <TalkToMe />
            <PriceOverview course={course} />
          </View>
        </ScrollView>
      ) : (
        <Content />
      )}
      <PayBtn course={course} />
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    paddingBottom: 30,
  },
});

export default Page;
