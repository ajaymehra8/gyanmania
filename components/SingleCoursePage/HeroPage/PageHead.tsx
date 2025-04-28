import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
interface Course {
  image: string;
  title: string;
  price: number;
  discount?: number;
  description:string;

}
interface props {
  course: Course;
}
const PageHead = ({course}: props) => {
  console.log(course);
  const materialTypes = ['pdf', 'videos'];
  return (
    <View style={styles.mainBox}>
      <View style={styles.content}>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.subTitle}>This is the subtitle of course.</Text>
        <View style={styles.materialTypeBox}>
          {materialTypes.map((type, index) => {
            return (
              <View style={styles.materialType} key={index}>
                <Text style={styles.materialTypeText}>{type}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <TouchableOpacity activeOpacity={1} style={styles.likeBtn}>
        <Icon name="thumbs-up" size={26} />
        <Text>20</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  content: {
    gap: 1,
    width: '80%',
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 13,
    color: 'gray',
    fontWeight: 400,
  },
  materialTypeBox: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 10,
  },
  materialType: {
    flexDirection: 'row',
    gap: 3,
    textTransform: 'uppercase',
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  materialTypeText: {
    textTransform: 'uppercase',
  },
  likeBtn: {
    width: '20%',
    alignSelf: 'flex-start',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
});
export default PageHead;
