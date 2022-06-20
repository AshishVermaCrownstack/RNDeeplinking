/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Detail from './src/screens/Detail';

import Home from './src/screens/Home';
import Main from './src/screens/Main';
import Setting from './src/screens/Setting';


export type mainStackParamList = {
  Home: undefined,
  Detail: {
    personId:number
  },
  Setting: undefined,
  Main:undefined
}

const App = () => {

  const Stack = createNativeStackNavigator<mainStackParamList>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };



  const linking = {
    prefixes: ['rndeeplinking://app'], 
    config: {
      screens: {
        Home: 'home',
        Detail: {
          path: 'detail/:personId',
          parse:{
            personId: (personId: any) => `${personId}`
          }
        },
        Setting:'setting',
        Main:'main'
      }
    }
  };

  return (
      <NavigationContainer linking={linking} >
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Detail' component={Detail}/>
          <Stack.Screen name='Setting' component={Setting}/>
          <Stack.Screen name='Main' component={Main}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
