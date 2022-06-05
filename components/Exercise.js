import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Item from './Item';

export default function Exercise() {
    const Tab = createMaterialTopTabNavigator();

    return (

        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={{
                    "tabBarActiveTintColor": "#E2ECEB",
                    tabBarLabelStyle: { fontSize: 10 },
                    tabBarStyle: {
                        flex: 0.12,
                        backgroundColor: '#242120',
                        height: 70,
                        justifyContent: 'center',
                    },
                }}

            >
                <Tab.Screen name="Mon" component={MondayScreen} />
                <Tab.Screen name="Tue" component={TuesdayScreen} />
                <Tab.Screen name="Wed" component={WednesdayScreen} />
                <Tab.Screen name="Thu" component={ThursdayScreen} />
                <Tab.Screen name="Fri" component={FridayScreen} />
                <Tab.Screen name="Sat" component={SaturdayScreen} />
                <Tab.Screen name="Sun" component={SundayScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function MondayScreen() {
    return (
        generateScreenTemplate());
}

function TuesdayScreen() {
    return (
        generateScreenTemplate());
}

function WednesdayScreen() {
    return (
        generateScreenTemplate());
}

function ThursdayScreen() {
    return (
        generateScreenTemplate());

}

function FridayScreen() {
    return (
        generateScreenTemplate());
}

function SaturdayScreen() {
    return (
        generateScreenTemplate());

}

function SundayScreen() {
    return (
        generateScreenTemplate());
}

function generateScreenTemplate() {
    const [exercise, setExercise] = useState();
    const [exerciseArr, setExerciseArr] = useState([]);

    const handleAddItem = () => {
        Keyboard.dismiss();
        setExerciseArr([...exerciseArr, exercise])
        setExercise(null);
    }

    const deleteExercise = (index) => {
        let copy = [...exerciseArr];
        copy.splice(index, 1);
        setExerciseArr(copy);
    }

    return (
        <View style={styles.container}>
            <View style={styles.itemWrapper}>
                <Text style={styles.containerText}>Workout Planner:</Text>
                <ScrollView style={styles.items}>
                    {
                        exerciseArr.map((exercise, index) => {
                            return (
                                <View key={index}>
                                    <View style={styles.circular}>
                                        <Text style={styles.x} key={index} onPress={() => deleteExercise(index)}>X</Text>
                                    </View>                                       
                                    <Item text={exercise} />
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardWrapper}>

                <TextInput style={styles.input} placeholder={'Enter an exercise'} value={exercise} onChangeText={text => setExercise(text)} />
                
                <TouchableOpacity onPress={() => handleAddItem()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#8AC8C7',
    },

    itemWrapper: {
        paddingTop: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        maxHeight: '83%',
        height: '100%',
    },

    containerText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#242120',
        textAlign: 'center',
        borderRadius: 10,
        borderColor: '#028476',
        borderWidth: 2,
        backgroundColor: '#E2ECEB'
    },

    items: {
        marginTop: 10,
        backgroundColor: '#028476',
        padding: 10,
        borderRadius: 5,
    },

    keyboardWrapper: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 5,

    },

    input: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#E2ECEB',
        borderRadius: 60,
        borderColor: '#028476',
        borderWidth: 1,
        width: 250,
        height:50
    },

    addWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#E2ECEB',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#028476',
        borderWidth: 1,
        marginRight: 15
    },
    addText: {
        color: '#028476',
      },
      x: {
        color: '#242120',
        position: 'absolute',
        bottom: -8,
        left: -5
    },
    circular: {
        position: 'relative',
        bottom: -20,
        left: 300,
        width: 12,
        height: 12,
        borderColor: '#028476',
        borderWidth: 9,
        borderRadius: 9,
        opacity: 0.3,
        zIndex: 1
    },
    // unused for now

    // titleText: {
    //     fontSize: 32,
    //     textAlign: 'center',
    //     color: 'white'

    // },

    // titleContainer: {
    //     backgroundColor: 'teal',

    // },

    // menuItemContainer: {
    //     flex: 1,
    //     marginTop: 25,
    //     flexDirection: 'row',
    //     flexWrap: 'wrap'

    // },


    // menuItemText: {
    //     fontSize: 20,
    //     color: 'white',
    //     marginRight: 160
    // },

    // menuItem: {
    //     backgroundColor: 'teal',
    //     width: '100%',
    //     fontSize: 20,
    //     color: 'white',
    //     padding: 10
    // },

    // menuItemWorkoutPlanner: {
    //     backgroundColor: 'teal',
    //     width: '100%',
    //     fontSize: 20,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     color: 'white',
    //     padding: 10
    // },

    // welcomeText: {
    //     marginTop: 25,
    //     fontSize: 20,
    //     textAlign: 'center',
    //     color: 'white'

    // },
});
