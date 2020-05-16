import React, { useContext, useState } from "react";
import "./App.css";
import CategoriesCont from "./containers/CategoriesCont";
import LoginForm from "./components/LoginForm";
import JokesCont from "./containers/JokesCont";
import { AuthContext } from "./context/authContext";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const [showComp, setShowComp] = useState("cats");
  const [cat, setCat] = useState("cats");

  const onClickHandler = ({ target }) => {
    if (isAuthenticated) {
      setCat(target.id);
      setShowComp("joke");
    } else {
      alert("ჩაკ ნორისზე ხუმრობის სანახავად (მიუხედავად იმისა, რომ ეს ხუმრობები 2010 წლის შემდეგ არარელევანტურია), გთხოვთ გაიროთ ავტორიზაცია!");
    }
  };

  const onOtherCatHandler = () => {
    setShowComp("cats")
  }

  return (
    <div className="App">
      {!isAuthenticated && <LoginForm />}
      {showComp.toString() === "cats" && (
        <CategoriesCont onClickHandler={onClickHandler} />
      )}
      {isAuthenticated && showComp.toString() === "joke" && (
        <JokesCont cat={cat} onOtherCatHandler={onOtherCatHandler}/>
      )}
    </div>
  );
}

export default App;
