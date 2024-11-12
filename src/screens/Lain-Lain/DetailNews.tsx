import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { RouteProp, useRoute, NavigationProp, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

type DetailNewsRouteProp = RouteProp<{
  DetailNews: {
    message: string;
    image: string;
    title: string;
    description: string;
    source: string;
    detail: string;
    time: string;
  };
}, 'DetailNews'>;

const { width, height } = Dimensions.get('window');

const DetailNews = () => {
  const route = useRoute<DetailNewsRouteProp>();
  const navigation = useNavigation<NavigationProp<any>>();

  const {
    message,
    image,
    title,
    description,
    source,
    detail,
    time,
  } = route.params;

  return (
    <View style={styles.container}>
      {/* Gambar di bagian atas */}
      <Image source={image} style={styles.image} />

      {/* Card menu di bawah gambar */}
      <View style={styles.card}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.title}>{title}</Text>

        {/* ScrollView hanya pada bagian teks di dalam card */}
        <ScrollView style={styles.textScroll}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.detail}>{detail}</Text>
        </ScrollView>

        {/* Informasi sumber dan waktu */}
        <View style={styles.infoContainer}>
          <Text style={styles.source}>{source}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>

        {/* Tombol Kembali */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#FFFFFF" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: height * 0.3,
    resizeMode: 'cover',
  },
  card: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    marginTop: -20,
  },
  message: {
    fontSize: 16,
    color: '#689F38',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textScroll: {
    maxHeight: height * 0.25,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  detail: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginTop: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  source: {
    color: '#689F38',
    fontSize: 14,
  },
  time: {
    color: '#689F38',
    fontSize: 14,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#689F38',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default DetailNews;
