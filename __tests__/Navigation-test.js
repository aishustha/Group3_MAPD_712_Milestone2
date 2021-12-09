import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

import App, {Stack} from '../App';

// Screens
// import HomeScreen from '../screen/Home';
// import AddPatientScreen from './screen/AddPatient';
// import ListingScreen from './screen/Listing';
// import AddPatientInfoScreen from './screen/AddPatientInfo';
// import PatientInfoScreen from './screen/PatientInfo';
// import ViewAllPatient from './screen/ViewAllPatient';
// import ViewAllPatientRecords from './screen/ViewAllPatientRecords';

describe('Stack', () => {
  it('renders the correct screen', async () => {
    const {getByText} = render(
      <NavigationContainer>
        <Stack />
      </NavigationContainer>,
    );
    await waitFor(() => getByText('Home'));
  });
});
