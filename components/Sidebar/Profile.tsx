import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Image
        source={{
          uri: 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg',
        }}
        style={styles.avatar}
      />
      <Text style={styles.profileText}>Ajay Mahara</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  profile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  profileText:{
    fontSize:30,
    fontWeight:500,
    letterSpacing:1.2,
  },
});

export default Profile;
