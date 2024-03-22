import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProductFormScreen from "./screens/ProductFormScreen";
import HomeScreen from "./screens/HomeScreen";
import EditProductFormScreen from "./screens/EditProductFormScreen";
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
            headerTitle: () => (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ fontWeight: "bold", color: "white", fontSize: 28 }}
                >
                  NefSports®
                </Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: "black",
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ProductFormScreen")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginRight: 15,
                    color: "white",
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
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="EditProductFormScreen"
          component={EditProductFormScreen}
          options={{
            title: "Editar producto",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
