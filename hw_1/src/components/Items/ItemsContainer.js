import React from "react";

import Item from "./Item";

function ItemsContainer({ items, handleRemoval }) {
    return (
        <div className="container">
            {items.length > 0
                ? items
                      .sort((a, b) => (a.categoryId > b.categoryId ? 1 : -1))
                      .map((item) => (
                          <Item
                              key={item.id}
                              item={item}
                              handleRemoval={handleRemoval}
                          />
                      ))
                : null}
        </div>
    );
}

export default ItemsContainer;
