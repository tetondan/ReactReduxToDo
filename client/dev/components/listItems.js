import React, { Component } from 'react';
import ListItem from './listItem'
export default class ListItems extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ul className="listitems">
        {this.props.items.map( (item, index) => {
          return <ListItem itemClick={this.props.itemClick} selected={this.props.selected} item={item} index={index} key={index}/>
        })}
      </ul>
    )
  }
}