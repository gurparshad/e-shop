import React from 'react';
import './Checkout.css';
import banner2 from '../../images/banner2.jpg';
import Subtotal from '../Subtotal/Subtotal';

export default function Checkout() {

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={banner2} alt="banner"/>
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}
