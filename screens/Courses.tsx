import React from 'react';

import CoursesPage from '../components/CoursesPage';
import Layout from './Layout';
import type {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';
type CoursesRouteProps = RouteProp<RootStackParamList, 'Courses'>;
interface CoursesProp {
  route: CoursesRouteProps;
}
const Courses = ({route}: CoursesProp) => {
  const {filter} = route.params || undefined;
  return (
    <Layout>
      <CoursesPage filter={filter} />
    </Layout>
  );
};

export default Courses;
