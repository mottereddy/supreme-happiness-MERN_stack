import React, { Component } from "react";

//HOC(Higher Order Component) is goining to take one component as a parameter
//and it is goining to return a new component then such type of component is called the higher order component

function HOC(WrapperClass) { //here we are creating a higher order component and passing parameters as a wrapperclass

    return class extends Component { //the hoc(higher order component) will return a component we used class thus why we call render and  return method
        render() {
            return (
                <HigherComponent name="chaitanya" /> //here we are returning the component and a props
            );
        }
    }
}

class HigherComponent extends Component {
    constructor() {
        super();
        this.state = {

        }
    };
    render() {
        return (
            <>
                <div>higher order components</div>
                <h1>{this.props.name}</h1>
            </>
        )
    }
}
export default HOC(HigherComponent); //here in param we are passing the HigherComponent class as a param to the Upper function WrapperClass