import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
          <TextInput placeholder='Item de lista'
         value={textItem}
          style={styles.inputView}/>
          <Button title='ADD'/>
      </View>
      <View style={styles.container}>
      <TextInput placeholder='Items' style={styles.inputView}/>
      <Button title='Agregar'/>
        {itemList.map(item => <View style={styles.itemList}><Text>{item.value}</Text></View>)}
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
