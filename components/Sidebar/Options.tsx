import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../types'; // Adjust path to your types
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Option from './Option';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Options = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleCall = () => {
    Linking.openURL('tel:6395449210');
  };
  const handleCourse = () => {
    Linking.openURL('tel:6395449210');
  };
  const handleChat = () => {
    navigation.navigate('Chat');
  };
  const openWhatsApp = () => {
    const phoneNumber = '916395449210'; // use country code, no '+' sign
    const message = 'Hello from my app!';
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message,
    )}`;
    Linking.openURL(url).catch(() => {
      Linking.openURL(
        'https://play.google.com/store/apps/details?id=com.whatsapp',
      );
    });
  };
  const allOptions = [
    {
      name: 'Contact Us',
      icon: <Icon name="phone-call" size={25} color={'gray'} />,
      onClick: handleCall,
    },
    {
      name: 'Courses',
      icon: <Icon name="book-open" size={25} color={'gray'} />,
      onClick: handleCourse,
    },
    {
      name: 'Free Material',
      icon: <Icon name="folder" size={25} color={'gray'} />,
      onClick: handleCourse,
    },
    {
      name: 'Chats',
      icon: <Icon name="message-circle" size={25} color={'gray'} />,
      onClick: handleChat,
    },
    {
      name: 'Whatsapp',
      icon: <Icon2 name="whatsapp" size={25} color={'gray'} />,
      onClick: openWhatsApp,
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
    paddingVertical: 20,
    paddingHorizontal: 10,
    display: 'flex',
    gap: 20,
  },
});
export default Options;
