import React, { Component } from 'react';
import ListItems from './listItems';
import ButtonGroup from './buttonGroup';
import Button from './button';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      input: '',
      selected: "All"
    }
    this.valueChange = this.valueChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
  }

  valueChange(e){
    this.setState({input: e.target.value});
  }

  addTodo(){
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
        <Button clickHandler={this.addTodo} title={"Add To Do"} />
        <ListItems items={this.state.items} selected={this.state.selected} itemClick={this.toggleItem}/>
        <ButtonGroup clickHandler={this.changeSelected} selected={this.state.selected} buttonTypes={['All', 'Not Completed', 'Completed']}/>
      </div>
    );
  }
}