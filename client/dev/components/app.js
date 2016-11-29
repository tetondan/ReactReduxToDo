import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItems from './listItems';
import ButtonGroup from './buttonGroup';

let id = 0,input = '';

class App extends Component {
  render() {
    return ( 
      <div className="container">
        <h1>To Do List</h1>
        <input type="text" ref={(node) => { input = node }}/>
        <button onClick={this.props.addTodo}>Add To Do</button>
        <ListItems />
        <ButtonGroup />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {  
    addTodo: () => {
        if(input.value === ''){ return }
        dispatch({type: "ADD_TODO", id: id++, title: input.value})
        input.value = ''
    }
  }
}


export default connect(null, mapDispatchToProps)(App);