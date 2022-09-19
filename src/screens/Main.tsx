import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {styles} from '../styles/globalStyles';

const Main = () => {
  const url1 = 'rndeeplinking://app/home';
  const url2 = 'rndeeplinking://app/detail/4/comming_from_openUrl_method';
  const url3 = 'rndeeplinking://app/setting';
  return (
    <View style={styles.contatiner}>
      <TouchableOpacity
        style={styles.mainBtnStyle}
        onPress={() => Linking.openURL(url1)}>
        <Text style={styles.btnText}>Deep Link to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mainBtnStyle}
        onPress={() => Linking.openURL(url2)}>
        <Text style={styles.btnText}>Deep Link to Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mainBtnStyle}
        onPress={() => Linking.openURL(url3)}>
        <Text style={styles.btnText}>Deep Link to Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mainBtnStyle}
        onPress={() => Linking.openURL('https:/google.com')}>
        <Text style={styles.btnText}>Open Public URL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
