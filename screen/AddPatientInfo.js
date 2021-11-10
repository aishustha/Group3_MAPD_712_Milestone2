import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView, ScrollView,
} from 'react-native';

function AddPatientInfoScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.wrapperContainer}>
        <Text style={styles.pageTitle}>Add Patient Info</Text>
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
            Weight
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Weight(Kg)"
            keyboardType="numeric"
          />
        </View>

        
        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Height
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Height (ft)"
            keyboardType="numeric"
          />
        </View>



        <Text style={styles.pageDesc}>Medical Information</Text>



        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Blood Group
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Blood Group"
            keyboardType="string"
          />
        </View>


        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Blood Pressure
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Blood Pressure"
            keyboardType="string"
          />
        </View>


        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Respiratory Rate
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Respiratory Rate"
            keyboardType="string"
          />
        </View>


        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Blood Oxygen Level
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Blood Oxygen level"
            keyboardType="numeric"
          />
        </View>


        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Heart Rate
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Heart Rate"
            keyboardType="numeric"
          />
        </View>


        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Medical Condition 1
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Medical Condition"
            keyboardType="string"
          />
        </View>


        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Medical Condition 2
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Medical Condition"
            keyboardType="string"
          />
        </View>


        <View style={styles.inputContent}>
          <Text style={styles.textfieldTitle}>
            Medical Condition 3
          </Text>
          <TextInput
            style={styles.textfieldInput}
            placeholder="Your Medical Condition"
            keyboardType="string"
          />
        </View>


        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            title="Add PatientInfo Screen"
            onPress={() => navigation.navigate('Listing')}>
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
