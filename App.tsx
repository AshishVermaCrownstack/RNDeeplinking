/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Detail from './src/screens/Detail';

import Home from './src/screens/Home';
import Main from './src/screens/Main';
import Setting from './src/screens/Setting';

export type mainStackParamList = {
  Home: undefined;
  Detail: {
    personId: number;
  };
  Setting: undefined;
  Main: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<mainStackParamList>();

  const linking = {
    prefixes: ['rndeeplinking://app'],
    config: {
      screens: {
        Home: 'home',
        Detail: {
          path: 'detail/:personId/:message',
          parse: {
            personId: (v: any) => `${v}`,
            message: (m: string) => m,
          },
        },
        // Setting: 'setting',
        Main: 'main',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
