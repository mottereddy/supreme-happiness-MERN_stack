import React, { Component } from "react";
import LoginRegister from './LoginRegister';

//login page is the grandparent
// loginRegister is the parent component
//loginPopUp is the child for loginRegister
//loginRegisterPop is the child for loginRegister

class LoginPage extends Component {

    render() {
        return (
            <>
                <LoginRegister />
            </>
        )
    }
}
export default LoginPage;