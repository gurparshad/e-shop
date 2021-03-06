import React from 'react'
import './Header.css';
import logo from '../../images/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from '../../stateProvider';
import {auth} from '../../firebase';

export default function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

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
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">
                    Hello, {user? user.email :'Hello Guest'}
                    </span>
                    <span className="header__optionLIneTwo">
                         {user? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
                </Link>
                
                <Link to ="/orders">
                <div className="header__option">
                <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLIneTwo">
                        & Orders
                    </span>
                </div>
                </Link>

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
