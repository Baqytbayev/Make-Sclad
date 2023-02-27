import React from 'react';
import './Product.css'
import Button from "../UI/Button/Button";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Product = (props) => {
    return (
        <div className='Product'>
            < div className='Title'>


                <p>{props.title}</p>
            </div>
            < div className='Price'>

                <p>{props.price}</p>
            </div>
            < div className='Stock'>

                <p>{props.stock}</p>
                <Button
                    disabled={props.disabled}
                    click={props.click}
                    textOfButton={<FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>}
                />
            </div>
        </div>
    )

}
export default Product;