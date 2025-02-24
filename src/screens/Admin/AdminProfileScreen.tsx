import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AdminProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Profile Screen</Text>
      <Text>Name: John Doe</Text>
      <Text>Email: john.doe@example.com</Text>
      <Text>Role: Admin</Text>
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