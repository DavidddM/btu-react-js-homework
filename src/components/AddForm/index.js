import React from "react";
import PropTypes from "prop-types";
import AddCategory from "./Form";

function AddForm({ catList, handleOnSubmit }) {
    return (
        <div className="centerForm">
            <AddCategory catList={catList} handleOnSubmit={handleOnSubmit} />
        </div>
    );
}

AddForm.propTypes = {
    catList: PropTypes.array.isRequired,
    handleOnSubmit: PropTypes.func,
};

export default AddForm;
