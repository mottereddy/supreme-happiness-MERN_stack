import React, { Component } from 'react'

class Props2 extends Component {

  render() {
    return (
        <>
            <label>child 2 :</label>
            <input type="text" onChange={this.props.handleChangeEvent} value={this.props.data}/>
      </>
    )
  }
}

export default Props2;

