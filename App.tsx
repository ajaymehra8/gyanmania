import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import VideoPlayer from './components/Home/HeroPage/VideoPlayer';
import { RootStackParamList } from './types';



const Stack = createNativeStackNavigator<RootStackParamList>();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
