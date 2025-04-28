import React from 'react';
import Layout from '../Layout';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface Course {
  image: string;
  title: string;
  price: number;
  discount?: number;
  description: string;
}
interface props {
  course: Course;
}
const page = ({course}: props) => {
  console.log(course);
  const description = course.description
    .split('\n')
    .map(line => line.trimStart().replace(/\s+/g, ' '))
    .join('\n');
  return (
    <Layout>
      <Text style={styles.headText}>About This Course</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.infoBox}>
        <View style={styles.info}>
          <Icon name="clockcircle" size={30} style={styles.clockIcon} />
          <View>
            <Text style={styles.infoText}>1 Month Validity</Text>
            <Text style={styles.infoSubText}>
              You will get this course for 1 full Month.
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.info}>
          <Icon name="play" size={30} style={styles.playIcon} />
          <View>
            <Text style={styles.infoText}>1 learning Material</Text>
            <Text style={styles.infoSubText}>10 videos</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  headText: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 10,
  },
  description: {
    lineHeight: 20,
    fontSize: 15,
    marginBottom: 10,
  },
  infoBox: {
    width: '100%',
    gap: 30,
    paddingVertical: 10,
  },
  info: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 500,
  },
  infoSubText: {
    fontSize: 12,
    fontWeight: 400,
    color: 'gray',
  },
  clockIcon: {
    color: 'gray',
  },
  playIcon: {
    color: '#0074d9',
  },
});
export default page;
