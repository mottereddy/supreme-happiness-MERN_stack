import React, { Component } from "react";
import './LoginPopUp.css';

class LoginPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginDetails: {}, //here we creating empty object
            mailError: null,
            passwordError: null

        }
    }

    handleInputData = (event) => {
        console.log(event.target.value);
        this.setState({
            loginDetails: {
                ...this.state.loginDetails,
                [event.target.id]: event.target.value
            }
            //here we dont use the spread operator then the other value will be deleted
            //thus why we used spread operator and we intiliasied the id and value
        })

        this.setState({
            mailError: null,
            passwordError: null
        })
        //here we need to pass the setstate and we want to pass the null otherwise the error message will be displayed there only
    }
    handleValidation = (param) => {
        let mailError = false,
            passwordError = false;
        if (!/^([a-zA-Z0-9\.@]{5,12})$/.test(param.userId)) {
            this.setState({
                mailError: 'please enter valid mail'
            })
        } else mailError = true

        if (!/^([a-zA-Z0-9\.@$#&]{5,12})$/.test(param.password)) {
            this.setState({
                passwordError: 'password must be atleast one special character'
            })
        } else passwordError = true

        if (mailError && passwordError) return true;
        else return false;
    }
    check = () => {
        if (this.handleValidation(this.state.loginDetails)) {
            //here we called the handleValidation function  and we passing the parameter as the login details
            //here we called the handleValidation function inside the if condition
            alert("Login succesful")
        }
        console.log(this.state.loginDetails);
    }

    render() {
        return (
            <>
                <div className="loginPop"  >
                    <div className="loginInner">
                        <button onClick={this.props.eventClose} className="wrong-btn">&#x2716;</button>
                        <h2 className="inner-Text">UserId : <input type="text" onChange={this.handleInputData} placeholder="UserId" className="input-type" id="userId" /></h2>
                        <h4 className="errorMsg">{this.state.mailError}</h4>
                        <h2 className="inner-Text">Password : <input type="password" onChange={this.handleInputData} placeholder="Password" className="input-type" id="password" /></h2>
                        <h4 className="errorMsg">{this.state.passwordError}</h4>
                        <button id="loginbtn" onClick={this.check}>Login</button>
                    </div>
                </div>
            </>
        )
    };
};

export default LoginPopUp;