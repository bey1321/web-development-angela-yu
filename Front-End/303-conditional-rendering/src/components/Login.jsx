import React from "react";
import Input from "./Input.jsx"

function Login(props){
    return (
        <div>
            <form className="form">
                <Input type="text" placeholder="username"/>
                <Input type="password" placeholder="password"/>
                {!props.isRegistered && <Input type="password" placeholder="confirm password"/>}
                <button type="submit">{props.isRegistered === true ? "Login" : "Register"}</button>
            </form>
        </div>
    )
}

export default Login;