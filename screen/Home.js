/*
Group 3

Web Techs - Mobile Platforms - MAPD 712 - 001
Instructor: Przemyslaw Pawluk

Date of Submission: 11/10/2021
Milestone: 3
*/

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.wrapperContainer}>
      <Text style={styles.title}>We Care</Text>
      {/* Login Button */}
      <View style={styles.AlignButtonContent}>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            title="Add Patient Screen"
            onPress={() => navigation.navigate('Patient')}>
            <Text style={styles.loginButtonBackground}>Login as a User</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            title="Add Patient Screen"
            onPress={() => navigation.navigate('Patient')}>
            <Text style={styles.loginButtonBorder}>
              Login In as a Caregiver
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

//styles
const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  title: {
    fontSize: 32,
    color: '#000',
    textAlign: 'center',
    position: 'absolute',
    top: '40%',
  },

  loginButtonBackground: {
    backgroundColor: '#000',
    padding: 16,
    paddingLeft: 48,
    paddingRight: 48,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 6,
    alignSelf: 'stretch',
    display: 'flex',
    width: '100%',
  },

  loginButtonBorder: {
    marginTop: 32,
    padding: 16,
    paddingLeft: 48,
    paddingRight: 48,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 6,
    alignSelf: 'stretch',
    display: 'flex',
    width: '100%',
    borderWidth: 1,
  },

  AlignButtonContent: {
    position: 'absolute',
    bottom: 48,
  },
});
