import React, { Component } from "react";
import Prop4 from "./Prop4";

class Prop3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 1,
        }
    }
    render() {
        return (
            <>  {this.state.data}<br></br>
                <button onClick={() => { this.setState({ data: this.state.data + 1 }) }}>+</button>
                <button onClick={() => { this.setState({ data: this.state.data - 1 }) }}>-</button>

                <Prop4 data={this.state.data} />
            </>
        )
    }
};
export default Prop3;