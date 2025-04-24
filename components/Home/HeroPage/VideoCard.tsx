import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../types'; // Adjust path to your types

const { width: screenWidth } = Dimensions.get('window');

interface videoProp {
  video: {
    name: string;
    image: string;
    video: string;
  };
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const VideoCard = ({ video }: videoProp) => {
  const navigation = useNavigation<NavigationProp>();

  const handleVideoPress = () => {
    navigation.navigate('VideoPlayer', { videoUrl: video.video });
  };

  return (
    <TouchableOpacity onPress={handleVideoPress} activeOpacity={1}>
      <View style={styles.videoCard}>
        <Image source={{ uri: video.image }} style={styles.videoImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  videoCard: {
    width: screenWidth - 70,
    height: 200,
    marginRight: 10,
  },
  videoImage: {
    width: '100%',
    height: 250,
    borderRadius: 5,
  },
});

export default VideoCard;
