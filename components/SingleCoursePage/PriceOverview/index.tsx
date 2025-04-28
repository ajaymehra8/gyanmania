import React from 'react';
import Layout from '../Layout';
import {StyleSheet, Text, View} from 'react-native';

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
const Page = ({course}: props) => {
  console.log(course);
  return (
    <Layout>
      <Text style={styles.headText}>Pricing Details</Text>
      <View style={styles.main}>
        <Text style={styles.payText}>You Pay</Text>
        <View style={styles.payBox}>
<Text style={[styles.pay,styles.rupees]}>₹ 100</Text>
<Text style={styles.pay}>₹ 40</Text>

        </View>
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
  main:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    alignSelf:'center',
    paddingHorizontal:10,
    paddingVertical:10,
    borderWidth:0.2,
    borderColor:'gray',
    borderRadius:5,
  },
  payBox:{
    flexDirection:'row',
    gap:15,
    alignItems:'center',
  },
  payText:{
    fontSize:17,
    fontWeight:400,
  },
  rupees:{
textDecorationLine:'line-through',
color:'gray',
fontWeight:400,
  },
  pay:{
    fontWeight:400,
    fontSize:17,
  },
});
export default Page;
