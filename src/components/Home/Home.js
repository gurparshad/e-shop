import React from 'react'
import './Home.css';
import banner from '../../images/digiBanner.jpg';
import Product from '../Product/Product';
import hdtvImage from '../../images/hdtv.jpg';
import ipadImage from '../../images/ipad.jpg';
import iphoneImage from '../../images/iphone.jpg';
import jblImage from '../../images/jblSpeaker.png';
import ipodImage from '../../images/ipods.jpg';
import galaxyImage from '../../images/galaxys11.jpg';
import canonEDS200D from '../../images/canonEDS200D.jpg';

export default function Home() {
    return (
        <div className="home">

        
        <div className="home__container">
            <img className="home__image" src={banner} alt="banner"/>

            <div className="home__row">
            <Product id="1" title='HDTV' price={29.99}
                image={hdtvImage} rating={5}
            />
            <Product id="2" title='Ipad Pro' price={29.99}
                image={ipadImage} rating={5}
            />
            </div>

            <div className="home__row">
            <Product id="3" title='Iphone' price={29.99}
                image={iphoneImage} rating={5}
            />           
            <Product id="4" title='JBL Speaker' price={29.99}
                image={jblImage} rating={5}
            />            
            <Product id="5" title='Ipods' price={29.99}
                image={ipodImage} rating={5}
            />
            </div>

            <div className="home__row">
            <Product id="6" title='Samsung Galaxy s11' price={29.99}
                image={galaxyImage} rating={5}
            />            
            <Product id="7" title='Canon EDS 200 D' price={29.99}
                image={canonEDS200D} rating={5}
            />
            </div>
            
        </div>
        </div>
    )
}