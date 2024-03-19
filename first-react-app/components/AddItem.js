import {Button, StyleSheet, TextInput, View} from "react-native";

const AddItem = () => {
    const { onChange, onAddItem, value } = props;
    return(
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder='Item de lista'
            value={value}
            style={styles.inputView}
            onChangeText= {onChange}/>
            <Button title='ADD' onPress={onAddItem}/>
        </View>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
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
export default AddItem;