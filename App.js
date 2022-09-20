import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home.js';
import Read from './components/read';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="read" component={Read} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;