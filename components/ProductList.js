import { View, FlatList, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import ClotheItem from './ClotheItem'; 
import { deleteClothe, getClothes } from '../api'; 
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ClotheList = () => { 
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const [clothes, setClothes] = useState([]); 

    const loadClothes = async () => {
        const data = await getClothes(); 
        setClothes(data);
    };

    const deleteCloth = async (code) => { 
        const res = await deleteClothe(code); 
        await loadClothes(); 
        console.log(JSON.stringify(res));
    };

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadClothes(); 
        setRefreshing(false);
    }, []);

    useEffect(() => {
        loadClothes(); 
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
