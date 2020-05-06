import React from "react";
import PropTypes from "prop-types";


function Item({ item, handleRemoval }) {
    return (
        <div className="itemDiv">
            <div className="handleBar">
                <span onClick={() => handleRemoval(item)} className="removeX">
                    ⓧ
                </span>
            </div>
            <div className="itemContent">
                <div className="itemImg">
                    <img src={item.imgUrl} alt=""/>
                </div>
                <div className="itemInfo">
                    <div className="itemTitle">{item.name}</div>
                    <div className="itemCat">{item.categoryName}</div>
                </div>
            </div>
        </div>
    );
}

Item.propTypes = {
    items: PropTypes.object.isRequired,
    handleRemoval: PropTypes.func,
};

export default Item;
