import React, { Component } from 'react';
import Button from './button';

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { store } = this.context;
    const state = store.getState();
    const clickHandler = (selected) => {
      store.dispatch({type: "CHANGE_SELECTED", selected: selected})
    }

    const selectedButtonStyle = {
      background: "#b3e5d1",
      textDecoration: "none",
      cursor: "default"
    };

    const types = ['All', 'Not Completed', 'Completed'];

    return (
      <div className="buttonGroup">
        {types.map( (item, index) => {
          return <Button clickHandler={clickHandler} type={item} selected={state.selected} key={index}/>
        })}
      </div>
    )
  }
}
ButtonGroup.contextTypes = {
  store: React.PropTypes.object
};