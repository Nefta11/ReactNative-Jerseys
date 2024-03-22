import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { insertClothe } from '../api';

const ProductFormScreen = ({ navigation }) => {
    const [clothe, setClothe] = useState({
        urlImg: '',
        code: '',
        description: '',
        team: '',
        price: '',
        size: '',
        color: '',
        stock: '',
        season: '',
        status: '',
    });

    const handleChange = (name, value) => setClothe({ ...clothe, [name]: value });

    const handleEnviarFormulario = async () => {
        const res = await insertClothe(clothe);
        console.log(JSON.stringify(clothe));
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Nuevo Jersey</Text>
            <TextInput
                placeholder="URL de la imagen"
                value={clothe.urlImg}
                onChangeText={(text) => handleChange('urlImg', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Código de barras"
                value={clothe.code}
                onChangeText={(text) => handleChange('code', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Equipo"
                value={clothe.team}
                onChangeText={(text) => handleChange('team', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Precio"
                keyboardType='numeric'
                value={clothe.price.toString()}
                onChangeText={(text) => handleChange('price', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Tamaño"
                value={clothe.size}
                onChangeText={(text) => handleChange('size', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Color"
                value={clothe.color}
                onChangeText={(text) => handleChange('color', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Existencias"
                keyboardType='numeric'
                value={clothe.stock.toString()}
                onChangeText={(text) => handleChange('stock', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Temporada"
                value={clothe.season}
                onChangeText={(text) => handleChange('season', text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Estado"
                keyboardType='numeric'
                value={clothe.status.toString()}
                onChangeText={(text) => handleChange('status', text)}
                style={styles.input}
            />
            <Button
                title="Guardar Jersey"
                onPress={handleEnviarFormulario}
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
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
        borderColor: '#6c4675',
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
