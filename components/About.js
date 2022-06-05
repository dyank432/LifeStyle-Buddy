import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const About = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>COMP 3504</Text>
            <Text style={styles.text}>Created by:</Text>
            <Text style={styles.text}>Daniel Yankov, Randy Lam, Yuan T. Zhou, Lidiya Artemenko</Text>
            <Text style={styles.text}>Using React Native</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242120',
    },
    text: {
        marginTop: 50,
        color: '#E2ECEB',
        textAlign: 'center'
    },

});

export default About;