import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';

function AddPatientScreen({navigation}) {
  let [patientAdded, setPatientAdded] = useState({}); //hook

  function nameHandler(name) {
    let newName = {name: name};
    setPatientAdded({...patientAdded, ...newName});
  }

  function emailHandler(email) {
    let newEmail = {email: email};
    setPatientAdded({...patientAdded, ...newEmail});
  }

  function addressHandler(address) {
    let newAddress = {address: address};
    setPatientAdded({...patientAdded, ...newAddress});
  }

  function phoneHandler(phone) {
    let newPhone = {phone: phone};
    setPatientAdded({...patientAdded, ...newPhone});
  }

  function emergencyHandler(emergency) {
    let newEmergency = {emergency: emergency};
    setPatientAdded({...patientAdded, ...newEmergency});
  }

  // const registerPatient = () => {
  //   () => navigation.navigate('Listing');
  //   Alert.alert('Success', 'Patient Registered Successfully', [{text: 'OK'}]);
  // };

  function registerPatient() {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify(patientAdded);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://safe-fjord-88503.herokuapp.com/patient-info', requestOptions)
      .then(response => response.text())
      .then(result => {
        Alert.alert('Success', 'Patient Registered Successfully', [
          {text: 'OK'},
        ]);
        console.log(result);
      })
      .catch(error => {
        Alert.alert('Error', 'Something went wrong', [{text: 'OK'}]);
        console.log('error', error);
      });
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.wrapperContainer}>
        <Text style={styles.pageTitle}>Add New Patients</Text>
        <Text style={styles.pageDesc}>Basic Information</Text>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Name</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Name"
            keyboardType="default"
            onChangeText={nameHandler}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Email</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Email"
            keyboardType="default"
            onChangeText={emailHandler}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Address</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Address"
            keyboardType="default"
            onChangeText={addressHandler}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Phone</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Phone"
            keyboardType="default"
            onChangeText={phoneHandler}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Emergency Contact</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Emergency Contact"
            keyboardType="default"
            onChangeText={emergencyHandler}
          />
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            title="Add Patient Screen"
            onPress={registerPatient}>
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
