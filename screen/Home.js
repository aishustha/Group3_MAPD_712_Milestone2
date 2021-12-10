/*
Group 3

Web Techs - Mobile Platforms - MAPD 712 - 001
Instructor: Przemyslaw Pawluk

Date of Submission: 11/10/2021
Milestone: 3
*/

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.wrapperContainer}>
      <Text style={styles.title}>We Care</Text>
      {/* Login Button */}
      <View style={styles.AlignButtonContent}>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            title="Add Patient"
            onPress={() => navigation.navigate('Patient')}>
            <Text style={styles.loginButtonBackground}>Add Patient</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            title="Add PatientInfo Screen"
            onPress={() => navigation.navigate('AddPatientInfo')}>
            <Text style={styles.loginButtonBorder}>Add Patient Info</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            title="View Patient Info"
            onPress={() => navigation.navigate('PatientInfo')}>
            <Text style={styles.loginButtonBorder}>View Patient Info</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            title="View All Patient"
            onPress={() => navigation.navigate('ViewAllPatient')}>
            <Text style={styles.loginButtonBorder}>View All Patient</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            title="View All Patient"
            onPress={() => navigation.navigate('ViewAllPatientRecords')}>
            <Text style={styles.loginButtonBorder}>
              View All Patient Records
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
    top: '30%',
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
