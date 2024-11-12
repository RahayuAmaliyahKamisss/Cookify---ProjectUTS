import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // pastikan ikon ini sudah terinstall
import { useNavigation } from '@react-navigation/native'; // untuk menggunakan navigasi di luar stack utama

export default function Profile() {
  const navigation = useNavigation(); // inisialisasi navigasi
  const [user, setUser] = useState({
    profile: {
      nama: 'Nama Pengguna',
      foto: 'https://linkfoto.com/foto.jpg', // Placeholder URL gambar profil
    }
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.profile.nama);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://mocki.io/v1/40218e4c-4a98-408b-84f8-a8b77b6c2f31');
      if (response.ok) {
        const data = await response.json();
        const fetchedUser = data.users?.[0] || user;
        setUser(fetchedUser);
        setEditedName(fetchedUser.profile.nama);
      } else {
        console.error('Error: Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSaveName = () => {
    setUser((prevUser) => ({
      ...prevUser,
      profile: {
        ...prevUser.profile,
        nama: editedName,
      }
    }));
    setIsEditing(false); // Keluar dari mode edit
  };

  return (
    <ImageBackground
      source={require('../../Photo/bg-profil.png')} // Gambar latar belakang
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: user.profile.foto }} // Menampilkan gambar profil dari URL
          style={styles.profileImage} // Gambar profil sebagai lingkaran
        />
        {isEditing ? (
          <TextInput
            style={styles.profileNameInput}
            value={editedName}
            onChangeText={setEditedName}
            placeholder="Nama Pengguna"
          />
        ) : (
          <Text style={styles.profileName}>{user.profile.nama}</Text>
        )}
        <TouchableOpacity style={styles.editButton} onPress={() => isEditing ? handleSaveName() : setIsEditing(true)}>
          <Text style={styles.editButtonText}>{isEditing ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>

      {/* Navigasi Bawah */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#689F38" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Icon name="plus" size={24} color="#689F38" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('News')}>
          <Icon name="newspaper-o" size={24} color="#689F38" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={24} color="#689F38" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  profileNameInput: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: '#689F38',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});
