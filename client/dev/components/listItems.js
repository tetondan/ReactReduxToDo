import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './listItem';

class ListItems extends Component {  
  render(){
    let props = this.props
    return (
      <ul className="listitems">
        {props.items.map( (item, index) => {
          return <ListItem itemClick={props.toggleAction} selected={props.selected} item={item} key={item.id}/>
        })}
      </ul>
    )
  }
};

const mapStateToProps = state => {
  return {
    items: state.items,
    selected: state.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAction: id => {
      dispatch({type: "TOGGLE_TODO", id})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);

