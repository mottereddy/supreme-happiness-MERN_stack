import React, { Component } from "react";
class Higher1 extends Component {
    constructor() {
        super();
        this.state = {
            count: 1,
        }
    }
    handleIncrement = () => {
        // this.setState({ count: "chaitanya" })
        this.setState((res) => {
            return { count: res.count + 1 }
        })
    }
    render() {
        return (
            <>
                <button onClick={this.handleIncrement}>clicked {this.state.count} times</button>
            </>
        )
    }
};
export default Higher1;

