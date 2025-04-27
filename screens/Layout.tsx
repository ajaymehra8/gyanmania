import React, {useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Sidebar from '../components/Sidebar';

interface LayoutProps {
  children: React.ReactNode; // typing children as ReactNode
  styled?: boolean;
}
const Layout = ({children, styled}: LayoutProps) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#cdd148"
        translucent={false}
        barStyle="dark-content"
      />
      <View
        style={[
          styles.home,
          styled && {backgroundColor: '#fff', paddingBottom: 30},
        ]}>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {children}
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
    backgroundColor: '#F5F5F5',
    height: '100%',
    width: '100%',
  },
  homeText: {
    color: 'black',
  },
});
export default Layout;
