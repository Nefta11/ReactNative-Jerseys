import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const ProductItem = ({ item, deleteProd, navigation }) => {
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
          onPress={() => deleteProd(item.code)}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e29578',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
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
  },
  cardBody: {
    marginBottom: 5,
  },
  textItem: {
    fontSize: 14,
  },
  image: {
    width: 100, // ajustar según tus necesidades
    height: 100, // ajustar según tus necesidades
    resizeMode: 'cover', // ajustar según tus necesidades
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonEdit: {
    backgroundColor: '#A2A4A0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '30%',
  },
  buttonDelete: {
    backgroundColor: '#F1480F',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '30%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductItem;
