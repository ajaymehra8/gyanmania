import React from 'react';
import Layout from './Layout';
import SingleCoursePage from '../components/SingleCoursePage';
import type {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';
type CoursesRouteProps = RouteProp<RootStackParamList, 'SingleCourse'>;
interface prop {
  route: CoursesRouteProps;
}
const SingleCourse = ({route}: prop) => {
  const {_id} = route.params;
  console.log(_id);
  return (
    <Layout>
      <SingleCoursePage _id={'kdslfj'}/>
    </Layout>
  );
};

export default SingleCourse;
