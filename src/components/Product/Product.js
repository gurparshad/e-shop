import React from 'react';
import { useStateValue } from '../../stateProvider';
import './Product.css';


export default function Product({id,title, price, image, rating}) {
    
    const [{basket}, dispatch] = useStateValue();
    // destructurng the basket from the state [state, dispatch]
    const addToBasket = () => {
        // dispatch the item into the data layer.
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
                <img src={image} alt="product Image"/>          
                <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}
