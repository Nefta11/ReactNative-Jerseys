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
    <View style={{ alignItems: 'center', backgroundColor: '#254559', paddingVertical: 5 }}>
      <Text style={{ fontSize: 16, color: 'black' }}>Developed by Neft</Text>
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <TouchableOpacity onPress={handleFacebookPress}>
          <Icon name="facebook" size={20} color="#1877F2" style={{ marginRight: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGitHubPress}>
          <Icon name="github" size={20} color="#181717" style={{ marginRight: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstagramPress}>
          <Icon name="instagram" size={20} color="#E4405F" style={{ marginRight: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGmailPress}>
          <Icon name="envelope" size={20} color="#EA4335" />
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 5, fontSize: 12 }}>
        &copy; 2024 NeftSports.
      </Text>
    </View>
  );
};

export default Footer;
