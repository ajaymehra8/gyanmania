import React from 'react';
import VerticalCarousel from '../../VerticalCarousel';
import ContentCard from './ContentCard';

interface Content {
  image: string;
  title: string;
  video: string;
}
const Page = () => {

 
  const data:Content[]=[{
image:
'https://i.ytimg.com/vi/wvxQT2RFICg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAWYt8tSOyBGhfOQkITJejM-sM8Ww',
title:
'Some application kjlsadj lksdfjal lkjdfsa lkjsdfal of trigonometry class.',
video:'https://www.youtube.com/watch?v=KEG7b851Ric',
  }];
  return (
    <>
      <VerticalCarousel<Content>
        head={{headText: '10 study material'}}
        data={data}
        Card={ContentCard}
        styled
      />
    </>
  );
};

export default Page;
