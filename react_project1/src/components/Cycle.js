import React, { Component } from "react";

class lifecycle extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            data: []
        };
        console.log(props);
        console.log("constructor")
    };
    static getDerivedStateFromProps(props, Curstate) {
        console.log("getDerivedStateFromProps", props, Curstate);
        return { data: props.data };
        //  return null; //now we will get empty array
    };
    render() {
        console.log(this.state.data)
        console.log("render method")
        return (
            <div>chaitu</div>
        )
    }
}
export default lifecycle;