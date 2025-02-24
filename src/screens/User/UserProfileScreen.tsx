import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile Screen</Text>
      <Text>Name: Jane Doe</Text>
      <Text>Email: jane.doe@example.com</Text>
      <Text>Role: User</Text>
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