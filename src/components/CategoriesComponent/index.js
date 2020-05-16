import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import utils from '../../utils';

const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const CatDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border: 0;
    cursor: pointer;
  }
  border: 1px solid #d5d5d5;
  width: 200px;
  height: 100px;
  margin: 5px;
  font-size: 20px;
`;

function CategoriesComp({ data, onClickHandler }) {
  return (
    <div className="centerContentDiv">
      <MainContainer className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
        {data.length > 0 &&
          data.map((s) => (
            <CatDiv
              id={s}
              key={s}
              onClick={onClickHandler}
            >
              {utils.capitalize(s)}
            </CatDiv>
          ))}
      </MainContainer>
    </div>
  );
}

CategoriesComp.propTypes = {
  data: propTypes.array.isRequired,
  onClickHandler: propTypes.func.isRequired,
};

export default CategoriesComp;
