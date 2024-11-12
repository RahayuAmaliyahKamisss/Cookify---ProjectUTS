import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from '@react-navigation/native';

const StartScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* Gambar background memenuhi layar */}
      <Image 
        source={require('../Photo/Start.png')} 
        style={styles.backgroundImage}
      />

      {/* Tombol di bagian bawah */}
      <View style={styles.buttonContainer}>
        <Link style={styles.buttonLink} to="/Login">
          <Text style={styles.buttonText}>SIGN IN</Text>
        </Link>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Menjaga gambar memenuhi layar tanpa terpotong
  },
  textContainerTop: {
    position: 'absolute',
    top: '15%', // Mengatur posisi sedikit ke bawah dari atas layar
    left: '50%',
    transform: [{ translateX: -150 }], // Center horizontal
    alignItems: 'center',
    width: 300,
  },
  titleText: {
    fontSize: 45,
    marginTop: -60,
    fontWeight: 'bold',
    color: "#388E3C",
    textAlign: 'center',
  },
  textContainerBottom: {
    position: 'absolute',
    top: '25%', // Mengatur jarak di bawah teks utama
    left: '50%',
    transform: [{ translateX: -150 }],
    width: 300,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  descriptionText: {
    marginTop: -30,
    fontSize: 19,
    color: "#FFF",
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    left: '50%',
    transform: [{ translateX: -150 }],
    width: 300,
    borderRadius: 40,
    backgroundColor: "#689F38",
    paddingVertical: 20,
    alignItems: 'center',
  },
  buttonLink: {
    width: '100%',
    textAlign: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StartScreen;
