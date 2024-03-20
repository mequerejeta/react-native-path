import React, { useState } from "react";

import { FlatList } from "react-native";
import ItemList from "./ItemList";

const Index = () => {
    const [itemList, setItemList] = useState([]); 

 
    const onHandlerDelete = (id) => {
        const updatedItemList = itemList.filter(item => item.id !== id);
        setItemList(updatedItemList);
    };


    const renderItem = ({ item }) => (
        <ItemList item={item} onHandlerDelete={onHandlerDelete} />
    );

    return (
        <FlatList
            data={itemList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()} 
        />
    );
};

export default Index;