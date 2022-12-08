
import React, { Component } from "react";
import './Asign.css'

class Asign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        // this.setState({ data: [] });

        //comment above line or below line in componentDidMount
        //if you want to uncomment below line fetch
        //then comment whole of componentdidupdate

        //the componentDidMount is goining to call the api calls intially
        //the componentDidUpdate is goining to call the api calls conditionally


        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((result) => this.setState({ data: result }))
            .catch((err) => console.log(err));
    }

    getSnapshotBeforeUpdate(pre, post) {
        console.log(pre, post)
        return null;
    }
    componentDidUpdate() {
        if (this.state.data.length <= 0) {
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((result) => this.setState({ data: result }))
                .catch((err) => console.log(err));
        }
    }
    componentWillUnmount() {
        console.log("it is unmount");
    }
    shouldComponentUpdate() {
        return true;
    }
    render() {
        console.log(this.state);
        return (
            <div className="card_info">
                {this.state.data.map((item) => (
                    <div class="card">
                        <h3>{item.id}</h3>
                        <img src={item.image} className="image" style={{ height: "15p0x", width: "150px" }} alt="hello" />
                        <h4>{item.category}</h4>
                        <h4>${item.price}</h4>
                    </div>
                ))}
            </div>
        );
    }
}

export default Asign;