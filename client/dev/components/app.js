import React, { Component } from 'react';

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
        <ul className="listitems">
          {this.state.items.map( (item, index) => {
            if(this.state.selected === 'All'){
              if(item.completed){
                return <div className="item" onClick={this.toggleItem.bind(this, index)}><li key={index} style={{textDecoration: "line-through"}}>{item.title}</li></div>
              } else {
                return <div className="item" onClick={this.toggleItem.bind(this, index)}><li key={index}>{item.title}</li></div>
              }
            } else if(this.state.selected === "Completed"){
              if(item.completed){
                return <div className="item" onClick={this.toggleItem.bind(this, index)}><li key={index}>{item.title}</li></div>
              } else {
                return 
              }
            } else if (this.state.selected === 'Not') {
              if(!item.completed){
                return <div className="item" onClick={this.toggleItem.bind(this, index)}><li key={index}>{item.title}</li></div>
              } else {
                return 
              }
            }
          })}
        </ul>
        <div className="buttonGroup">
          <button onClick={this.changeSelected.bind(this, 'All')}>All</button> 
          <button onClick={this.changeSelected.bind(this, 'Not')}>Not Completed</button> 
          <button onClick={this.changeSelected.bind(this, 'Completed')}>Completed</button>
        </div>
      </div>
    );
  }
}