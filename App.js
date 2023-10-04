import React, {useState} from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import {colors} from './src/Utils/color'
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import {Focus} from './src/features/Focus';
import {Timer} from './src/features/Timer';
import {FocusHistory} from './src/features/FocusHistory'

// or any files within the Snack

export default function App() {
  const[currentSubject, setCurrentSubject] = useState(null)
  const[ history, setHistory] = useState([])
  return (
    <SafeAreaView style={styles.container}>
   {!currentSubject ? (
     <>
   <Focus addSubject={setCurrentSubject}/>
   <FocusHistory history={history}/>
   </>
   )
   : <Timer
   focusSubject={currentSubject}
   onTimerEnd={(subject)=>{setHistory([...history,subject])}}
   clearSubject={()=>{setCurrentSubject(null)}}
   />
     }
    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darckBlue,
  }
});
