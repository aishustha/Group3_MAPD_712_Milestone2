import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';

function ViewAllPatientRecords({navigation}) {
  let [patientInfo, setPatientInfo] = useState([]);

  useEffect(() => {
    const URL = `https://safe-fjord-88503.herokuapp.com/patient-test/`;
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

  const filterUsers = () => {
    console.log('@filterUsers');

    const filteredUsers = patientInfo.filter(
      i => i.heartBeatRate < 50 || i?.respiratoryRate < 70,
    );
    setPatientInfo(filteredUsers);
  };

  return (
    <SafeAreaView>
      <View style={styles.wrapperContainer}>
        <Button
          title="View Critical Uers"
          onPress={filterUsers}
          style={styles.button}
        />
        <FlatList
          data={patientInfo}
          // keyExtractor={item.name}
          renderItem={({item}) => (
            <ScrollView style={styles.infoContainer}>
              <Text style={styles.title}>{item.name} </Text>
              <Text style={styles.text}>
                ID: {item.id}
              </Text>
              <Text style={styles.text}>
                bloodPressure: {item.bloodPressure}
              </Text>
              <Text style={styles.text}>
                respiratoryRate: {item.respiratoryRate}
              </Text>
              <Text style={styles.text}>
                heartBeatRate: {item.heartBeatRate}
              </Text>
            </ScrollView>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default ViewAllPatientRecords;

const styles = StyleSheet.create({
  wrapperContainer: {
    backgroundColor: '#ffffff',
    padding: 24,
    height: '100%',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },

  infoContainer: {
    margin: 10,
  },
});
