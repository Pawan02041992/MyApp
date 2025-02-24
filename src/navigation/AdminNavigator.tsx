import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminHomeScreen} from '../screens/Admin/AdminHomeScreen';
import { AdminProfileScreen} from '../screens/Admin/AdminProfileScreen';
import { AdminSettingsScreen} from '../screens/Admin/AdminSettingsScreen';

const Tab = createBottomTabNavigator();

export const AdminNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={AdminHomeScreen} />
      <Tab.Screen name="Profile" component={AdminProfileScreen} />
      <Tab.Screen name="Settings" component={AdminSettingsScreen} />
    </Tab.Navigator>
  );
};