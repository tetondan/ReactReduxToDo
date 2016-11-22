import React, { Component } from 'react';

export default class ListItems extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const item = this.props.item;
    const index = this.props.index;
    let node = null;
    if(this.props.selected === 'All'){
      if(this.props.item.completed){
        node = <div className="item" onClick={this.props.itemClick.bind(this, index)}><li style={{textDecoration: "line-through"}}>{item.title}</li></div>
      } else {
        node = <div className="item" onClick={this.props.itemClick.bind(this, index)}><li>{item.title}</li></div>
      }
    } else if(this.props.selected === "Completed"){
      if(this.props.item.completed){
        node = <div className="item" onClick={this.props.itemClick.bind(this, index)}><li>{item.title}</li></div>
      }
    } else if (this.props.selected === 'Not Completed') {
      if(!this.props.item.completed){
        node = <div className="item" onClick={this.props.itemClick.bind(this, index)}><li>{item.title}</li></div>
      }
    }
    return(
      node
    )
  }
};