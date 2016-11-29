import React from 'react';

const ListItem = props => {
    const item = props.item;
    switch( props.selected ){
      case 'All' : 
        return item.completed ? 
          <div className="item" onClick={props.itemClick.bind(this, item.id)}><li style={{textDecoration: "line-through"}}>{item.title}</li></div> :
          <div className="item" onClick={props.itemClick.bind(this, item.id)}><li>{item.title}</li></div>;
      case 'Completed' : 
        return item.completed ? <div className="item" onClick={props.itemClick.bind(this, item.id)}><li>{item.title}</li></div> : null;
      case 'Not Completed' : 
        return !item.completed ? <div className="item" onClick={props.itemClick.bind(this, item.id)}><li>{item.title}</li></div> : null;
      default :
        return null;
    };
};

export default ListItem;