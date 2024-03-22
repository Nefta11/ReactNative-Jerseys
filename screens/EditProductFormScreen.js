import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { updateProduct } from '../api';

const EditProductFormScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [product, setProduct] = useState({
    barcode: item?.barcode ?? '',
    description: item?.description ?? '',
    brand: item?.brand ?? '',
    cost: item?.cost ?? 0,
    price: item?.price ?? 0,
    expiredDate: item?.expiredDate ?? '',
    status: item?.status ?? 0,
    stock: item?.stock ?? 0
  });

  const handleChange = (name, value) => setProduct({ ...product, [name]: value });

  const handleSaveChanges = async () => {
    try {
      await updateProduct(product.barcode, product); 
      console.log("Cambios guardados exitosamente:", product);
      navigation.goBack(); 
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Producto</Text>
      <TextInput
        placeholder="Código de barras"
        onChangeText={(text) => handleChange('barcode', text)}
        style={styles.input}
        value={product.barcode}
      />
      <TextInput
        placeholder="Descripción"
        onChangeText={(text) => handleChange('description', text)}
        style={styles.input}
        value={product.description}
      />
      <TextInput
        placeholder="Marca"
        onChangeText={(text) => handleChange('brand', text)}
        style={styles.input}
        value={product.brand}
      />
      <TextInput
        placeholder="Precio de compra"
        keyboardType='numeric'
        onChangeText={(text) => handleChange('cost', text)}
        style={styles.input}
        value={product.cost.toString()}
      />
      <TextInput
        placeholder="Precio de venta"
        keyboardType='numeric'
        onChangeText={(text) => handleChange('price', text)}
        style={styles.input}
        value={product.price.toString()}
      />
      <TextInput
        placeholder="Fecha de caducidad"
        onChangeText={(text) => handleChange('expiredDate', text)}
        style={styles.input}
        value={product.expiredDate}
      />
      <TextInput
        placeholder="Existencias"
        keyboardType='numeric'
        onChangeText={(text) => handleChange('stock', text)}
        style={styles.input}
        value={product.stock.toString()}
      />
      <TextInput
        placeholder="Estado"
        keyboardType='numeric'
        onChangeText={(text) => handleChange('status', text)}
        style={styles.input}
        value={product.status.toString()}
      />
      <Button
        title="Guardar Cambios"
        onPress={handleSaveChanges}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffddd2",
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#e29578',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    color: '#fff',
    fontWeight: 'bold',
    width: '40%'
  },
});

export default EditProductFormScreen;
