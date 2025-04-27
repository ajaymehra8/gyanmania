import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface propsType {
  head: {
    headText: string;
    btnText?: string;
  };
}
const CarouselHeader = ({head}:propsType) => {
  return (
    <View style={styles.ReviewHeader}>
      <Text style={styles.headText}>{head.headText}</Text>
      {head.btnText && (
        <TouchableOpacity>
          <Text style={styles.btn}>{head.btnText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  ReviewHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal:10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headText: {
    fontSize: 18,
    fontWeight: 500,
  },
  btn: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 500,
  },
});
export default CarouselHeader;
