/*
Group 3

Web Techs - Mobile Platforms - MAPD 712 - 001
Instructor: Przemyslaw Pawluk

Date of Submission: 11/10/2021
Milestone: 3
*/

import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screen/Home';
import AddPatientScreen from './screen/AddPatient';
import ListingScreen from './screen/Listing';
import AddPatientInfoScreen from './screen/AddPatientInfo';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          //unique identity
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="Patient" component={AddPatientScreen} />
        <Stack.Screen name="Listing" component={ListingScreen} />
        <Stack.Screen name="PatientInfo" component={AddPatientInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
