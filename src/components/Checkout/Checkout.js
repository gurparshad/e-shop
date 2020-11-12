import React from 'react';
import './Checkout.css';
import banner2 from '../../images/banner2.jpg';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../../stateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';

export default function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={banner2} alt="banner"/>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image} 
                            title={item.title} 
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>

            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}
