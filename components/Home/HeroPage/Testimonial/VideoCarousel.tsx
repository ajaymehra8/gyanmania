import React from 'react';
import VideoCard from './VideoCard';
import Carousel from '../Carousel';

interface  video {
  name: string;
  image: string;
  video: string;
}

const VideoCarousel = () => {
  const videos = [
    {
      name: 'Intro video',
      image:
        'https://i.ytimg.com/vi/k53AR4fyZNw/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBEBM3IQOjSQPpRGiZJLFcDkBBdcA',
      video: 'https://youtu.be/k53AR4fyZNw?si=4cjGQFxrLCLS41Jd',
    },
    {
      name: 'Another video',
      image:
        'https://i.ytimg.com/vi/B7CuSGoY09w/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDpLCuRHMtmWqZOrq6QqVvTAoarNQ',
      video: 'https://youtu.be/k53AR4fyZNw?si=4cjGQFxrLCLS41Jd',
    },
  ];

  return (
    <Carousel<video> data={videos} Card={VideoCard}/>
  );
};



export default VideoCarousel;
