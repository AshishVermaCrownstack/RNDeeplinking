import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const Main = () => {
    const url1 = 'rndeeplinking://app/home';
    const url2 = 'rndeeplinking://app/detail/3';
    const url3 = 'rndeeplinking://app/setting';
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#007aff',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
          margin: 5,
        }}
        onPress={() => Linking.openURL(url1)}>
        <Text style={{fontSize: 20, color: '#fff'}}>Deep Link to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#007aff',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
          margin: 5,
        }}
        onPress={() => Linking.openURL(url2)}>
        <Text style={{fontSize: 20, color: '#fff'}}>Deep Link to Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#007aff',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
          margin: 5,
        }}
        onPress={() => Linking.openURL(url3)}>
        <Text style={{fontSize: 20, color: '#fff'}}>Deep Link to Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#007aff',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
          margin: 5,
        }}
        onPress={() => Linking.openURL('https://reactnative.dev/')}>
        <Text style={{fontSize: 20, color: '#fff'}}>Open Public URL</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Main