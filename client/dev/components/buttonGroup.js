import React, { Component } from 'react';
import Button from './button';

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

    return (
      <div className="buttonGroup">
        {this.props.buttonTypes.map( (item, index) => {
          return <Button clickHandler={this.props.clickHandler} type={item} selected={this.props.selected} key={index}/>
        })}
      </div>
    )
  }
}