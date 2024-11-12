import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/TabScreen/Home';
import Profile from '../screens/TabScreen/Profile';
import Create from '../screens/TabScreen/CreateRecipes';
import News from '../screens/TabScreen/News';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { display: 'none' }, // Menyembunyikan tab bar
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Create" component={Create}/>
      <Tab.Screen name="News" component={News}/>

    </Tab.Navigator>
  );
};

export default TabNavigator;
