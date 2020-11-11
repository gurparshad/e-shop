import React from 'react'
import './Header.css';
import logo from '../../images/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from '../../stateProvider';

export default function Header() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to='/'>
            <img className="header__logo" src={logo} alt="logo" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLIneTwo">
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLIneTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLIneTwo">
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
                </Link>

            </div>
        </div>

    )
}
