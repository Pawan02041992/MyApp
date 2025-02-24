import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const UserSettingsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Settings Screen</Text>
      <Button
        title="Change Password"
        onPress={() => alert('Change Password clicked')}
      />
      <Button
        title="Logout"
        onPress={() => navigation.navigate('Auth')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});