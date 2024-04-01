import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PrincipalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenido a nuestro mundo de <Text style={styles.bold}>Jerseys de Fútbol Únicos y de Calidad</Text>.
      </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://raw.githubusercontent.com/Nefta11/ReactNative-Jerseys/main/logo/logo.jpeg?' + new Date(),
          }}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.subtitle}>
        Sobre Nosotros:
      </Text>
      <Text style={styles.description}>
        Somos apasionados del fútbol y creemos que cada fanático merece un jersey que refleje su amor por el deporte. Nuestros jerseys son cuidadosamente seleccionados para ofrecerte calidad, estilo y autenticidad. Desde los equipos más grandes hasta los más pequeños, tenemos algo para todos.
      </Text>
      <Text style={styles.description}>
        Explora nuestra colección y encuentra el jersey perfecto para ti. ¡Únete a la comunidad de fanáticos del fútbol y viste con orgullo los colores de tu equipo favorito!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: '80%',
    height: 200,
    borderRadius: 20,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default PrincipalScreen;