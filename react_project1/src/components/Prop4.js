import React, { Component } from "react";
import Prop5 from "./PropDrilling2";
class Prop4 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <Prop5 data={this.props.data} />
            </>
        )
    }
};
export default Prop4;