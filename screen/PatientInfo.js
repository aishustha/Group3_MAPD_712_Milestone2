import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';

function PatientInfoScreen({navigation}) {
  let [patientInfo, setPatientInfo] = useState({}); // hook
  let [patientId, setPatientId] = useState({}); // hook

  const patientIdInputOnChange = patientId => {
    setPatientId(patientId);
  };

  // make the api call here
  const fetchPatientInfo = () => {
    const URL = `https://safe-fjord-88503.herokuapp.com/patient-test/${patientId}`;
    const requestOptions = {
      method: 'GET',
    };

    fetch(URL, requestOptions)
      .then(response => response.json()) // must convert the response to json
      .then(result => {
        // handle success
        setPatientInfo(result);
        console.log('Everything went well\n', result);
      })
      .catch(err => {
        // handle error
        console.error('Something went wrong', err);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.wrapperContainer}>
        <Text style={styles.pageTitle}>Get Patient Info</Text>

        <View style={styles.inputContent}>
          {/* <Text style={styles.textfieldTitle}>Enter Patient ID</Text> */}
          <TextInput
            style={styles.textfieldInput}
            placeholder="Patient ID"
            keyboardType="numeric"
            onChangeText={patientIdInputOnChange}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            title="Add PatientInfo Screen"
            onPress={fetchPatientInfo}>
            <Text style={styles.loginButtonBorder}>Fetch</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.pageDesc}>Patient Information</Text>
          <Text style={styles.textfieldTitle}>ID:{patientInfo?.id}</Text>
          <Text style={styles.textfieldTitle}>Name:{patientInfo?.name}</Text>
          <Text style={styles.textfieldTitle}>Name:{patientInfo?.name}</Text>
          <Text style={styles.textfieldTitle}>
            bloodPressure:{patientInfo?.bloodPressure}
          </Text>
          <Text style={styles.textfieldTitle}>
            respiratoryRate:{patientInfo?.respiratoryRate}
          </Text>
          <Text style={styles.textfieldTitle}>
            heartBeatRate:{patientInfo?.heartBeatRate}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PatientInfoScreen;

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
    backgroundColor: '#000',
    marginTop: 32,
    marginBottom: 56,
    padding: 16,
    paddingLeft: 40,
    paddingRight: 40,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#fff',
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
