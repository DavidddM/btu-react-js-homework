import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

function Form({ catList, handleOnSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // დანარჩენების ვალიდაცია ფორმაზევე მაქვს
        if (e.target.category.value === "initial") {
            alert("გთხოვთ აირჩიოთ კატეგორია!");
        } else {
            handleOnSubmit(
                e.target.title.value,
                e.target.imgUrl.value,
                parseInt(e.target.category.value)
            );
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-horizontal">
            <fieldset>
                <div className="form-group">
                    <label className="col-md-12 control-label">
                        დასახელება
                    </label>
                    <div className="col-md-12">
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="დასახელება"
                            className="form-control input-md"
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-12 control-label">
                        სურათის URL
                    </label>
                    <div className="col-md-12">
                        <input
                            id="imgUrl"
                            name="imgUrl"
                            type="text"
                            placeholder="URL"
                            className="form-control input-md"
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-12 control-label">კატეგორია</label>
                    <div className="col-md-12">
                        <select
                            id="category"
                            name="category"
                            className="form-control"
                        >
                            <option value="initial"></option>
                            {catList.length > 0
                                ? catList.map((category) => (
                                      <option value={category.id}>
                                          {category.name}
                                      </option>
                                  ))
                                : null}
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <button
                                id="singlebutton"
                                name="singlebutton"
                                className="btn btn-primary"
                            >
                                დამატება
                            </button>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    );
}

Form.propTypes = {
    catList: PropTypes.array.isRequired,
    handleOnSubmit: PropTypes.func,
};

export default Form;
