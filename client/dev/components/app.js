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
      <div>
        <h1>ToDo List.</h1>
        <input type="text" value={this.state.input} onChange={this.valueChange}/>
        <button onClick={this.buttonClick}>Add ToDo</button>
        <ul>
          {this.state.items.map( (item, index) => {
            if(this.state.selected === 'All'){
              if(item.completed){
                return <li key={index} onClick={this.toggleItem.bind(this, index)} style={{color: "red"}}>{item.title}</li>
              } else {
                return <li key={index} onClick={this.toggleItem.bind(this, index)}>{item.title}</li>
              }
            } else if(this.state.selected === "Completed"){
              if(item.completed){
                return <li key={index} onClick={this.toggleItem.bind(this, index)}>{item.title}</li>
              } else {
                return 
              }
            } else if (this.state.selected === 'Not') {
              if(!item.completed){
                return <li key={index} onClick={this.toggleItem.bind(this, index)}>{item.title}</li>
              } else {
                return 
              }
            }
          })}
        </ul>
        <div>{this.state.selected === "All" ? <p style={{color: "red"}}>*completed in red</p> : ''}</div>
        <a href="#" onClick={this.changeSelected.bind(this, 'All')}>All</a> , <a href="#" onClick={this.changeSelected.bind(this, 'Not')}>Not Completed</a> , <a href="#" onClick={this.changeSelected.bind(this, 'Completed')}>Completed</a>
      </div>
    );
  }
}