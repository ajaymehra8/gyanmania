import React from 'react';
import {StyleSheet, View} from 'react-native';

interface props {
  children: React.ReactNode;
  row?: boolean;
  noMargin?: boolean;
  gap?: number;
}
const Layout = ({children, row, noMargin, gap}: props) => {
  gap = gap || 5;
  return (
    <View
      style={[
        styles.layout,
        !noMargin && {marginTop: 10, borderWidth: 0.2, borderColor: 'gray'},
        {gap: gap},
        row && {flexDirection: 'row', alignItems: 'center', gap: 20},
      ]}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  layout: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 0.2,
    borderBottomColor: 'gray',
  },
});

export default Layout;
