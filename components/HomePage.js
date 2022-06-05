import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Habits from './HabitsPage';
import Profile from './Profile';
import Setting from './Setting';
import Exercise from './Exercise';
import About from './About';
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
export default function HomePage() {

  const MyStack = () => {
    return (
      <NavigationContainer independent={true}>
        
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            headerStyle: { backgroundColor: '#028476' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#E2ECEB'
          }}>
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Habits" component={Habits} />
          <Stack.Screen name="Exercise" component={Exercise} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="About" component={About} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  const Menu = ({ navigation }) => {
    return (
        <View style={styles.menuItemContainer}>

          <View>
            <Text style={styles.welcomeText}>Welcome to LifeStyle Buddy!</Text>
          </View>

          <TouchableOpacity style={styles.menuItem} title="Habits"
              onPress={() =>
                navigation.navigate('Habits')
              }>
            <Text style={styles.menuItemText}>Habits</Text>
            <Ionicons name="add-circle" size={70}></Ionicons>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} title="Exercise"
              onPress={() =>
                navigation.navigate('Exercise')
              }>
            <Text style={styles.menuItemText}>Exercise</Text>
            <Ionicons name="barbell" size={70}></Ionicons>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} title="Profile"
              onPress={() =>
                navigation.navigate('Profile')
              }>
            <Text style={styles.menuItemText}>Profile</Text>
            <Ionicons name="body" size={70}></Ionicons>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} title="About" onPress={() =>
                navigation.navigate('About')
              }>
            <Text style={styles.menuItemText}>About</Text>
            <Ionicons name="help-circle" size={70}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.menuItemLogout}>Logout</Text>
        </View>
    );
  };
  return (
    <MyStack />)
}

const styles = StyleSheet.create({
  menuItemContainer: {
    flex: 1,
    padding: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#242120'

  },
  menuItem: {
    backgroundColor: '#028476',
    width: 120,
    height: 120,
    margin: 5,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#E2ECEB',
    borderRadius: 10
  },
  menuItemText: {
      textAlign: 'center',
      fontSize: 20,
      color: '#E2ECEB'
  }, 
  welcomeText: {
    marginBottom: 30,
    fontSize: 20,
    textAlign: 'center',
    color: '#E2ECEB'
  },
  menuItemLogout: {
    backgroundColor: '#028476',
    width: 250,
    height: 40,
    margin: 5,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 80,
    color: '#E2ECEB',
    borderRadius: 10
  },
});
