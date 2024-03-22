import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { deleteClothe } from '../api'; // Asegúrate de importar deleteClothe

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
        <Image source={{ uri: item.urlImg }} style={styles.image} />
        <Text style={styles.textItem}>Código de barras: {item.code}</Text>
        <Text style={styles.textItem}>Equipo: {item.team}</Text>
        <Text style={styles.textItem}>Precio: {item.price}</Text>
        <Text style={styles.textItem}>Tamaño: {item.size}</Text>
        <Text style={styles.textItem}>Color: {item.color}</Text>
        <Text style={styles.textItem}>Existencias: {item.stock}</Text>
        <Text style={styles.textItem}>Temporada: {item.season}</Text>
        <Text style={styles.textItem}>Estado: {item.status}</Text>
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
    backgroundColor: '#6c4675',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  cardHeader: {
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardBody: {
    marginBottom: 5,
    alignItems: 'center',
  },
  textItem: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 3,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  buttonEdit: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  buttonDelete: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductItem;
