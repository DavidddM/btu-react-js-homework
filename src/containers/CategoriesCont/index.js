import React, { useEffect } from "react";
import { useAsyncGet } from "../../hooks/asyncGet";
import CategoriesComp from "../../components/CategoriesComponent";
import propTypes from "prop-types";

function CategoriesCont({ onClickHandler }) {
  // ჰუკის სრულ პოტენციალს ვერ ვაიმპლემენტირებ დროის უქონლობის გამო
  const { asyncExecution, data } = useAsyncGet();

  useEffect(() => {
    asyncExecution("categories");
  }, [asyncExecution]);

  return data && <CategoriesComp data={data} onClickHandler={onClickHandler} />;
}

CategoriesComp.propTypes = {
  onClickHandler: propTypes.func.isRequired,
};

export default CategoriesCont;
