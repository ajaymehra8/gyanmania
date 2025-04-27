import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import CarouselHeader from './CarouselHeader';

interface Head {
  headText: string;
  btnText?: string;
}

interface CarouselProps<T> {
  data: T[];
  head?: Head;
  Card: React.ComponentType<{item: T}>;
  styled?: boolean;
}

function Carousel<T>({data, head, Card, styled}: CarouselProps<T>) {
  return (
    <View
      style={[
        styles.contentBox,
        styled && {backgroundColor: '#fff', marginBottom: 30},
      ]}>
      {head && <CarouselHeader head={head} />}

      <FlatList
        horizontal
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <Card item={item} />}
        ItemSeparatorComponent={() => <View style={{width: 12}} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentBox: {
    minHeight: 270,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default Carousel;
