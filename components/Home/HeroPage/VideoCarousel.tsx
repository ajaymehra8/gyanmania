import React from 'react';
import {ScrollView, StyleSheet } from 'react-native';
import VideoCard from './VideoCard';

const VideoCarousel = () => {
  const videos = [
    {
      name: 'Intro video',
      image:
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
      video:
        'https://youtu.be/k53AR4fyZNw?si=4cjGQFxrLCLS41Jd',
    },
    {
      name: 'Another video',
      image:
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
      video:
        'https://youtu.be/k53AR4fyZNw?si=4cjGQFxrLCLS41Jd',
    },
  ];

  return (
    <ScrollView style={styles.videoCarousel} horizontal pagingEnabled>
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  videoCarousel: {
    maxHeight:210,
    padding:5,
  },
});

export default VideoCarousel;
