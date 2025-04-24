import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const Header = ({showSidebar,setShowSidebar}) => {
  const handlePress = () => {
setShowSidebar(true);
  };
  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity activeOpacity={1} onPress={handlePress}>
        <Icon name="three-bars" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.logo}>GyanMania</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fdffbe',
    height:60,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 25,
  },
});

export default Header;
