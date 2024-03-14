import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
          <TextInput placeholder='Item de lista' style={styles.inputView}/>
          <Button title='ADD'/>
      </View>
      <View style={styles.container}>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  inputView: {
    width: 200,
    borderBottomColor: 'black', 
    borderBottomWidth:1
  }

});
