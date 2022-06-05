//https://www.youtube.com/watch?v=0kL6nhutjQ8
//https://www.youtube.com/watch?v=00HFzh3w1B8

import React, { useState, useEffect } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, useColorScheme, View, KeyboardAvoidingViewBase, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Habits from './components/HabitsPage';
import Profile from './components/Profile';
import Setting from './components/Setting';
import Task from './components/Habits';
import HomePage from './components/HomePage';
import Exercise from './components/Exercise';


const Stack = createNativeStackNavigator();
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [currentDate, setCurrentDate] = useState();
  const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            headerStyle: { backgroundColor: 'teal' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#f8f8f8'
          }}>
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Habits" component={Habits} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Exercise" component={Exercise} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  const Menu = ({ navigation }) => {
    return (

      <View style={styles.container}>

        <View style={styles.menuItemContainer}>
          <Button style={styles.menuItem}
            title="Go to Profile Page"
            onPress={() =>
              navigation.navigate('Profile')
            }
          />
          <Button style={styles.menuItem}
            title="Go to Habits page"
            onPress={() =>
              navigation.navigate('Habits')
            }
          />
          <Button style={styles.menuItem}
            title="Go to 'Home' page"
            onPress={() =>
              navigation.navigate('Home')
            }
          />
          <Button style={styles.menuItem}
            title="Go to Exercise page"
            onPress={() =>
              navigation.navigate('Exercise')
            }
          />
        </View>
      </View>
    );
  };

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const deleteHabit = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  //https://stackoverflow.com/questions/1643320/get-month-name-from-date
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  //https://aboutreact.com/react-native-get-current-date-time/
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var m = new Date(); //current Month spelled out
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(monthNames[m.getMonth()] + ' ' + date + ' , ' + year);
  }, []);

  return (
    <MyStack />)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8AC8C7'
  },
  menuItem: {
    // backgroundColor: 'teal',
    // width: 120,
    // height: 120,
    // margin: 5,
    // textAlign: 'center',
    // alignItems: 'center',
    // fontSize: 20,
    // color: 'white',
    // borderRadius: 10
  },

  menuItemContainer: {
    // flex: 1,
    // padding: 50,
    // flexDirection: 'row',
    // flexWrap: 'wrap'

  },
});
