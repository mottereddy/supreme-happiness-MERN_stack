import React, { Component } from "react";
// import './LoginRegisterPopUp.css';
import './LoginPopUp.css';


class LoginRegisterPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerDetails: {},

        }
    }

    handleInputData = (event) => {
        console.log(event.target.value);
        this.setState({
            registerDetails: {
                ...this.state.registerDetails,
                [event.target.id]: event.target.value
            }
        })

        this.setState({
            userError: null,
            passError: null,
            mobileError: null,
            emailError: null,
        })
    }

    handleRegisterValidation = (param) => {
        let userError = false,
            passError = false,
            mobileError = false,
            emailError = false;

        if (!/^([a-zA-Z0-9\.@]{5,10})$/.test(param.userId)) {
            this.setState({
                userError: 'please enter valid userid'
            })
        } else userError = true

        if (!/^([a-zA-Z0-9\.@$#&]{5,10})$/.test(param.passRegister)) {
            this.setState({
                passError: 'password must be atleast one special character'
            })
        } else passError = true

        if (!/^([0-9\.]{5,12})$/.test(param.mobile)) {
            this.setState({
                mobileError: 'please enter valid mobile number'
            })
        } else mobileError = true

        if (!/^([a-zA-Z0-9\.@]{5,20})$/.test(param.email)) {
            this.setState({
                emailError: 'please enter valid email'
            })
        } else emailError = true


        if ((userError && passError) && (mobileError && emailError))
            return true;
        else return false;

        // if (mobileError && emailError)
        //     return true;
        // else return false;
    }

    check = () => {
        if (this.handleRegisterValidation(this.state.registerDetails)) {
            //here we called the handleValidation function  and we passing the parameter as the login details
            alert("Registered succesful")
        }
        console.log(this.state.registerDetails);
    }


    render() {
        return (
            <>
                <div className="mainPop" >
                    <div className="regPage">
                        <button onClick={this.props.eventClose} className="wrong-btn-reg">&#x2716;</button>

                        <p className="inner-Text">Userid : <input type="text" id="userId" onChange={this.handleInputData} placeholder="UserId" className="input-type" /></p>
                        <p className="errorMsg">{this.state.userError}</p>
                        <p className="inner-Text">Password : <input type="password" id="passRegister" onChange={this.handleInputData} placeholder="Password" className="input-type" /></p>
                        <p className="errorMsg">{this.state.passError}</p>
                        <p className="inner-Text">Mobile : <input type="text" id="mobile" onChange={this.handleInputData} placeholder="Mobile" className="input-type" /></p>
                        <p className="errorMsg">{this.state.mobileError}</p>
                        <p className="inner-Text">email : <input type="text" id="email" onChange={this.handleInputData} placeholder="Email" className="input-type" /></p>
                        <p className="errorMsg">{this.state.emailError}</p>

                        <h2><button id="loginbtn" onClick={this.check}>Register</button></h2>
                    </div>
                </div>
            </>
        )
    }
};

export default LoginRegisterPopUp;