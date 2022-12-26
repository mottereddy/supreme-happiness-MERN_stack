import React, { Component } from "react";
import Hooks1 from "./Hooks1";

class Hooks2 extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
        }
    }
    handleChange = () => {
        this.setState({ data: !false })
    }
    render() {
        return (
            <>  {this.state.data <= true ? <Hooks1 /> : 'this is unmounted'}
                <button onClick={this.handleChange}>Inc</button>
                <button onClick={this.handleChange}>Dec</button>
            </>
        )
    }
}
export default Hooks2;