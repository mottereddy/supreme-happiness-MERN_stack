import React, { Component } from "react";
import ModelRoot from "./ModelRoot";
//hello 
//hello this is chaitanya
class Child extends Component {
    render() {
        return (
            <div>
                <input type='text' placeholder="username" />
                <input type='password' placeholder="password" />
            </div>
        )
    }
}

class ModelRoot1 extends Component {

    render() {
        return (
            <>
                {/* <ModelRoot>
                    <Child />
                </ModelRoot> */}
            </>
        )
    }
};
export default ModelRoot1;