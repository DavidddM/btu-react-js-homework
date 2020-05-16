import React, { useEffect } from "react";
import { useAsyncGet } from "../../hooks/asyncGet";
import JokesComp from "../../components/JokesComp";
import "bootstrap/dist/css/bootstrap.css";
import propTypes from "prop-types";

function JokesCont({ cat, onOtherCatHandler }) {
  // ჰუკის სრულ პოტენციალს ვერ ვაიმპლემენტირებ დროის უქონლობის გამო
  const { asyncExecution, data } = useAsyncGet();

  useEffect(() => {
    asyncExecution("https://api.chucknorris.io/jokes/random?category="+cat);
  }, [asyncExecution, cat]);

  const onAnotherJokeHnadler = () => {
    asyncExecution("https://api.chucknorris.io/jokes/random?category="+cat);
  }

  return data && <JokesComp joke={data.value} cat={cat} onAnotherJokeHnadler={onAnotherJokeHnadler} onOtherCatHandler={onOtherCatHandler} />;
}

JokesCont.propTypes = {
  cat: propTypes.string.isRequired,
  onAnotherJokeHnadler: propTypes.func.isRequired,
};

export default JokesCont;
