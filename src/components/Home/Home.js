import React from 'react'
import './Home.css';
import banner from '../../images/digiBanner.jpg';
import Product from '../Product/Product';
import productImage from  '../../images/leanStartup.jpg';

export default function Home() {
    return (
        <div className="home">

        
        <div className="home__container">
            <img className="home__image" src={banner} alt="banner"/>

            <div className="home__row">
            <Product id="1" title='The Lean Startup' price={29.99}
                image={productImage} rating={5}
            />
            <Product id="2" title='The Lean Startup' price={29.99}
                image={productImage} rating={5}
            />
            </div>

            <div className="home__row">
            <Product id="3" title='The Lean Startup' price={29.99}
                image={productImage} rating={5}
            />           
            <Product id="4" title='The Lean Startup' price={29.99}
                image={productImage} rating={5}
            />            
            <Product id="5" title='The Lean Startup' price={29.99}
                image={productImage} rating={5}
            />
            </div>

            <div className="home__row">
            <Product id="6" title='The Lean Startup' price={29.99}
                image={productImage} rating={5}
            />            
            <Product id="7" title='The Lean Startup' price={29.99}
                image={productImage} rating={5}
            />
            </div>
            
        </div>
        </div>
    )
}