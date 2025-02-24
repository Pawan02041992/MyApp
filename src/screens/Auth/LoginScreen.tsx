import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootStackParamList'; // Ensure this path is correct or create the module if it doesn't exist
import { login } from '@/services/authservice';

export const LoginScreen = () => {
  const [mobile, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    try {
      await login(mobile, password);
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile"
        value={mobile}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.signupLink}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  signupLink: {
    marginTop: 20,
    color: 'blue',
  },
});


// import * as React from 'react';
// import { Button, TextInput, View } from 'react-native';
// import { useAuth } from '../../context/AuthContext';

// export const LoginScreen = () => {
//   const { login } = useAuth();

//   const handleLogin = () => {
//     // Perform login logic here
//     login('admin'); // or 'user' based on your logic
//   };

//   return (
//     <View>
//       <TextInput placeholder="Mobile" />
//       <TextInput placeholder="Password" secureTextEntry />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };