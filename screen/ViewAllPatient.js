import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet, ScrollView} from 'react-native';

function ViewAllPatient({navigation}) {
  let [patientInfo, setPatientInfo] = useState([]);

  useEffect(() => {
    const URL = `https://safe-fjord-88503.herokuapp.com/patient-info`;
    const requestOptions = {
      method: 'GET',
    };

    fetch(URL, requestOptions)
      .then(response => response.json()) // must convert the response to json
      .then(result => {
        // handle success
        setPatientInfo(result);
        console.log('Successful', result);
      })
      .catch(err => {
        // handle error
        console.error('Something went wrong', err);
      });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.wrapperContainer}>
        <FlatList
          data={patientInfo}
          // keyExtractor={item.name}
          renderItem={({item}) => (
            <ScrollView style={styles.infoContainer}>
              <Text style={styles.title}>{item.name} </Text> 
              <Text style={styles.text}> Age:  {item.age} </Text> 
              <Text style={styles.text}> Height:  {item.height} </Text> 
              <Text style={styles.text}> Address: {item.address} </Text>
              <Text style={styles.text}> Contact Number: {item.contact_no} </Text>
              <Text style={styles.text}> Blood Group: {item.blood_group} </Text>
              <Text style={styles.text}> Remarks: {item.remarks} </Text>
            </ScrollView>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default ViewAllPatient;

const styles = StyleSheet.create({
  wrapperContainer: {
    backgroundColor: '#ffffff',
    padding: 24,
    height: '100%',
  },

  title : {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black'
  },
  text: {
      fontSize: 14,
      color: 'black'
  },

  infoContainer: {
      margin: 10
  }

});
