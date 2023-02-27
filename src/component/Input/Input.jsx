import React from 'react';
import './Input.css'
import Button from "../UI/Button/Button";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Input = (props) => {
    return (
        <div className='Input'>
            <form onSubmit={props.submit}>
                <p>Here product</p>
                <input onChange={props.changeTitle} required name={'title'} type={'text'}/>
                <p>Here price</p>
                <input onChange={props.changePrice} required name={'price'} type="number"/>
                <p>Here stock</p>
                <input onChange={props.changeStock} required name={'stock'} type="number"/>
                <Button
                    textOfButton={<FontAwesomeIcon className={'icon'} icon={faAdd}></FontAwesomeIcon>}
                />
            </form>
        </div>
    )
}
export default Input;