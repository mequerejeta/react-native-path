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
        <Modal animationType= "slide"
        visible={modalVisible}
        >
          <View style={styles.modalTitle}>
              <Text>Mi Modal</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text>Esta seguro que desea borrar?</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text style={styles.modalItem}>{itemSelected.value}</Text>
          </View>
          <View style={styles.modalButton}>
            <Button onPress={onHandlerDelete.bind(this, itemSelected.id)} title="CONFIRM"/>
            </View>
        </Modal>
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
  modalTitle: {
    backgroundColor: '#ccc',
    color: 'white',
    fontSize: 18
  },
  modalMessage: {
    marginBottom: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalButton: {
    marginTop: 15
  },
  modalItem: {
    fontSize: 30
  }
});
