import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator'; // Mengimpor TabNavigator
import DetailRecipes from '../screens/Lain-Lain/DetailRecipes.tsx';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/Login/Login';
import Profile from '../screens/TabScreen/Profile.tsx';
import DetailNews from '../screens/Lain-Lain/DetailNews.tsx';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        {/* Layar Login / StartScreen */}
        <Stack.Screen 
          name="StartScreen" 
          component={StartScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        
        {/* TabNavigator sebagai layar utama setelah login */}
        <Stack.Screen 
          name="Main" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="ProfileScreen" 
          component={Profile} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen 
          name="DetailNews" 
          component={DetailNews} 
          options={{ headerShown: false }} 
        />
        
        {/* Perbaiki nama screen di sini */}
        <Stack.Screen 
          name="DetailRecipes" 
          component={DetailRecipes} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
