import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';

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
            <Text>
              {item.name}, {item.age}
            </Text>
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
});
