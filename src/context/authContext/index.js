import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  login() {},
  logOut() {},
});

const AuthContextComponent = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const loginHandler = () => {
    localStorage.setItem("token", Math.floor(Math.random() * 1000000000000));
    setIsAuth(true);
  };
  const logOutHandler = () => {
    localStorage.setItem("token", false);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuth,
        login() {
          loginHandler();
        },
        logOut() {
          logOutHandler();
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextComponent;
