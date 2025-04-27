import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';

let {width} = Dimensions.get('window');
width = width - 40;

interface reviewProp {
  review: {
    user: {
      name: string;
      image: string;
    };
    content: string;
  };
}

const colors = [
  {bg: '#e4ebf4', quote: '#738197'},
  {bg: '#fff9db', quote: '#9c8500'},
  {bg: '#ffe8dd', quote: '#cc5c1a'},
  {bg: '#fde6ef', quote: '#cc5d84'},
  {bg: '#e2f5e9', quote: '#2f6f4e'},
];

const ReviewCard = ({review}: reviewProp) => {
  const idx = Math.floor(Math.random() * colors.length);
  const currentColor = colors[idx];

  return (
    <View style={[styles.background, {backgroundColor: currentColor.bg}]}>
      <View style={styles.ReviewCard}>
        <Text style={[styles.customQuotes, {color: currentColor.quote}]}>
          {'\u201C'}
        </Text>
        <Text style={styles.ReviewCardText}>{review.content}</Text>
      </View>
      <View style={styles.profile}>
        <Image
          source={{uri: review.user.image}}
          style={[
            styles.profileImage,
            {borderWidth: 1, borderColor: currentColor.quote}
          ]}
        />
        <Text style={styles.profileText}>{review.user.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    marginRight: 10,
  },
  ReviewCard: {
    padding: 20,
    width: '90%',
    borderRadius: 10,
    height: 'auto',
    position: 'absolute',
    left: 10,
    top: 5,
  },
  customQuotes: {
    fontSize: 80,
    marginBottom: -50,
    marginTop: -30,
  },
  ReviewCardText: {
    fontSize: 18,
    marginLeft: 10,
    textAlign: 'justify',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    position: 'absolute',
    bottom: 20,
    left: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  profileText: {
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 1.2,
  },
});

export default ReviewCard;
