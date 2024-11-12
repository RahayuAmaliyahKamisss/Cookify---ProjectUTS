import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

type DetailRecipesRouteProp = RouteProp<{
  DetailRecipes: {
    message: string;
    name: string;
    description: string;
    image: any;
    ingredients: string[];
    instructions: string[];
    cookingTime: string;
    difficultyLevel: string;
    servings: string;
  };
}, 'DetailRecipes'>;

const { width, height } = Dimensions.get('window');

const DetailRecipes = ({ navigation }) => {
  const route = useRoute<DetailRecipesRouteProp>();
  const { 
    message, 
    name, 
    description, 
    image, 
    ingredients, 
    instructions, 
    cookingTime, 
    difficultyLevel, 
    servings, 
  } = route.params;

  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      {/* Gambar di bagian atas */}
      <Image source={image} style={styles.image} />
    
      {/* Tombol Like di atas gambar */}
      <TouchableOpacity style={styles.likeButton} onPress={handleLikePress}>
        <Icon name="heart" size={24} color={isLiked ? 'red' : 'white'} />
      </TouchableOpacity>
    
      {/* Card menu di bawah gambar */}
      <View style={styles.card}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.name}>{name}</Text>
      
        {/* Informasi Cooking Time, Difficulty Level, dan Servings berdampingan */}
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Icon name="clock-o" size={20} color="#A0522D" />
            <Text style={styles.infoText}>{cookingTime}</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="trophy" size={20} color="#A0522D" />
            <Text style={styles.infoText}>{difficultyLevel}</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="cutlery" size={20} color="#A0522D" />
            <Text style={styles.infoText}>{servings}</Text>
          </View>
        </View>
      
        {/* ScrollView hanya pada bagian teks di dalam card */}
        <ScrollView style={styles.textScroll}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.sectionTitle}>Bahan - Bahan:</Text>
          {ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredientText}>{ingredient}</Text>
          ))}
          <Text style={styles.sectionTitle}>Cara Membuat:</Text>
          {instructions.map((step, index) => (
            <Text key={index} style={styles.instructionText}>
              {`${index + 1}. ${step}`}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF' 
  },
  image: { 
    width: width, 
    height: height * 0.5, 
    position: 'absolute', 
    top: -50, left: 0 
  },
  likeButton: { 
    position: 'absolute', 
    top: 20, 
    right: 20, 
    zIndex: 1 
  },
  card: { 
    flex: 1, 
    marginTop: height * 0.4, 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    backgroundColor: '#FFF', 
    padding: 20, 
    elevation: 5 
  },
  message: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#777', 
    marginBottom: 10, 
    textAlign: 'center' 
  },
  name: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    textAlign: 'center' 
  },
  description: { 
    fontSize: 16, 
    textAlign: 'center', 
    color: '#555', 
    marginBottom: 10 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333', 
    marginTop: 10 
  },
  ingredientText: { 
    fontSize: 16, 
    color: '#555', 
    marginLeft: 10 
  },
  instructions: { 
    fontSize: 16, 
    textAlign: 'center', 
    color: '#555', 
    marginBottom: 10 
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  infoText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#555',
  },
  instructionText: { 
    fontSize: 16, 
    color: '#555', 
    marginVertical: 5, 
    lineHeight: 22 
  },  
  textScroll: {
    maxHeight: 300,
    marginVertical: 10,
  },
});

export default DetailRecipes;
