import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { insertProduct } from '../api';

const ProductFormScreen = ({ navigation }) => {
    const [product, setProduct] = useState({
        barcode: '',
        description: '',
        brand: '',
        cost: '',
        price:'',
        expiredDate: '',
        status: '',
        stock: ''
    });

    const handleChange = (name, value) => setProduct({ ...product, [name]: value });

    const handleEnviarFormulario = async () => {
        const res = await insertProduct(product);
        console.log(JSON.stringify(product));
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Nuevo Producto</Text>
            <TextInput
                placeholder="Código de barras"
                value={product.barcode}
                onChangeText={(text) => handleChange('barcode', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Descripción"
                value={product.description}
                onChangeText={(text) => handleChange('description', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Marca"
                value={product.brand}
                onChangeText={(text) => handleChange('brand', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Precio de compra"
                keyboardType='numeric'
                value={product.cost.toString()}
                onChangeText={(text) => handleChange('cost', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Precio de venta"
                keyboardType='numeric'
                value={product.price.toString()}
                onChangeText={(text) => handleChange('price', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Fecha de caducidad"
                value={product.expiredDate}
                onChangeText={(text) => handleChange('expiredDate', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Existencias"
                keyboardType='numeric'
                value={product.stock.toString()}
                onChangeText={(text) => handleChange('stock',text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Estado"
                keyboardType='numeric'
                value={product.status.toString()}
                onChangeText={(text) => handleChange('status', text)}
                style={styles.input}
            />
            <Button
                title="Guardar Producto"
                onPress={handleEnviarFormulario}
                style={styles.button}
            />
        </View>
    );
};

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
    textInputContainer: {
        marginBottom: 20,
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
    buttonText: {

    },
});

export default ProductFormScreen;
