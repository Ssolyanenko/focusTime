import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedBottom';
import {spacing} from '../Utils/sizes'

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What you would you like to focus on?"
          onChangeText={(val) => setSubject(val)}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={spacing.xxl} onPress={()=>{addSubject(subject)}}  />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
  textInput: {
    flex: 1,
    marginRight: spacing.lg,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.md,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
