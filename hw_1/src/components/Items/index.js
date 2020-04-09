import React from "react";
import ItemsContainer from "./ItemsContainer";
import PropTypes from "prop-types";

function Items({ items, handleRemoval }) {
    return <ItemsContainer items={items} handleRemoval={handleRemoval} />;
}

Items.propTypes = {
    items: PropTypes.array.isRequired,
    handleRemoval: PropTypes.func,
};

export default Items;
