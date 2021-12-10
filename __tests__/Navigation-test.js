import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
// import {NavigationContainer} from '@react-navigation/native';

// import App, {AppStack} from '../App';
import HomeScreen from '../screen/Home';

describe('Home Screen', () => {
  it('navigates to Patient Screen on button press', () => {
    const navigate = jest.fn();
    const {getByText} = render(<HomeScreen navigation={{navigate}} />);
    fireEvent.press(getByText('Add Patient')); // locate button
    expect(navigate).toHaveBeenCalledWith('Patient');
  });

  it('navigates to AddPatientInfo Screen on button press', () => {
    const navigate = jest.fn();
    const {getByText} = render(<HomeScreen navigation={{navigate}} />);
    fireEvent.press(getByText('Add Patient Info')); // locate button
    expect(navigate).toHaveBeenCalledWith('AddPatientInfo');
  });

  it('navigates to PatientInfo Screen on button press', () => {
    const navigate = jest.fn();
    const {getByText} = render(<HomeScreen navigation={{navigate}} />);
    fireEvent.press(getByText('View Patient Info')); // locate button
    expect(navigate).toHaveBeenCalledWith('PatientInfo');
  });

  it('navigates to ViewAllPatient Screen on button press', () => {
    const navigate = jest.fn();
    const {getByText} = render(<HomeScreen navigation={{navigate}} />);
    fireEvent.press(getByText('View All Patient')); // locate button
    expect(navigate).toHaveBeenCalledWith('ViewAllPatient');
  });

  it('navigates to ViewAllPatientRecords Screen on button press', () => {
    const navigate = jest.fn();
    const {getByText} = render(<HomeScreen navigation={{navigate}} />);
    fireEvent.press(getByText('View All Patient Records')); // locate button
    expect(navigate).toHaveBeenCalledWith('ViewAllPatientRecords');
  });
});
