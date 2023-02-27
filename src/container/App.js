import './App.css';
import Product from "../component/Product/Product";
import Input from "../component/Input/Input";
import React, {useState} from "react";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDownAZ} from "@fortawesome/free-solid-svg-icons";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

function App() {
    const [product, setProduct] = useState(
        {
            title: '',
            price: 0,
            stock: 0,
            disabled: false
        })
    const [products, setProducts] = useState([
        {
            title: 'Milk',
            price: 100,
            stock: 15,
            disabled: false
        },
        {
            title: 'Cola',
            price: 120,
            stock: 8,
            disabled: false
        },
        {
            title: 'Bread',
            price: 80,
            stock: 9,
            disabled: false
        }
    ]);

    const getTitle = (e) => {
        const copy = {...product}
        copy.title = e.target.value;
        setProduct(copy);
    }
    const getPrice = (e) => {
        const copy = {...product}
        copy.price = e.target.value;
        setProduct(copy);
    }
    const getStock = (e) => {
        const copy = {...product}
        copy.stock = e.target.value;
        setProduct(copy);
    }


    const addClick = (e) => {
        e.preventDefault();
        let exists = false;
        let index = 0;
        products.forEach((element, i) => {
            if (element.title === product.title) {
                exists = true;
                index = i;
                return;
            }
        });

        exists ? addExisting(index) : addNew();
    };
    const addExisting = (index) => {
        const copy = [...products];
        if (product.price != 0) {
            copy[index].price = product.price;
        }
        if (product.stock != 0) {
            copy[index].stock = parseInt(copy[index].stock) + parseInt(product.stock);

        }
        minusClick(index)
        setProducts(copy);
    };
    const addNew = () => {
        const copyState = [...products];
        copyState.push(product);
        setProducts(copyState);
    };
    const minusClick = (i) => {
        const minus = [...products];
        minus[i].stock--;
        setProducts(minus);
        if (products[i].stock > 0) {
            products[i].disabled = false;
        } else {
            products[i].disabled = true;
        }
    };

    const sortTitle = () => {
        const copy = [...products]
        copy.sort((a, b) => a.title.localeCompare(b.title))
        setProducts(copy)
    }
    const sortPrice = () => {
        const copy = [...products]
        copy.sort((a, b) => a.price - b.price)
        setProducts(copy)
    };
    const sortPriceUp = () => {
        const copy = [...products]
        copy.sort((a, b) => (a.price < b.price) ? 1 : -1)
        setProducts(copy)
    }
    const sortStock = () => {
        const copy = [...products]
        copy.sort((a, b) => a.stock - b.stock)
        setProducts(copy)
    };
    const sortStockUp = () => {
        const copy = [...products]
        copy.sort((a, b) => (a.stock < b.stock) ? 1 : -1)
        setProducts(copy)
    };
    return (
        <div className="App">
            <header className={'header'}>
                <h2 className='Product-title'>Title <button onClick={sortTitle}><FontAwesomeIcon icon={faArrowDownAZ} className='styleOfIcon'></FontAwesomeIcon>
                </button></h2>
                <h2 className='Product-price'>Price <button onClick={sortPriceUp}><FontAwesomeIcon icon={faArrowUp} className='styleOfIcon'></FontAwesomeIcon>
                </button>
                    <button onClick={sortPrice}>
                        <FontAwesomeIcon icon={faArrowDown} className='styleOfIcon'></FontAwesomeIcon>
                    </button>
                </h2>
                <h2 className='Product-stock'>Stock <button onClick={sortStockUp}>
                    <FontAwesomeIcon icon={faArrowUp} className='styleOfIcon'></FontAwesomeIcon>
                </button>
                    <button onClick={sortStock}>
                        <FontAwesomeIcon icon={faArrowDown} className='styleOfIcon'></FontAwesomeIcon>
                    </button>
                </h2>
            </header>
            <div>
                {products.map((product, i) => {
                    return <Product
                        key={i}
                        title={product.title}
                        price={product.price}
                        stock={product.stock}
                        disabled={product.disabled}
                        click={() => minusClick(i)}
                    />
                })}
            </div>
            <div className={'input'}>
                <Input
                    changeTitle={getTitle}
                    submit={addClick}
                    changePrice={getPrice}
                    changeStock={getStock}
                />
            </div>
        </div>
    );
}

export default App;



