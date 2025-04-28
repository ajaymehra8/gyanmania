import React from 'react';
import Layout from '../Layout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../types'; // Adjust path to your types

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SingleCourse'
>;

const Page = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('Chat');
  };
  return (
    <Layout>
      <View style={styles.main}>
        <Icon name="thought-bubble-outline" size={45} />
        <View>
          <Text style={styles.mainText}>
            Facing any difficulties, UserName?
          </Text>
          <TouchableOpacity activeOpacity={1} onPress={handlePress}>
            <Text style={styles.link}>Talk to me instantly {'>'} </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  mainText: {
    fontSize: 15,
    fontWeight: 500,
  },
  link: {
    color: '#5e8ff7',
    alignItems: 'center',
  },
});

export default Page;
