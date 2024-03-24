import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { deleteClothe } from '../api';

const ProductItem = ({ item, navigation }) => {
  const handleDelete = async () => {
    try {
      const response = await deleteClothe(item.code);
      console.log(response); // Imprime la respuesta para depuración
      // Aquí puedes agregar código para actualizar la lista de productos después de eliminar uno
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.urlImg }} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.textItem}>Código de barras: {item.code}</Text>
          <Text style={styles.textItem}>Equipo: {item.team}</Text>
          <Text style={styles.textItem}>Precio: {item.price}</Text>
          <Text style={styles.textItem}>Tamaño: {item.size}</Text>
          <Text style={styles.textItem}>Color: {item.color}</Text>
          <Text style={styles.textItem}>Existencias: {item.stock}</Text>
          <Text style={styles.textItem}>Temporada: {item.season}</Text>
          <Text style={styles.textItem}>Estado: {item.status}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => {
            navigation.navigate('EditProductFormScreen', { item: item });
          }}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={handleDelete}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E5E7E9',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3, // Agregar sombra en Android
    shadowColor: '#000', // Agregar sombra en iOS
    shadowOffset: { width: 0, height: 2 }, // Agregar sombra en iOS
    shadowOpacity: 0.25, // Agregar sombra en iOS
    shadowRadius: 3.84, // Agregar sombra en iOS
  },
  cardHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#BDC3C7',
    paddingBottom: 5,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 5,
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 1,
  },
  textItem: {
    fontSize: 14,
    color: '#34495E',
    marginBottom: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  buttonEdit: {
    backgroundColor: '#3498DB',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  buttonDelete: {
    backgroundColor: '#E74C3C',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  buttonText: {
    color: '#ECF0F1',
    fontWeight: 'bold',
  },
});

export default ProductItem;
