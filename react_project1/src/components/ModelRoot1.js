import React, { Component } from "react";
import ModelRoot from "./ModelRoot";

class Child extends Component {

    render() {
        return (
            <div className="modal">
                <input type='text' placeholder="username" />
                <input type='password' placeholder="password" />
                <button onClick={this.handleChange}>onClick</button>

            </div>
        )
    }
}

class ModelRoot1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }
    handleChange = () => {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <div>
                <h1 onClick={this.handleChange}>vedansh</h1>
                <ModelRoot>{this.state.show && <Child handleChange={this.handleChange} />}</ModelRoot>
            </div>
        )
    }
};
export default ModelRoot1;