import React, {useState, useEffect} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, View} from 'react-native';
import Habit from './Habits'
export default function Habitpage() {
    const [habit, setHabit] = useState();
    const[habitItems, setHabitItems] = useState([]);
    const [currentDate, setCurrentDate] = useState();

 const handleAddHabit = () => {
    Keyboard.dismiss();
    setHabitItems([...habitItems, habit]);
    setHabit(null);
  }

  const deleteHabit = (index) => {
    let itemsCopy = [...habitItems];
    itemsCopy.splice(index, 1);
    setHabitItems(itemsCopy);
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
   <View style={styles.container}>
     
     <View style={styles.tasksWrapper}>
       <Text style={styles.sectionTitle}>Habits</Text>
       <Text style={styles.date}>Today's Date: {currentDate}</Text>
       <ScrollView style={styles.items}>
         {
           habitItems.map((item, index) => {
             return (
               <View key={index}> 
                 <View style={styles.circular}>
                     <Text style={styles.x} key={index} onPress={() => deleteHabit(index)}>X</Text>
                 </View>
                 <Habit text={item} />                              
               </View>
             )
           })
         }
       </ScrollView>
     </View>

     <KeyboardAvoidingView style={styles.writeTaskWrapper} behavior={Platform.OS == "ios" ? "padding" : "height"}>
         <TextInput style={styles.input} placeholder={'Write a habit'} value={habit} onChangeText={text => setHabit(text)}/>
         <TouchableOpacity onPress={() => handleAddHabit()}>
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
   backgroundColor: '#8AC8C7'
 },
 tasksWrapper: {
   paddingTop: 10,
   paddingHorizontal: 10,
   maxHeight: '89%',
   height: '100%',
   paddingBottom: 10
 },
 sectionTitle: {
   fontSize: 26,
   fontWeight: 'bold',
   color: '#242120',
   textAlign: 'center',
   borderRadius: 10,
   borderColor: '#028476',
   borderWidth: 2,
   backgroundColor: '#E2ECEB'
 },
 date: {
   color: '#242120',
   textAlign: 'center',
   padding: 10,
   borderRadius: 10,
   borderColor: '#028476',
   borderWidth: 2,
   marginTop: 10,
   backgroundColor: '#E2ECEB'
 },
 items: {
   marginTop: 10,
   backgroundColor: '#028476',
   padding: 10,
   borderRadius: 5,
 },
 writeTaskWrapper: {
   position: 'absolute',
   bottom: 10,
   width: '100%',
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
   paddingTop: 5
 },
 input: {
   paddingVertical: 10,
   paddingHorizontal: 15,
   backgroundColor: '#E2ECEB',
   borderRadius: 60,
   borderColor: '#028476',
   borderWidth: 1,
   width: 250,
 },
 addWrapper: {
   width: 50,
   height: 50,
   backgroundColor: '#E2ECEB',
   borderRadius: 60,
   justifyContent: 'center',
   alignItems: 'center',
   borderColor: '#028476',
   borderWidth: 1
 },
 addText: {
   color: '#028476',
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
 x: {
     color: '#242120',
     position: 'absolute',
     bottom: -8,
     left: -5
 }
});
