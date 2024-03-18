import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import React , {useState} from 'react';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const onHandlerChangeItem = (t) => setTextItem(t)
const addItem = () => {
  setItemList(currentItems => [
  ...currentItems, {id: Math.random().toString(), value: textItem}
  ])
  const onHandlerDelete = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }
  const onHandlerModal = id => {
    setItemSelected(itemList.filter(item => item.id === id)[0])
    setModalVisible(!modalVisible)
  }
}
  return (
    <View style={styles.screen}>
        <View style={styles.container}>
          <TextInput placeholder='Item de lista'
            value={textItem}
           style={styles.inputView}
            onChangeText= {onHandlerChangeItem}/>
           <Button title='ADD' onPress={addItem}/>
        </View>
        <View style={styles.container}>
          <TextInput placeholder='Items' 
          style={styles.inputView}
          onChangeText= {onHandlerChangeItem}/>
          <Button title='Agregar' onPress={addItem}/>
          {itemList.map(item => <View style={styles.itemList}><Text>{item.value}</Text></View>)}
        </View>
        <View style={styles.container}>
           <FlatList
           data={itemList}
           renderItem={data => (
            <TouchableOpacity onPress={onHandlerDelete.bind(this, data.item, id)}>
              <View style={styles.itemList}>
                <Text>{data.item.value}</Text>
              </View>
            </TouchableOpacity>
           )}
           keyExtractor={(item) => item.id}
           />
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
  },
 
});
