import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { deleteClothe } from '../api';

const ProductItem = ({ item, navigation }) => {
  const [expanded, setExpanded] = useState(false);

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
    <TouchableOpacity onPress={() => setExpanded(!expanded)} activeOpacity={0.5}>
      <View style={[styles.card, expanded && styles.expandedCard]}>
          <Text style={styles.teamName}>{item.team}</Text>
        <View style={styles.cardBody}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.urlImg }} style={styles.image} />
          </View>
          {expanded && (
            <View style={styles.detailsContainer}>
              <Text style={styles.textItem}>Equipo: {item.team}</Text>
              <Text style={styles.textItem}>Precio: ${item.price}</Text>
              <Text style={styles.textItem}>Tamaño: {item.size}</Text>
              <Text style={styles.textItem}>Color: {item.color}</Text>
              <Text style={styles.textItem}>Existencias: {item.stock}</Text>
              <Text style={styles.textItem}>Temporada: {item.season}</Text>
              <Text style={styles.textItem}>Estado: {item.status}</Text>
            </View>
          )}
        </View>
        {expanded && (
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
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#6D90A6',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3, 
    minHeight: 100,
  },
  expandedCard: {
    minHeight: 200,
  },
  cardHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#BDC3C7',
    paddingBottom: 5,
    marginBottom: 5,
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 10,
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 5,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white', // Color blanco
  },
  textItem: {
    fontSize: 14,
    color: 'black',
    marginBottom: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '90%',
  },
  buttonEdit: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '35%',
  },
  buttonDelete: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '35%',
  },
  buttonText: {
    color: '#ECF0F1',
    fontWeight: 'bold',
  },
});

export default ProductItem;
