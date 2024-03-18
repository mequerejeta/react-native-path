import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import React  from 'react';
const ModalItem = (props) => {
    const {visible, onDelete, item} = props;

    if(!visible) return null;

    return(
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
);
};
const styles = StyleSheet.create({
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
})

export default ModalItem;