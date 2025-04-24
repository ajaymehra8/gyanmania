import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Dimensions, View, Pressable} from 'react-native';
import Profile from './Sidebar/Profile';
import Options from './Sidebar/Options';

const {width} = Dimensions.get('window');

const Sidebar = ({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const slideAnim = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: showSidebar ? 0 : -width,
      duration: 300,
      useNativeDriver: false, // we're animating 'left' (layout), not transform
    }).start();
  }, [showSidebar]);
  if (!showSidebar) {
    return null;
  }
  return (
    <View style={showSidebar && styles.overlay}>
      <Pressable
        style={styles.backdrop}
        onPress={() => setShowSidebar(false)}
      />
      <Animated.View style={[styles.sidebar, {left: slideAnim}]}>
        <Profile />
        <Options />
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 100,
    flexDirection: 'row',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  sidebar: {
    padding: 20,
    width: '80%',
    backgroundColor: 'white',
    height: '100%',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {width: 4, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    top: 0,
    bottom: 0,
    zIndex: 5,
  },
});

export default Sidebar;
