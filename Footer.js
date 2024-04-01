import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa el ícono que necesites

const Footer = () => {
  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/profile.php?id=100008252550294');
  };

  const handleGitHubPress = () => {
    Linking.openURL('https://github.com/Nefta11');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/nefth_07/');
  };

  const handleGmailPress = () => {
    Linking.openURL('mailto:neftaliarturohernandez@gmail.com');
  };

  return (
    <View style={{ alignItems: 'center', backgroundColor: '#c29ece', paddingVertical: 10 }}>
      <Text style={{ fontSize: 16, color: 'black' }}>Developed by Neft</Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity onPress={handleFacebookPress}>
          <Icon name="facebook" size={30} color="#1877F2" style={{ marginRight: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGitHubPress}>
          <Icon name="github" size={30} color="#181717" style={{ marginRight: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstagramPress}>
          <Icon name="instagram" size={30} color="#E4405F" style={{ marginRight: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGmailPress}>
          <Icon name="envelope" size={30} color="#EA4335" />
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 10, fontSize: 14 }}>
        &copy; 2024 NeftSports. Todos los derechos reservados.
      </Text>
    </View>
  );
};

export default Footer;
