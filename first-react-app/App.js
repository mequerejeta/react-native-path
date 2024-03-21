import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import React , {useState} from 'react';

import AddItem from './components/AddItem';
import Index from './components/List';
import ModalComponent from './components/ModalComponent';
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
        <ModalComponent 
        visible={modalVisible}
        onDelete={onHandlerDelete.bind(this, itemSelected.id)}
        item={itemSelected}
        />
       
        <View style={styles.container}>
          <AddItem 
          onChange= {onHandlerChangeItem}
          onAddItem={addItem}
          value={textItem}
          />
          <Button title='Agregar' onPress={addItem}/>
          {itemList.map(item => <View style={styles.itemList}><Text>{item.value}</Text></View>)}
        </View>
        <View style={styles.container}>
          <Index/>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
  }
 
 
});
