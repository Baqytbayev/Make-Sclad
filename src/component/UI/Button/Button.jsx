import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <div className={'Button'}>
            <button className={'btn'} disabled={props.disabled} onClick={props.click}>  {props.textOfButton}</button>
        </div>
    )
}

export default Button;