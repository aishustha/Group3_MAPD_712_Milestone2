import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

// screens
import HomeScreen from '../screen/Home';

// test('renders correctly', () => {
//   // renderer.create(<App />);

//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// describe('App', () => {
//   it('renders app stack', async () => {
//     const {getByText} = render(<App />);
//     await waitFor(() => getByText('Screen 1'));
//   });
// });

describe('Home', () => {
  it('navigates on button press', () => {
    const navigate = jest.fn();
    const {getByText} = render(<HomeScreen navigation={{navigate}} />);

    // locate button
    fireEvent.press(getByText('Add Patient Screen'));
    expect(navigate).toHaveBeenCalledWith('Patient');
  });
});
