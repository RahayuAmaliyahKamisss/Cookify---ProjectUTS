
import { View, Text, Image } from 'react-native';
import React from 'react';
import { Link } from '@react-navigation/native';

const StartScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff', // Tambahkan warna background jika diperlukan
      }}>

      {/* Gambar ditampilkan dalam View terpisah agar fleksibel */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Image 
          source={require('../Photo/T.jpeg')} 
          style={{ 
            width: '120%', // Mengisi lebar layar
            height: '100%', // Mengisi tinggi layar
            resizeMode: 'contain' // Agar gambar tidak terpotong
          }}
        />
      </View>

      {/* Teks dan Tombol di bagian bawah */}
      <View style={{
        position: "absolute",
        bottom: 50, // Menyesuaikan jarak dari bawah
        alignItems: 'center', // Menengahkan konten
        paddingHorizontal: 20, // Menjaga jarak dari tepi layar
      }}>
        <Text style={{
          fontSize: 38,
          textAlign: "center",
          fontWeight: '600',
          color: "#E2CEB1",
        }}>
          KOPI UNTUK KETENANGAN
        </Text>

        <Text style={{
          fontSize: 19,
          fontWeight: '400',
          marginVertical: 10,
          color: "#E2CEB1",
          textAlign: 'center'
        }}>
          SENTUHAN HANGAT DAN LEMBUT UNTUK KECERIAAN DENGAN KOPI
        </Text>

        {/* Tombol ke HomeScreen */}
        <Link style={{
          backgroundColor: "#c17a2f",
          textAlign: "center",
          marginBottom: 35,
          width: 150,
          borderRadius: 16,
          paddingVertical: 10,
        }} to="/Main">
          <Text>
            Go to HomeScreen!
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default StartScreen;
