import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScreenNavigationProps } from './Home'

const Setting = ({navigation}:ScreenNavigationProps) => {
  return (
    <View style={{height:'100%'}}>
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:24, margin:20}}>This is Settings Screen</Text>
      </View>
      <TouchableOpacity style={{
            backgroundColor: '#007aff',
            paddingHorizontal: 30,
            paddingVertical: 5,
            borderRadius: 5,
            margin:20,
            marginBottom:50
          }} 
        onPress={()=> navigation.navigate('Main')}>
              <Text style={{fontSize: 20, color: '#fff', textAlign:'center'}}>Go to Main screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Setting