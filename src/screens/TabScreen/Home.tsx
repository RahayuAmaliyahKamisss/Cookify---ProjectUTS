import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function LocationProfile() {
  const coffeeRecommendations = ['Cappuccino', 'Macchiato', 'Tiramisu Latte', 'Coffee'];
  const products = [
    { id: 1, name: 'Tiramisu Latte', price: 'Rp. 40.000', image: require('../../Photo/Tiramisu.jpeg'), rating: 4.9, description: 'Minuman lembut dan lezat yang mirip dengan kue' },
    { id: 2, name: 'Cappuccino', price: 'Rp.30.000', image: require('../../Photo/Cappuccino.jpeg'), rating: 4.7, description: 'Rasa Yang Seimbang Antara Kekuatan Kopi Dan Kelembutan Susu' },
    { id: 3, name: 'Caramel Macchiato', price: 'Rp. 33.000', image: require('../../Photo/CaramelMacchiato.jpeg'), rating: 4.8, description: 'Espresso Dengan Tambahan Susu Kukus Dan Sirup Karamel' },
    { id: 4, name: 'Espresso', price: 'Rp. 35.000', image: require('../../Photo/Espresso.jpeg'), rating: 4.7, description: 'Minuman Rasa Kopi Yang Sangat Kuat Dan Pekat' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecommendations = coffeeRecommendations.filter(coffee =>
    coffee.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Define navigation type properly
  type RootStackParamList = {
    Home: undefined;
    DetailExample: { message: string; name: string; description: string; image: any; price: string; rating: number };
    Profile: undefined;
  };

  type DetailNavigationProps = NavigationProp<RootStackParamList, 'DetailExample'>;
  const navigation = useNavigation<DetailNavigationProps>();

  const handleProductPress = (product: any) => {
    navigation.navigate('DetailExample', {
      message: 'Product Details',
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      rating: product.rating,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Lokasi</Text>
          <Text style={styles.subLocationText}>Sukabumi, Indonesia</Text>
        </View>
        <Image source={require('../../Photo/profil.jpg')} style={styles.profileImage} />
      </View>

      {/* Bar Pencarian */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Cari Minuman"
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search"
        />
      </View>

      {/* Bagian Promo */}
      <View style={styles.bottomImageContainer}>
        <Image source={require('../../Photo/R.jpg')} style={styles.bottomImage} />
        <View style={styles.promoTextContainer}>
          <Text style={styles.promoTitle}>Promo</Text>
          <Text style={styles.promoSubtitle}>Beli satu dapat satu GRATIS</Text>
        </View>
      </View>

      {/* Horizontal ScrollView untuk rekomendasi kopi */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.recommendationsContainer}>
        {filteredRecommendations.map((coffee, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.recommendationItem, hoveredIndex === index && styles.hovered]}
            onPressIn={() => setHoveredIndex(index)}
            onPressOut={() => setHoveredIndex(null)}
            onPress={() => console.log(`Anda memilih ${coffee}`)}
          >
            <Text style={styles.recommendationText}>{coffee}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Kartu Produk */}
      <ScrollView style={styles.cardsScrollView}>
        <View style={styles.cardsContainer}>
          {products.map((product) => (
            <TouchableOpacity key={product.id} style={styles.verticalCard} onPress={() => handleProductPress(product)}>
              <View style={styles.imageContainer}>
                <Text style={styles.ratingText}>★ {product.rating}</Text>
                <Image source={product.image} style={styles.verticalCardImage} />
              </View>
              <View style={styles.cardDetails}>
                <Text style={styles.verticalCardTitle}>{product.name}</Text>
                <Text style={styles.descriptionText}>{product.description}</Text>
                <View style={styles.priceButtonContainer}>
                  <Text style={styles.verticalCardPrice}>{product.price}</Text>
                  <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Navigasi Bawah */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <Icon name="home" size={20} color="#A0522D" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="heart" size={24} color="#A0522D" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="shopping-cart" size={24} color="#A0522D" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" size={24} color="#A0522D" />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationContainer: {
    flex: 1,
    marginRight: 10,
  },
  locationText: {
    fontSize: 12,
    color: '#B7B7B7',
  },
  subLocationText: {
    fontSize: 14,
    color: '#555',
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: 'grey',
  },
  searchContainer: {
    marginVertical: 16,
  },
  searchBar: {
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    fontSize: 16,
  },
  bottomImageContainer: {
    position: 'static',
    marginBottom: 5,
    
  },
  bottomImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  promoTextContainer: {
    position: 'absolute',
    top: '50%',
    left: '0%',
    transform: [{ translateY: -50 }],
  },
  promoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  promoSubtitle: {
    fontSize: 16,
    color: '#FFF',
  },
  recommendationsContainer: {
    flexDirection: 'row',
    marginBottom:130,
    marginTop: 5,
  },
  recommendationItem: {
    height: 35,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 10,
    borderRadius: 30,
    backgroundColor: '#eccc68',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recommendationText: {
    marginTop: 0,
    textAlign: 'center',
    color: '#555',
  },
  hovered: {
    backgroundColor: '#eccc68',
  },
  cardsScrollView: {
    marginBottom: 16,
  },
  cardsContainer: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-around',
  },

  verticalCard: {
    backgroundColor: '#FFDBB5',
    borderRadius: 25,
    padding: 20,
    marginBottom: 20,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  imageContainer: {
    position: 'relative',
    width: 100,
    height: 100,
  },
  verticalCardImage: {
    width: '120%',
    height: 140,
    borderRadius: 10,
    marginBottom: 10,
  },
  ratingText: {
      fontSize: 14,
      color: '#Ffd700',
      position: 'absolute',
      top: 2,
      left: 2,
      zIndex: 1,
  },
  cardDetails: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 120, //beda
  },
  verticalCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 15,
  },
  descriptionText: {
    fontSize: 12,
    color: '#777',
    marginVertical: 2,
  },
  priceButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verticalCardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A0522D',
  },
  addButton: {
    backgroundColor: '#A0522D',
    padding:6,
    borderRadius: 8,
  },
  addButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#EEE',
    backgroundColor: '#FFF',
  },
  // hovered: {
  //   backgroundColor: '#F0E68C',
  // },
});

 