import React, {useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Sidebar from '../components/Sidebar';
import HeroPage from '../components/Home/HeroPage';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#cdd148"
        translucent={false}
        barStyle="dark-content"
      />
      <View style={styles.home}>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        <HeroPage/>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#cdd148',
  },
  headingContainer: {
    padding: 16, // optional: gives some spacing
  },
  headingText: {
    color: 'blue',
    fontSize: 24, // optional: for better visibility
  },
  home: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  homeText: {
    color: 'black',
  },
});
export default Home;
