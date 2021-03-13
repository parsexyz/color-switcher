import React from 'react';

function ColorButton(props){
    return <button className={props.color} onClick={()=>props.setColor(props.color)}>{props.color}</button>
}

export default ColorButton;