import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

import { connect } from "react-redux";
import { setIsAuth, setLoginError, setUsername } from "../../redux/actions";

import { useHistory } from "react-router-dom";

function LoginForm(props) {
    const { handleSubmit, register } = useForm();
    const history = useHistory();

    useEffect(() => {
        props.setLoginError({ loginError: false });
    }, [props]);

    const onSubmit = (data) => {
        if (data.login === data.password && data.password === "admin") {
            props.setUsername({ userName: data.login });
            props.setIsAuth({ isAuth: true });
            history.push("/");
        } else {
            props.setLoginError({ loginError: true });
            formRef.current.elements.login.value = formRef.current.elements.password.value =
                "";
        }
    };

    const formRef = useRef(null);

    return (
        <div
            className="login-form"
            style={{ width: "350px", margin: "0 auto" }}
        >
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
            {props.loginError && (
                <div
                    style={{
                        margin: "0 auto",
                        textAlign: "center",
                    }}
                    className="alert alert-danger"
                    role="alert"
                >
                    Wrong login/password!
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    loginError: state.loginError,
});

const mapDispatchToProps = (dispatch) => {
    return {
        setIsAuth(payload) {
            dispatch(setIsAuth(payload));
        },
        setLoginError(payload) {
            dispatch(setLoginError(payload));
        },
        setUsername(payload) {
            dispatch(setUsername(payload));
        },
    };
};

const ConnectedLoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default ConnectedLoginForm;
