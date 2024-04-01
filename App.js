import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProductFormScreen from "./screens/ProductFormScreen";
import HomeScreen from "./screens/HomeScreen";
import EditProductFormScreen from "./screens/EditProductFormScreen";
import Footer from "./Footer";
import { View, Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "rgb(194, 158, 206)",
            },
            headerTitle: () => (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontWeight: "bold", color: "#000", fontSize: 28 }}
                >
                  NefSports®
                </Text>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ProductFormScreen")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginRight: 15,
                    color: "#000",
                  }}
                >
                  Nuevo
                </Text>
              </TouchableOpacity>
            ),
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
            headerTitleAlign: "center"
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
            headerTitleAlign: "center"
          }}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

export default App;
