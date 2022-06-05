import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Switch, Picker} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  //var data = ["Male", "Female"]
  const [gender, setGender]=useState("")
  // const [ageEnabled, setAgeEnabled] = useState(false);
  // const [genderEnabled, setGenderEnabled] = useState(false);
  // const [heightEnabled, setHeightEnabled] = useState(false);
  // const [weightEnabled, setWeightEnabled] = useState(false);
  // const toggleSwitch1 = () => setAgeEnabled(previousState => !previousState);
  // const toggleSwitch4 = () => setGenderEnabled(previousState => !previousState);
  // const toggleSwitch2 = () => setHeightEnabled(previousState => !previousState);
  // const toggleSwitch3 = () => setWeightEnabled(previousState => !previousState);
    return (
        <ScrollView style={styles.container}>
     
          <View style={styles.item}>
                    <Text style={styles.name}>User's Name</Text>
                   
                    <TouchableOpacity 
                      onPress={() =>
                        navigation.navigate('Setting')
                      }>
                      <Ionicons name="settings-outline" size={25}></Ionicons>
                  </TouchableOpacity>
          </View>
                      
          <Text style={styles.text}>Age:</Text>   
            {/* <Switch style={styles.toggle} trackColor={{ false: "#028476", true: "#028476" }}
                    thumbColor={ageEnabled ? "#242120" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    activeText={"On"}
                    value={ageEnabled}/>          */}
          <TextInput style={styles.itemText} placeholder={'Enter your Age'}></TextInput>


          <Text style={styles.text}>Height:</Text>   
            {/* <Switch style={styles.toggle} trackColor={{ false: "#028476", true: "#028476" }}
                  thumbColor={heightEnabled ? "#242120" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch2}
                  value={heightEnabled}/>         */}
          <TextInput style={styles.itemText} placeholder={'Enter your Height'}></TextInput>


          <Text style={styles.text}>Weight:</Text> 
            {/* <Switch style={styles.toggle} trackColor={{ false: "#028476", true: "#028476" }}
                  thumbColor={weightEnabled ? "#242120" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch3}
                  value={weightEnabled}/>           */}
          <TextInput style={styles.itemText} placeholder={'Enter your Weight'}></TextInput>


          <Text style={styles.text}>Gender:</Text>
            {/* <Switch style={styles.toggle} trackColor={{ false: "#028476", true: "#028476" }}
                  thumbColor={genderEnabled ? "#242120" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch4}
                  value={genderEnabled}/> */}
            
            <View style={styles.gender}>
              <Picker
                gender={gender}
                style={{ textAlign: 'center'}}
                onValueChange={(itemValue) => setGender(itemValue)}
              >
                <Picker.Item label="Female" value="F" />
                <Picker.Item label="Male" value="M" />
                <Picker.Item label="Other" value="O" />
              </Picker>
            </View>

            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8AC8C7',
  },
    item: {
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemText: {
        fontSize: 14,
        width: '40%',
        borderRadius: 10,
        borderColor: '#028476',
        borderWidth: 2,
        backgroundColor: '#E2ECEB',
        height: 40,
        margin: 5,
        padding: 5
    },
    name: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#242120',
      textAlign: 'center',
      borderRadius: 10,
      borderColor: '#028476',
      borderWidth: 2,
      backgroundColor: '#E2ECEB',
      padding: 5,
      width: '90%'
    },
    text: {
      margin: 5,
      fontSize: 18
    },
    saveButton: {
      backgroundColor: '#028476',
      // height: '10%',
      width: '40%',
      marginTop: 20,
      marginHorizontal: 110
    },
    saveText: {
      textAlign: 'center',
      padding: 10
    },
    gender: {
      width: '40%',
      borderRadius: 10,
      borderColor: '#028476',
      borderWidth: 2,
      backgroundColor: '#E2ECEB',
      height: 45,
      margin: 5,
    }
});

export default Profile;