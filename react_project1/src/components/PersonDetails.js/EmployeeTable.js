import React, { Component } from "react";

class EmployeeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };
    render() {
        console.log(this.props.input)
        return (
            <>
                <div className="Employee-Id">
                    <h2>EmployeeDetails</h2>
                    {this.state.props}
                </div>
            </>

        )
    }
};
export default EmployeeTable;