import React, { Component } from 'react'

export class GetDerivedStateFromProps1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "chaitu"
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (props.data !== state.data) {
            return {
                data: props.data
            }
            return null;
        }
    }
    render() {
        return (
            <>
                <div >My name is {this.state.data}</div>
            </>
        )
    }
}

export default GetDerivedStateFromProps1