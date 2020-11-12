import React, {useState} from 'react'
import './Login.css';
import logo from '../../images/logo.png';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../firebase';

export default function Login() {
    const history = useHistory(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');

    const signin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message) );
    }

    const register = (e) => {
        e.preventDefault();
        history.push("/register");
    }

    return (
        <div className="login">
            <Link to='/'>
            <img className="login__logo" src={logo}/>
            </Link>
        
        <div className="login__container">
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input  type="email" value={email} 
                onChange = {e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" 
                    onChange = {e => setPassword(e.target.value)} />

                <button type="submit" onClick={signin} className="login__signinButton">Sign In</button>
            </form>

            <p>
                By signing-in you agree to the e-shop Conditions of Use
                & Sale. Please see our Privacy Notice, our Cookies Notice
                and our Interest-Based Ads Notice.
            </p>

            <button  type="submit" onClick={register}
             className="login__registerButton">Create e-shop Account</button>

        </div>

        </div>
    )
}
