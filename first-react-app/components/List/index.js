import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const index = () => {
    return (
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
    );
};
const styles =  StyleSheet.create({
    itemList: {
        backgroundColor: "#ccc",
        padding: 10,
        margin: 5
    },
});

export default index;