import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import Option from './Option';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const Options = () => {
  const handleCall = () => {
    Linking.openURL('tel:6395449210');
  };
  const handleCourse = () => {
    Linking.openURL('tel:6395449210');
  };
    const openWhatsApp = () => {
      const phoneNumber = '916395449210'; // use country code, no '+' sign
      const message = 'Hello from my app!';
      const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      Linking.openURL(url).catch(() => {
        Linking.openURL('https://play.google.com/store/apps/details?id=com.whatsapp');
      });
    };
  const allOptions = [
    {
      name: 'Contact Us',
      icon:<Icon name="phone-call" size={25} color={'gray'} />
      ,
      onClick: handleCall,
    },
    {
        name:'Courses',
        icon:<Icon name="book-open" size={25} color={'gray'} />,
        onClick:handleCourse,
    },
    {
        name:'Free Material',
        icon:<Icon name="folder" size={25} color={'gray'} />,
        onClick:handleCourse,
    },
    {
        name:'Chats',
        icon:<Icon name="message-circle" size={25} color={'gray'} />,
        onClick:handleCourse,
    },
    {
      name:'Whatsapp',
      icon:<Icon2 name="whatsapp" size={25} color={'gray'} />,
      onClick:openWhatsApp,
  },
  ];
  return (
    <View style={styles.options}>
      {allOptions.map((option, ind) => (
        <Option option={option} key={ind} />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  options: {
    paddingVertical:20,
    paddingHorizontal:10,
    display: 'flex',
    gap: 20,
  },
});
export default Options;

