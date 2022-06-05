//https://www.youtube.com/watch?v=0kL6nhutjQ8
//https://www.youtube.com/watch?v=00HFzh3w1B8
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Settings, Button} from 'react-native';

const Setting= (props) => {
    return (
        //container
        <View> 
         <Text>setting page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#E2ECEB',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    circle: {
        width: 24,
        height: 24,
        backgroundColor: '#028476',
        borderRadius: 15,
        marginRight: 15
    },
    itemText: {
        fontSize: 18,
        maxWidth: '80%',
        width: '100%'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#E2ECEB',
        borderRadius: 60,
        borderColor: '#028476',
        borderWidth: 1,
        width: 250,
      },
      goal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      inputGoal: {
        padding: 5,
        backgroundColor: '#E2ECEB',
        borderRadius: 10,
        borderColor: '#028476',
        borderWidth: 1,
        width: '80%',
        marginLeft: 5
      },
      goalText: {
        fontSize: 18,
        paddingHorizontal: 5,
        borderColor: '#E2ECEB',
        borderWidth: 2,
        borderRadius: 5,
      }
});

export default Setting;