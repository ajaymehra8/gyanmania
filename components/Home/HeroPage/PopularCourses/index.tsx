import React from 'react';
import Carousel from '../Carousel';
import CourseCard from './CourseCard';

interface Course {
  image: string;
  title: string;
  price: number;
  discount?: number;
}
const page = () => {
  const courses: Course[] = [
    {
      image:
        'https://i.ytimg.com/vi/wvxQT2RFICg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAWYt8tSOyBGhfOQkITJejM-sM8Ww',
      title: 'Some application of trigonometry class.',
      price: 100,
      discount: 20,
    },
    {
      image:
        'https://i.ytimg.com/vi/Yt79Eqwtg98/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkuv6Im5A7kx4hFl9n6OSzVi3F8Q',
      title: 'Trignometry class 10th',
      price: 200,
      discount: 40,
    },
    {
      image:
        'https://i.ytimg.com/vi/92bA8Dqn5kM/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAcZXVTZhiGe72iJ2qZ8acXnvb0Ow',
      title: 'Electricity class 10th',
      price: 150,
      discount: 20,
    },
  ];
  return (
    <Carousel<Course>
      head={{headText: 'Popular Courses', btnText: 'See all'}}
      data={courses}
      Card={CourseCard}
      styled
    />
  );
};

export default page;
