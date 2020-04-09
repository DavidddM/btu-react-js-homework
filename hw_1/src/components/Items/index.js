import React from "react";
import ItemsContainer from "./ItemsContainer";

function Items({ items, handleRemoval }) {
    return <ItemsContainer items={items} handleRemoval={handleRemoval} />;
}

export default Items;
