import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackparamList = {
  DetailExample: {
    message: string;
    name: string;
    description: string;
    image: any; // Mengambil gambar dari HomeScreen
    price: string;
    rating: number;
  };
  Order: {
    name: string;
    image: any; // Mengambil gambar untuk halaman Order
    price: string;
  };
};

type DetailExampleProps = {
  route: RouteProp<RootStackparamList, 'DetailExample'>;
  navigation: NativeStackNavigationProp<RootStackparamList, 'DetailExample'>;
};

const DetailExample: React.FC<DetailExampleProps> = ({route, navigation}) => {
  const {name, description, image, price, rating} = route.params;
  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <View style={styles.container}>
      {/* Mengganti gambar statis dengan gambar yang diterima dari route.params */}
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{description}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>⭐ {rating}</Text>
        <Text style={styles.ratingCount}>(230)</Text>
      </View>
      <Text style={styles.description}>
        Kopi hangat dengan sentuhan krim lembut dan sirup karamel, menciptakan perpaduan sempurna antara rasa manis dan pahit yang menyegarkan.
      </Text>
      <Text style={styles.readMore}>Read More</Text>
      <View style={styles.sizeContainer}>
        <TouchableOpacity
          style={[styles.sizeButton, selectedSize === 'S' && styles.selectedSize]}
          onPress={() => handleSizeSelection('S')}>
          <Text style={styles.sizeText}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sizeButton, selectedSize === 'M' && styles.selectedSize]}
          onPress={() => handleSizeSelection('M')}>
          <Text style={styles.sizeText}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sizeButton, selectedSize === 'L' && styles.selectedSize]}
          onPress={() => handleSizeSelection('L')}>
          <Text style={styles.sizeText}>L</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.priceAndButtonContainer}>
        <Text style={styles.price}>Price {price}</Text>
        <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Order', {name, image, price})}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FDE8E8',
    flexGrow: 1,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 380,
    borderRadius: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#4B3C30',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 7,
    color: '#4B3C30',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  rating: {
    fontSize: 16,
    color: '#FFA500',
  },
  ratingCount: {
    fontSize: 16,
    color: '#4B3C30',
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: '#4B3C30',
    marginVertical: 3,
  },
  readMore: {
    fontSize: 14,
    color: '#ffb6c1',
    marginVertical: 2,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 1,
  },
  sizeButton: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#F8C794',
    borderColor: '#000',
    borderRadius: 5,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedSize: {
    backgroundColor: '#D8AE7E',
    borderColor: '#4B3C30',
  },
  sizeText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  priceAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B3C30',
  },
  buyButton: {
    backgroundColor: '#ffc107',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 50,
    borderWidth: 1,
  },
  buyButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DetailExample;
