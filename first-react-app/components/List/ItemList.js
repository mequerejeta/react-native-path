import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const ItemList = ({ id, value, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(id)}>
            <View style={styles.itemList}>
                <Text>{value}</Text>
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