import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Switch } from "react-native";
import { updateClothe } from "../api";

const EditClotheFormScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [clothe, setClothe] = useState({
    urlImg: item?.urlImg ?? "",
    code: item?.code ?? "",
    team: item?.team ?? "",
    price: item?.price ?? "",
    size: item?.size ?? "",
    color: item?.color ?? "",
    stock: item?.stock ?? "",
    season: item?.season ?? "",
    status: item?.status ?? 0, // Default status to 0
  });

  const handleChange = (name, value) => setClothe({ ...clothe, [name]: value });
  const handleSaveChanges = async () => {
    try {
      const response = await updateClothe(clothe.code, clothe);
      console.log("Response:", response);
      const data = JSON.parse(response);
      console.log("Cambios guardados exitosamente:", data);
      navigation.goBack();
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Editar Jersey</Text>
        <TextInput
          placeholder="URL de la imagen"
          value={clothe.urlImg}
          onChangeText={(text) => handleChange("urlImg", text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Código de barras"
          value={clothe.code}
          onChangeText={(text) => handleChange("code", text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Equipo"
          value={clothe.team}
          onChangeText={(text) => handleChange("team", text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Precio"
          keyboardType="numeric"
          value={clothe.price.toString()}
          onChangeText={(text) => handleChange("price", text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Tamaño"
          value={clothe.size}
          onChangeText={(text) => handleChange("size", text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Color"
          value={clothe.color}
          onChangeText={(text) => handleChange("color", text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Existencias"
          keyboardType="numeric"
          value={clothe.stock.toString()}
          onChangeText={(text) => handleChange("stock", text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Temporada"
          value={clothe.season}
          onChangeText={(text) => handleChange("season", text)}
          style={styles.input}
        />
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Estado</Text>
          <Switch
            value={clothe.status === 1}
            onValueChange={(value) => handleChange("status", value ? 1 : 0)}
          />
        </View>

        <Button
          title="Guardar Cambios"
          onPress={handleSaveChanges}
          style={styles.button}
          color="#000000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#D0E5F2',
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#6D90A6',
    borderRadius: 10,
    marginBottom: 30,
    padding: 20,
    alignItems: 'center',
    elevation: 3, 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#ffffff",
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: "#6c4675",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "#ffffff",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 5,
    color: "#000000",
    fontWeight: "bold",
    width: "40%",
  },
});


export default EditClotheFormScreen;
