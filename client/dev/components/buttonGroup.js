import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from './button';

class ButtonGroup extends Component {
  render() {
    const buttonTypes = ['All', 'Not Completed', 'Completed'];
    const selectedButtonStyle = {
      background: "#b3e5d1",
      textDecoration: "none",
      cursor: "default"
    };

    return (
      <div className="buttonGroup">
        {buttonTypes.map( (item, index) => {
          return <Button clickHandler={this.props.clickHandler} type={item} selected={this.props.selected} key={index}/>
        })}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    selected: state.selected
  };
};

const mapDispatchToProps = dispatch => {
  return{
    clickHandler: selected => {
      dispatch({type: "CHANGE_SELECTED", selected});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup);