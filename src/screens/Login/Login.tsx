import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Ambil data dari API
      const response = await axios.get('https://mocki.io/v1/40218e4c-4a98-408b-84f8-a8b77b6c2f31');

      if (Array.isArray(response.data.users)) {
        const user = response.data.users.find(
          (user) => user.username === username && user.password === password
        );

        if (user) {
          // Login berhasil, navigasi ke ProfileScreen dengan userId
          navigation.navigate('Main', { userId: 'user123' });
        } else {
          setErrorMessage('Username atau Password salah!');
        }
      } else {
        setErrorMessage('Data pengguna tidak ditemukan.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('Terjadi kesalahan pada server.');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../Photo/Login.png')} 
        style={styles.backgroundImage}
      />
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#FFFFFF" // Placeholder putih
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#FFFFFF" // Placeholder putih
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#689F38', // Border hijau
    borderRadius: 5,
    color: '#FFFFFF', // Teks putih dalam input
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loginButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#689F38', // Button hijau
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF', // Teks putih untuk button
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
