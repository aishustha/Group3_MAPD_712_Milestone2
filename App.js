/*
Group 3

Web Techs - Mobile Platforms - MAPD 712 - 001
Instructor: Przemyslaw Pawluk

Date of Submission: 11/10/2021
Milestone: 3
*/

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screen/Home';
import AddPatientScreen from './screen/AddPatient';
import ListingScreen from './screen/Listing';
import AddPatientInfoScreen from './screen/AddPatientInfo';
import PatientInfoScreen from './screen/PatientInfo';
import ViewAllPatient from './screen/ViewAllPatient';
import ViewAllPatientRecords from './screen/ViewAllPatientRecords';

export const Stack = createNativeStackNavigator();

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
        <Stack.Screen name="AddPatientInfo" component={AddPatientInfoScreen} />
        <Stack.Screen name="PatientInfo" component={PatientInfoScreen} />
        <Stack.Screen name="ViewAllPatient" component={ViewAllPatient} />
        <Stack.Screen
          name="ViewAllPatientRecords"
          component={ViewAllPatientRecords}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
