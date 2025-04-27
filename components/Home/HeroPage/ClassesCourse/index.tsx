import React from 'react';
import CourseCard from './CourseCard';
import Carousel from '../Carousel';
interface Course {
  name: string;
  thumbnail: string;
  open: () => void;
}
const page = () => {
  const handleOpen = () => {
    console.log('clicked');
  };
  const courses:Course[] = [
    {
      name: 'Class 9th',
      thumbnail:
        'https://d502jbuhuh9wk.cloudfront.net/courses/5dcfe9f3e4b0a95cdb73814f/5dcfe9f3e4b0a95cdb73814f_scaled_cover.jpg?v=10',
      open: handleOpen,
    },
    {
      name: 'Class 8th',
      thumbnail:
        'https://i.ytimg.com/vi/JXZDkuiWT4s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYimg-lGabMGPh4yuuUAezhWOuaQ',
      open: handleOpen,
    },
    {
      name: 'Class 7th',
      thumbnail:
        'https://www.magnetbrains.com/wp-content/uploads/2019/05/Class-7th-Maths-Mathematics-NCERT.png',
      open: handleOpen,
    },
  ];
  return (
    <Carousel<Course> data={courses} head={{headText:'Featured Courses'}} Card={CourseCard} styled/>
  );
};

export default page;
