import React from 'react';
import Layout from './Layout';
import VideoPlayer from '../components/VideoPlayer';
import type {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';
type PlayerRouteProps = RouteProp<RootStackParamList, 'VideoPlayerPage'>;
interface prop {
  route: PlayerRouteProps;
}
const VideoPlayerPage = ({route}: prop) => {
  const {_id} = route.params;
  console.log(_id);
  return (
    <Layout noHead>
      <VideoPlayer _id={'kdslfj'}/>
    </Layout>
  );
};

export default VideoPlayerPage;
