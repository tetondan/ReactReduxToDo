import React, { Component } from 'react';

export default class ListItems extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const selectedButtonStyle = {
      background: "#b3e5d1",
      textDecoration: "none",
      cursor: "default"
    };
    var node;
    if(this.props.type) {
      node = <button onClick={this.props.clickHandler.bind(this, this.props.type)} style={this.props.selected === this.props.type ? selectedButtonStyle : null}>{this.props.type}</button> 
    } else {
      node = <button onClick={this.props.clickHandler}>{this.props.title}</button>
    } 
    return node
  }
}