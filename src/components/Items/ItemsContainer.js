import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function ItemsContainer({ items, handleRemoval }) {
    return (
        <div className="container">
            {items.length > 0
                ? items.map((item) => (
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

ItemsContainer.propTypes = {
    items: PropTypes.array.isRequired,
    handleRemoval: PropTypes.func,
};

export default ItemsContainer;
