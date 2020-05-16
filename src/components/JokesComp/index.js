import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import utils from '../../utils';

const MainDiv = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 100px;
`;

const Btn = styled.button`
  width: 300px;
  margin-top: 20px;
`;

function JokesComp({ cat, joke, onAnotherJokeHnadler, onOtherCatHandler }) {
  return (
    <MainDiv className="col-xl-4 col-lg-6 col-md-8 col-sm-10">
      <h1>{utils.capitalize(cat)}</h1>
      {joke}
      <Btn className="btn btn-primary btn-block" onClick={onAnotherJokeHnadler}>
        Tell me another one!
      </Btn>
      <Btn className="btn btn-primary btn-block" onClick={onOtherCatHandler}>
        Lemme choose another category!
      </Btn>
    </MainDiv>
  );
}

JokesComp.propTypes = {
  cat: propTypes.string.isRequired,
  joke: propTypes.string.isRequired,
  onOtherCatHandler: propTypes.func.isRequired,
  onAnotherJokeHnadler: propTypes.func.isRequired,
};
export default JokesComp;
