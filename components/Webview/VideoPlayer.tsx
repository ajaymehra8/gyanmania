import React, { useState } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { SafeAreaView } from 'react-native-safe-area-context';

type VideoPlayerRouteProp = RouteProp<RootStackParamList, 'VideoPlayer'>;

interface Props {
  route: VideoPlayerRouteProp;
}

const VideoPlayer = ({ route }: Props) => {
  const { videoUrl } = route.params;
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#cdd148"
        translucent={false}
        barStyle="dark-content"
      />
      <View style={styles.webview}>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        <WebView
          source={{ uri: videoUrl }}
          startInLoadingState
          renderLoading={() => (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#000" />
            </View>
          )}
        />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#cdd148',
  },
  webview: {
    flex: 1,
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height:'100%',

  },
});

export default VideoPlayer;
