import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Switch } from 'react-native';
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
        status: '', // Inicializado como cadena vacía
    });

    const handleChange = (name, value) => setClothe({ ...clothe, [name]: value });

    const handleEnviarFormulario = async () => {
        const res = await insertClothe(clothe);
        console.log(JSON.stringify(clothe));
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
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
                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>Estado:</Text>
                    <Switch
                        value={clothe.status === '1'} // Verificamos si el estado es '1'
                        onValueChange={(value) => handleChange('status', value ? '1' : '0')} // Convertimos a '1' o '0' dependiendo del valor del Switch
                    />
                </View>
                <Button
                    title="Guardar Jersey"
                    onPress={handleEnviarFormulario}
                    style={styles.button}
                    color="#F2B950"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#D0E5F2',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#2A4FBF',
        borderRadius: 10,
        marginBottom: 30,
        padding: 20,
        alignItems: 'center',
        elevation: 3, 
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#ffffff',
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#6c4675',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: '#ffffff',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    switchLabel: {
        fontSize: 16,
        color: '#ffffff',
    },
    button: {
        backgroundColor: '#F2B950',
        padding: 15,
        borderRadius: 5,
        color: '#000000',
        fontWeight: 'bold',
        width: '100%',
    },
});

export default ProductFormScreen;
