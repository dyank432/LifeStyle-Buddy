import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Item = (props) => {

    return (
        <View style={styles.container}>

            <View style={styles.item}>
                <Text>{props.text}</Text>
                <View style={styles.itemRight}>
                    <Ionicons name="close-outline" size={30}></Ionicons>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

export default Item;