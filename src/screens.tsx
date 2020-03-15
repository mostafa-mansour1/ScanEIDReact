import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  NativeComponent,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import { RNCamera } from 'react-native-camera';
import HomeComponent from './screens/home/home-component';
import CameraScanComponent from './screens/camera-scan/camera-scan-component';
import RegistrationComponent from './screens/registration/registration-component';
const parseMRZ = require('mrz').parse;


declare var global: { HermesInternal: null | {} };

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{ title: 'Home Page' }}
        />
        <Stack.Screen
          name="CameraScan"
          component={CameraScanComponent}
          options={{ title: 'Scan ID' }}
        />
        <Stack.Screen name="Registration"
          component={RegistrationComponent}
          options={{ title: 'Register' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;