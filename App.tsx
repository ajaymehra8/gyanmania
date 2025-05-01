import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import VideoPlayer from './components/Webview/VideoPlayer';
import {RootStackParamList} from './types';
import Chat from './screens/Chat';
import Courses from './screens/Courses';
import SingleCourse from './screens/SingleCourse';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="SingleCourse" component={SingleCourse} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
