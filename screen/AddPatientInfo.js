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

function AddPatientInfoScreen({navigation}) {
  let [patientInfo, setPatientInfo] = useState({}); // hook

  //text change functionhandlers
  function nameChangeHandler(name) {
    let newObject = {name: name};
    // do not lose previous state, instead overwrite on top of previous state
    // ... -> is called spread operator
    setPatientInfo({...patientInfo, ...newObject});
  }

  function weightChangeHandler(weight) {
    let weightobject = {weight: weight};
    setPatientInfo({...patientInfo, ...weightobject});
  }

  function heightChangeHandler(height) 
  {
    let heightobject = {height: height};
    setPatientInfo({...patientInfo, ...heightobject});
  }

  function bloodGChangeHandler(bloodgroup) 
  {
    let bloodgroupobject = {bloodgroup: bloodgroup};
    setPatientInfo({...patientInfo, ...bloodgroupobject});
  }

  function bloodPChangeHandler(bloodpressure) 
  {
    let bloodPobject = {bloodpressure: bloodpressure};
    setPatientInfo({...patientInfo, ...bloodPobject});
  }

  function respRChangeHandler(respiratoryrate) 
  {
    let respRobject = {respiratoryRate: respiratoryrate};
    setPatientInfo({...patientInfo, ...respRobject});
  }

  function bloodOChangeHandler(bloodoxygen) 
  {
    let bloodOobject = {bloodoxygen: bloodoxygen};
    setPatientInfo({...patientInfo, ...bloodOobject});
  }

  function heartrateChangeHandler(heartrate) 
  {
    let heartrateobject = {heartrate: heartrate};
    setPatientInfo({...patientInfo, ...heartrateobject});
  }

  function med1ChangeHandler(medicalcondition1) 
  {
    let med1object = {medicalcondition1:medicalcondition1};
    setPatientInfo({...patientInfo, ...med1object});
  }

  function med2ChangeHandler(medicalcondition2) 
  {
    let med2object = {medicalcondition2:medicalcondition2};
    setPatientInfo({...patientInfo, ...med2object});
  }

  function med3ChangeHandler(medicalcondition3) 
  {
    let med3object = {medicalcondition3:medicalcondition3};
    setPatientInfo({...patientInfo, ...med3object});
  }

  // make n/w calls here
  function submitPatientInfo() 
  {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(patientInfo);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

fetch("https://safe-fjord-88503.herokuapp.com/patient-info", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.wrapperContainer}>
        <Text style={styles.pageTitle}>Add Patient Info</Text>
        <Text style={styles.pageDesc}>Basic Information</Text>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Name</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Name"
            keyboardType="string"
            onChangeText={nameChangeHandler}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Weight</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Weight(Kg)"
            keyboardType="numeric"
            onChangeText={weightChangeHandler}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Height</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Height (ft)"
            keyboardType="numeric"
            onChangeText={heightChangeHandler}
          />
        </View>

        <Text style={styles.pageDesc}>Medical Information</Text>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Blood Group</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Blood Group"
            keyboardType="string"
            onChangeText={bloodGChangeHandler}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Blood Pressure</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Blood Pressure"
            keyboardType="string"
            onChangeText={bloodPChangeHandler}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Respiratory Rate</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Respiratory Rate"
            keyboardType="string"
            onChangeText={respRChangeHandler}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Blood Oxygen Level</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Blood Oxygen level"
            keyboardType="numeric"
            onChangeText={bloodOChangeHandler}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Heart Rate</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Heart Rate"
            keyboardType="numeric"
            onChangeText={heartrateChangeHandler}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Medical Condition 1</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Medical Condition"
            keyboardType="string"
            onChangeText={med1ChangeHandler}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Medical Condition 2</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Medical Condition"
            keyboardType="string"
            onChangeText={med2ChangeHandler}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>Medical Condition 3</Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Medical Condition"
            keyboardType="string"
            onChangeText={med3ChangeHandler}
          />
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            title="Add PatientInfo Screen"
            // onPress={() => navigation.navigate('Listing')}
            onPress={submitPatientInfo}>
            <Text style={styles.loginButtonBorder}>Done</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddPatientInfoScreen;

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
