import React, { useState } from "react";

import { FlatList } from "react-native";
import ItemList from "./ItemList";

const Index = ({itemList, onHandlerModal}) => {
    return (
        <FlatList
            data={itemList}
            renderItem={({item}) => (
                <ItemList
                id={item.id}
                value={item.value}
                onPress={onHandlerModal}
        />
         )}
        keyExtractor={(item) => item.id.toString()} 
        />
    );
};

export default Index;