import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView, ScrollView,
} from 'react-native';

function AddPatientScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.wrapperContainer}>
        <Text style={styles.pageTitle}>Add New Patients</Text>
        <Text style={styles.pageDesc}>Basic Information</Text>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Name
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Name"
            keyboardType="string"
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Email
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Email"
            keyboardType="string"
          />
        </View>

        
        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Address
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Address"
            keyboardType="string"
          />
        </View>



        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Phone
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Phone"
            keyboardType="string"
          />
        </View>


        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Emergency Contact
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Emergency Contact"
            keyboardType="string"
          />
        </View>


        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            title="Add Patient Screen"
            onPress={() => navigation.navigate('Listing')}>
            <Text style={styles.loginButtonBorder}>Register Patient</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddPatientScreen;

//styles
const styles = StyleSheet.create({
  wrapperContainer: {
    backgroundColor: '#ffffff',
    padding: 24,
    height: '100%',
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  pageDesc: {
    fontSize: 18,
    color: '#000',
    marginTop: 8,
  },
  loginButtonBorder: {
    marginTop: 32,
    marginBottom: 56,
    padding: 16,
    paddingLeft: 40,
    paddingRight: 40,
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

  textfieldTitle: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#000',
  },

  textfieldInput: {
    borderWidth: 1,
    borderColor: '#D0D3D9',
    padding: 12,
    fontSize: 18,
    marginTop: 16,
    letterSpacing: 2,
    borderRadius: 6,
  },

});
