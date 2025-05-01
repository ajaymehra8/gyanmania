import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import CarouselHeader from './Home/HeroPage/CarouselHeader';
interface Head {
  headText: string;
  btnText?: string;
}

interface VerticalCarouselProps<T> {
  data: T[];
  head?: Head;
  Card: React.ComponentType<{item: T}>;
  styled?: boolean;
}

function VerticalCarousel<T>({data, head, Card, styled}: VerticalCarouselProps<T>) {
  return (
    <View
      style={[
        styles.contentBox,
        styled && {backgroundColor: '#fff', marginBottom: 30},
      ]}>
      {head && <CarouselHeader head={head} />}

      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <Card item={item} />}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentBox: {
    minHeight: '100%',
    paddingHorizontal: 12,
    paddingVertical: 10,
    paddingBottom:100,
  },
});

export default VerticalCarousel;
