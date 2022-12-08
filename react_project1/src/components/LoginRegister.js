import React, { Component } from "react";
import LoginPopUp from "./LoginPopUp";
import LoginRegisterPopUp from "./LoginRegisterPopUp";

class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popCard: null,
            registerDetails: {},
            loginDetails: {},
        }

    }

    eventClose = (event) => {
        this.setState({ popCard: null })
    }

    loginPopUp = () => {
        this.setState({ popCard: <LoginPopUp eventClose={this.eventClose} /> })
    }
    registerOpen = () => {
        this.setState({ popCard: <LoginRegisterPopUp eventClose={this.eventClose} /> })
    }

    render() {
        return (
            <div className="toggleBtn-popUp">
                <div className="btn-page">
                    <button onClick={this.loginPopUp} id="btn-size">login</button>
                    <button onClick={this.registerOpen} id="btn-size">Register</button>
                </div>
                {this.state.popCard}
            </div>
        )
    }
};
export default LoginRegister;