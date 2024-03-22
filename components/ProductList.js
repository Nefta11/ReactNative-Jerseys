import { View, FlatList, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import ClotheItem from './ClotheItem'; // Cambiado de ProductItem a ClotheItem
import { deleteClothe, getClothes } from '../api'; // Cambiado de deleteProduct y getProducts a deleteClothe y getClothes
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ClotheList = () => { // Cambiado de ProductList a ClotheList
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const [clothes, setClothes] = useState([]); // Cambiado de products a clothes

    const loadClothes = async () => { // Cambiado de loadProducts a loadClothes
        const data = await getClothes(); // Cambiado de getProducts a getClothes
        setClothes(data); // Cambiado de setProducts a setClothes
    };

    const deleteCloth = async (code) => { // Cambiado de deleteProd a deleteCloth
        const res = await deleteClothe(code); // Cambiado de deleteProduct a deleteClothe
        await loadClothes(); // Cambiado de loadProducts a loadClothes
        console.log(JSON.stringify(res));
    };

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadClothes(); // Cambiado de loadProducts a loadClothes
        setRefreshing(false);
    }, []);

    useEffect(() => {
        loadClothes(); // Cambiado de loadProducts a loadClothes
    }, []);

    const renderItem = ({ item }) => {
        return <ClotheItem item={item} deleteCloth={deleteCloth} navigation={navigation} />; 
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={clothes} 
                                renderItem={renderItem}
                keyExtractor={(item) => item.code} // Cambiado de barcode a code
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        colors={['#ffddd2']}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffd',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 20,
        marginTop: 1,
    },
});

export default ClotheList;
