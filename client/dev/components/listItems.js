import React, { Component } from 'react';
import ListItem from './listItem'
export default class ListItems extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render(){
    const {store} = this.context
    let state = store.getState()

    const toggleAction = (id) => {
      store.dispatch({type: "TOGGLE_TODO", id: id})
    };

    return (
      <ul className="listitems">
        {state.items.map( (item, index) => {
          return <ListItem itemClick={toggleAction} selected={state.selected} item={item} key={item.id}/>
        })}
      </ul>
    )
  }

}
ListItems.contextTypes = {
  store: React.PropTypes.object
};
