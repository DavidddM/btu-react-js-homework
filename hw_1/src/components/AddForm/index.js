import React from "react";
import AddCategory from "./Form";

function AddForm({ catList, handleOnSubmit }) {
    return (
        <div className="centerForm">
            <AddCategory catList={catList} handleOnSubmit={handleOnSubmit} />
        </div>
    );
}

export default AddForm;
