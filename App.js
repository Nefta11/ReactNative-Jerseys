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
<View style={{ backgroundColor: "#F2B950", alignItems: "center", paddingTop: 45, paddingBottom: 10 }}>
                <Text style={{ fontWeight: "bold", color: "#000", fontSize: 28 }}>NefSports®</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 10 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("PrincipalScreen")} style={{ paddingHorizontal: 60 }}>
                    <Text style={{ fontSize: 18, color: "#000" }}>Inicio</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("ProductFormScreen")} style={{ paddingHorizontal: 60 }}>
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
            title: "Agregar un nuevo jersey",
            headerStyle: {
              backgroundColor: "#F2B950",
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
              backgroundColor: "#F2B950",
            },
            headerTitleStyle: { fontWeight: "bold", color: "#000" },
            headerTintColor: "#F2B950",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="PrincipalScreen"
          component={PrincipalScreen}
          options={{
            title: "¡ Bienvenido a NefSports® ! ",
            headerStyle: {
              backgroundColor: "#F2B950",
            },
            headerTitleStyle: { fontWeight: "bold", color: "#000", fontSize: 28, },
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
