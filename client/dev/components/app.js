import React, { Component } from 'react';
import ListItems from './listItems'

const selectedButtonStyle = {
  background: "#b3e5d1",
  textDecoration: "none",
  cursor: "default"
};

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      input: '',
      selected: "All"
    }
    this.valueChange = this.valueChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
  }

  valueChange(e){
    this.setState({input: e.target.value});
  }

  buttonClick(){
    if(this.state.input.length > 0){
      this.setState( prevState => {
        return{
          items: prevState.items.concat([{title: prevState.input, completed: false}]),
          input: ''
        }
      })
    } else {
      return
    }
  }

  toggleItem(index, e){
    this.setState( prevState => {
      const item = prevState.items[index];
      item.completed = !item.completed
      const items = prevState.items.slice(0,index).concat(item).concat(prevState.items.slice(index + 1))
      return { items };
    })
  }

  changeSelected(selected, e){
    e.preventDefault();
    this.setState({selected});
  }

  render() {
    return ( 
      <div className="container">
        <h1>To Do List</h1>
        <input type="text" value={this.state.input} onChange={this.valueChange} placeholder="Write to do here"/>
        <button onClick={this.buttonClick}>Add To Do</button>
        <ListItems items={this.state.items} selected={this.state.selected} itemClick={this.toggleItem}/>
        <div className="buttonGroup">
          <button onClick={this.changeSelected.bind(this, 'All')} style={this.state.selected === 'All' ? selectedButtonStyle : null}>All</button> 
          <button onClick={this.changeSelected.bind(this, 'Not')} style={this.state.selected === 'Not' ? selectedButtonStyle : null}>Not Completed</button> 
          <button onClick={this.changeSelected.bind(this, 'Completed')} style={this.state.selected === 'Completed' ? selectedButtonStyle : null}>Completed</button>
        </div>
      </div>
    );
  }
}