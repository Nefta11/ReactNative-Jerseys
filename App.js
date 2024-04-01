import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ProductFormScreen from "./screens/ProductFormScreen";
import EditProductFormScreen from "./screens/EditProductFormScreen";
import PrincipalScreen from "./screens/PrincipalScreen";
import Footer from "./Footer";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            header: () => (
              <View style={{ backgroundColor: "rgb(194, 158, 206)", alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ fontWeight: "bold", color: "#000", fontSize: 28 }}>NefSports®</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 10 }}>
                  <TouchableOpacity onPress={() => alert("Navigate to Products")} style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 18, color: "#000" }}>Productos</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("ProductFormScreen")} style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 18, color: "#000" }}>Nuevo</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ),
            headerShown: true,
          })}
        />
        <Stack.Screen
          name="ProductFormScreen"
          component={ProductFormScreen}
          options={{
            title: "Agregar producto",
            headerStyle: {
              backgroundColor: "rgb(194, 158, 206)",
            },
            headerTitleStyle: { fontWeight: "bold", color: "#000" },
            headerTintColor: "#000",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="EditProductFormScreen"
          component={EditProductFormScreen}
          options={{
            title: "Editar producto",
            headerStyle: {
              backgroundColor: "rgb(194, 158, 206)",
            },
            headerTitleStyle: { fontWeight: "bold", color: "#000" },
            headerTintColor: "#000",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="PrincipalScreen"
          component={PrincipalScreen}
          options={{
            title: "Principal",
            headerStyle: {
              backgroundColor: "rgb(194, 158, 206)",
            },
            headerTitleStyle: { fontWeight: "bold", color: "#000" },
            headerTintColor: "#000",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

export default App;
