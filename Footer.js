import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

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
      <Text style={{ fontSize: 16, color: 'black' }}>Developed by NeftaSiu</Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity onPress={handleFacebookPress}>
          <Text style={{ color: '#1877F2', marginRight: 10 }}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGitHubPress}>
          <Text style={{ color: '#181717', marginRight: 10 }}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstagramPress}>
          <Text style={{ color: '#E4405F', marginRight: 10 }}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGmailPress}>
          <Text style={{ color: '#EA4335' }}>Gmail</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 10, fontSize: 14 }}>
        &copy; 2024 NeftSports. Todos los derechos reservados.
      </Text>
    </View>
  );
};

export default Footer;
