import React, { Component } from "react";
import { createPortal } from "react-dom";

const ele = document.getElementById("module-root");
//it is taking the module-root element from the index.html

//for now i deletd the module-root in idex.html if you want to do this program pls add the below line inn index.html
//<div id="module-root"></div>

class ModelRoot extends Component {
    constructor(props) {
        super(props);
        this.container = document.createElement("div"); //here we created the element and added to the conttainer
    };

    componentDidMount() { //we are appending the above element to the container
        ele.appendChild(this.container);
    }

    render() {
        return (
            createPortal(this.props.children, this.container)

            // <h2>chaitanya reddy</h2>
        )
    }
}
export default ModelRoot;