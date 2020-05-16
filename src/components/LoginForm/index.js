import React, { useRef, useContext } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../context/authContext";

function LoginForm() {
  const { login } = useContext(AuthContext);
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    if (data.login === data.password && data.password === "admin") {
      login();
    }
  };

  const formRef = useRef(null);

  return (
    <div className="login-form">
      <form method="post" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <h2 className="text-center">Log in</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            required="required"
            name="login"
            id="login"
            ref={register}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required="required"
            name="password"
            id="password"
            ref={register}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
