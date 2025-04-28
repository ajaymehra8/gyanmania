import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
    const handlePayment=()=>{

    };
  return (
    <View style={styles.main}>
        <View style={styles.amountBox}>
      <Text style={styles.amountAfterDiscount}>₹ 40</Text>
     <View style={styles.discountBox}>
      <Text style={styles.amount}>₹ 100</Text>
      <Text style={styles.discount}>60% off</Text>
      </View>
      </View>
      <TouchableOpacity activeOpacity={1} onPress={handlePayment} style={styles.btn}>
        <Text style={styles.btnText}>Buy now</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles=StyleSheet.create({
main:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
paddingVertical:30,
paddingHorizontal:15,
backgroundColor:'#181821',
},
amountBox:{
    gap:3,
},
amountAfterDiscount:{
    fontWeight:500,
    fontSize:16,
    color:'white',
},
discountBox:{
    flexDirection:'row',
    gap:13,
    alignItems:'center',
},
amount:{
    textDecorationLine:'line-through',
    fontWeight:500,
    fontSize:16,
    color:'white',
},
discount:{
    fontSize:16,
color:'#e6cf3a',
},
btn:{
    paddingHorizontal:35,
    paddingVertical:15,
    backgroundColor:'#a39116',
    borderRadius:10,
},
btnText:{
    color:'white',
    fontSize:18,
    fontWeight:500,
    letterSpacing:2,
},
});
export default Page;
