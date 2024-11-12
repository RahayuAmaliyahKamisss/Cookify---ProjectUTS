import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function News() {
  const List = [
    {
      id: '1',
      title: 'Burger',
      source: 'Blockchain News',
      description: 'Burger, yang berasal dari Hamburg, Jerman, pertama kali diperkenalkan ke Amerika pada akhir abad ke-19 dalam bentuk "Hamburg steak". Pada awal abad ke-20, konsep burger dalam roti mulai muncul, dengan klaim dari berbagai pihak seperti pedagang jalanan di New Haven dan nama-nama seperti Charlie Nagreen atau Louis Lassen. Pada tahun 1940-an, restoran fast food McDonalds memperkenalkan sistem pelayanan cepat dan efisien, mengubah burger menjadi makanan cepat saji global. Seiring waktu, burger berkembang dengan berbagai variasi, mulai dari daging ayam hingga pilihan vegetarian, dan kini dapat ditemukan di hampir setiap negara dengan berbagai gaya sesuai budaya lokal',
      time: '1 hour ago',
      image: require('../../Photo/News-Burger.jpg'),
    },
    {
      id: '2',
      title: 'STX Price Prediction: After 125% Price Jump in December, What\'s in Store for 2024?',
      source: 'Blockchain News',
      time: '2 hours ago',
      image: require('../../Photo/News-Choipan.jpg'),
    },
  ];

  type RootStackParamList = {
    News: undefined;
    DetailNews: {
      message: string;
      image: string;
      title: string;
      description: string;
      source: string;
      detail: string;
      time: string;
    };
    Profile: undefined;
    Like: undefined;
    Home: undefined;
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleNewsListPress = (item: any) => {
    navigation.navigate('DetailNews', {
      message: 'News Details',
      title: item.title,
      image: item.image,
      description: item.description,
      source: item.source,
      detail: item.detail,
      time: item.time,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.cardsScrollView}>
        <View style={styles.cardsContainer}>
          {List.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card} onPress={() => handleNewsListPress(item)}>
              <ImageBackground source={item.image} style={styles.imageBackground} imageStyle={{ borderRadius: 12 }}>
                <View style={styles.overlay}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.source}>{item.source}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  cardsScrollView: {
    flex: 1,
  },
  cardsContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  card: {
    marginBottom: 10,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  imageBackground: {
    width: '100%',
    height: 100,
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  source: {
    color: '#689F38',
    fontSize: 12,
  },
  time: {
    color: '#FFFFFF',
    fontSize: 10,
    marginTop: 4,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#EEE',
    backgroundColor: '#FFF',
  },
});
