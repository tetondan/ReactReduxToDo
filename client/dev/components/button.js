import React from 'react';

const Button = (props) => {
    const selectedButtonStyle = {
      background: "#b3e5d1",
      textDecoration: "none",
      cursor: "default"
    };

    if(props.type) {
      return <button onClick={props.clickHandler.bind(this, props.type)} style={props.selected === props.type ? selectedButtonStyle : null}>{props.type}</button>;
    } else {
      return <button onClick={props.clickHandler}>{props.title}</button>;
    } 
};

export default Button;