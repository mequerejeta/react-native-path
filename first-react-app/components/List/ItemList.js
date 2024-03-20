import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const ItemList = ({ item, onHandlerDelete }) => {
    return (
        <TouchableOpacity onPress={() => onHandlerDelete(item.id)}>
            <View style={styles.itemList}>
                <Text>{item.value}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: "#ccc",
        padding: 10,
        margin: 5
    },
});

export default ItemList;