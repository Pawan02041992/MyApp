import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserHomeScreen} from '../screens/User/UserHomeScreen';
import { UserProfileScreen} from '../screens/User/UserProfileScreen';
import { UserSettingsScreen} from '../screens/User/UserSettingsScreen';

const Tab = createBottomTabNavigator();

export const UserNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={UserHomeScreen} />
      <Tab.Screen name="Profile" component={UserProfileScreen} />
      <Tab.Screen name="Settings" component={UserSettingsScreen} />
    </Tab.Navigator>
  );
};