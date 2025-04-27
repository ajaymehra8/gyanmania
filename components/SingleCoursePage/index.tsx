import React from 'react';
import CourseHead from './CourseHead';

interface props {
  _id: string;
}
const page = ({_id}: props) => {
  const course = {
    image:
      'https://i.ytimg.com/vi/wvxQT2RFICg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAWYt8tSOyBGhfOQkITJejM-sM8Ww',
    title: 'Some application of trigonometry class.',
    price: 100,
    discount: 20,
  };
  return (
    <>
      <CourseHead course={course} />
      {/* <CoursePage/>
      <CourseAbout/>
      <ChatWithMe/>
      <PricingDetails/>
      <CourseFooter/> */}
    </>
  );
};

export default page;
