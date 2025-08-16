import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = () => {
    if (username.trim().length === 0 || password.trim().length === 0) {
      setMessage('✗ Please enter both username and password.');
      setIsSuccess(false);
    } else if (username === "admin" && password === "1234") {
      setMessage('✓ Login successful!');
      setIsSuccess(true);
    } else {
      setMessage('✗ Invalid credentials. Try again.');
      setIsSuccess(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, please log in</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#A9A9A9"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#A9A9A9"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      {message ? (
        <Text style={[styles.message, isSuccess ? styles.success : styles.error]}>
          {message}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F0FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#6A0DAD',
  },
  input: {
    height: 50,
    borderColor: '#CBC3E3',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    color: '#6A0DAD',
  },
  button: {
    backgroundColor: '#8A2BE2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#8A2BE2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    padding: 12,
    borderRadius: 8,
    fontWeight: '600',
  },
  success: {
    backgroundColor: '#E8F5E9', 
    color: '#2E7D32', 
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  error: {
    backgroundColor: '#FFEBEE',
    color: '#C62828', 
    borderLeftWidth: 4,
    borderLeftColor: '#F44336',
  },
});

export default App;