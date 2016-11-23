import React, { Component } from 'react';
import ListItems from './listItems';
import ButtonGroup from './buttonGroup';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { store } = this.context;
    let id = 0

    const addTodo = () => {
      if(this.input.value === ''){ return }
      store.dispatch({type: "ADD_TODO", id: id++, title: this.input.value})
      this.input.value = ''
    }

    return ( 
      <div className="container">
        <h1>To Do List</h1>
        <input type="text" ref={(node) => {this.input = node}}/>
        <button onClick={addTodo}>Add To Do</button>
        <ListItems />
        <ButtonGroup />
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object
};