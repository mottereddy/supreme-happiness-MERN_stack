import React, { Component } from "react";

export default class LiftingState extends Component {
    constructor() {
        super();
        this.state = {
            data: 0,
        }
    }

    handleData = (res) => {
        this.setState({
            data: res.target.value,
        })
    }

    render() {
        console.log(this.state.data.target.value)
        return (
            <>
                <Lifting1 globalData={this.handleData} />
                <br />
                <Lifting1 globalData={this.handleData} />
            </>
        )
    }
}

class Lifting1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }
    render() {
        return (
            <>
                <div>{this.props.fname}</div>
                <input type="text" onChange={this.props.globalData} />
            </>
        )
    }
};
