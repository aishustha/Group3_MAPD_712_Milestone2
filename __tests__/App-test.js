import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

import App, {AppStack} from '../App';

describe('Stack', () => {
  it('renders the correct screen', async () => {
    const {getByText} = render(
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>,
    );
    await waitFor(() => getByText('We Care')); // check text on screen
  });
});
