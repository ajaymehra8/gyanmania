import React from 'react';
import {StyleSheet, View} from 'react-native';

interface props {
  children: React.ReactNode;
  row?: boolean;
}
const Layout = ({children, row}: props) => {
  return (
    <View
      style={[
        styles.layout,
        row && {flexDirection: 'row',alignItems:'center',gap:20},
      ]}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  layout: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 10,
  },
});

export default Layout;
