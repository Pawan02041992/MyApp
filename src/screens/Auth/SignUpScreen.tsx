import * as React from 'react';
import { Button, TextInput, View } from 'react-native';

export const SignUpScreen = () => {
  return (
    <View>
      <TextInput placeholder="Mobile" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Sign Up" onPress={() => {}} />
    </View>
  );
};