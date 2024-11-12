import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, Image, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Pastikan mengimpor Icon jika belum

export default function CreateRecipes({ navigation }) {
  const [recipes, setRecipes] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  const [recipeInstructions, setRecipeInstructions] = useState('');
  const [user, setUser] = useState({});
  const [isAddingRecipe, setIsAddingRecipe] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://mocki.io/v1/40218e4c-4a98-408b-84f8-a8b77b6c2f31');
      if (response.ok) {
        const data = await response.json();
        setUser(data.users?.[0] || {});
        setRecipes(data.users[0]?.reseps || []);
      } else {
        console.error('Error: Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const addOrEditRecipe = () => {
    if (!recipeName || !recipeDescription || !recipeIngredients || !recipeInstructions) {
      Alert.alert("Error", "Please fill in all the fields.");
      return;
    }

    const newRecipe = {
      id: editIndex !== null ? recipes[editIndex].id : `${recipes.length + 1}`,
      name: recipeName,
      description: recipeDescription,
      ingredients: recipeIngredients,
      instructions: recipeInstructions,
    };

    if (editIndex !== null) {
      const updatedRecipes = [...recipes];
      updatedRecipes[editIndex] = newRecipe;
      setRecipes(updatedRecipes);
      setEditIndex(null);
    } else {
      setRecipes([...recipes, newRecipe]);
    }

    setRecipeName('');
    setRecipeDescription('');
    setRecipeIngredients('');
    setRecipeInstructions('');
    setIsAddingRecipe(false);
    Alert.alert("Success", editIndex !== null ? "Recipe updated successfully!" : "Recipe added successfully!");
  };

  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  };

  const startEditingRecipe = (index) => {
    const recipe = recipes[index];
    setRecipeName(recipe.name);
    setRecipeDescription(recipe.description);
    setRecipeIngredients(recipe.ingredients);
    setRecipeInstructions(recipe.instructions);
    setEditIndex(index);
    setIsAddingRecipe(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yuk Buat Resep Versi Kamu!</Text>

      <View style={styles.profileContainer}>
        <Image source={{ uri: user?.profile?.foto || 'https://linkfoto.com/foto.jpg' }} style={styles.profileImage} />
        <Text style={styles.profileName}>{user?.profile?.nama || 'Nama Pengguna'}</Text>
      </View>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.recipeItem}>
            <Text style={styles.recipeText}>{`${index + 1}. Name: ${item.name}`}</Text>
            <Text style={styles.recipeText}>Description: {item.description}</Text>
            <Text style={styles.recipeText}>Ingredients: {item.ingredients}</Text>
            <Text style={styles.recipeText}>Instructions: {item.instructions}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.editButton} onPress={() => startEditingRecipe(index)}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => deleteRecipe(index)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => setIsAddingRecipe(true)}>
        <Text style={styles.addButtonText}>Tambah Resep</Text>
      </TouchableOpacity>

      <Modal visible={isAddingRecipe} animationType="slide">
        <View style={styles.container}>
          <Text style={styles.header}>{editIndex !== null ? 'Edit Resep' : 'Tambah Resep Baru'}</Text>

          <TextInput
            placeholder="Recipe Name"
            value={recipeName}
            onChangeText={setRecipeName}
            style={styles.input}
          />
          <TextInput
            placeholder="Recipe Description"
            value={recipeDescription}
            onChangeText={setRecipeDescription}
            style={styles.input}
          />
          <TextInput
            placeholder="Ingredients"
            value={recipeIngredients}
            onChangeText={setRecipeIngredients}
            style={styles.input}
          />
          <TextInput
            placeholder="Instructions"
            value={recipeInstructions}
            onChangeText={setRecipeInstructions}
            style={styles.input}
            multiline
          />

          <TouchableOpacity style={styles.addButton} onPress={addOrEditRecipe}>
            <Text style={styles.addButtonText}>{editIndex !== null ? 'Update Recipe' : 'Add Recipe'}</Text>
          </TouchableOpacity>

          <Button title="Cancel" onPress={() => setIsAddingRecipe(false)} />
        </View>
      </Modal>

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
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#689F38',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  recipeItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  recipeText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#689F38',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  buttonText: {
    color: '#fff',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});
