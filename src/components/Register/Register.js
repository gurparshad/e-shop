import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.png';
import {auth} from '../../firebase';

export default function Register() {
    const history = useHistory(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // if user creation successfull
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="register">
        <Link to='/'>
        <img className="register__logo" src={logo}/>
        </Link>
    
    <div className="register__container">
        <h1>Register</h1>
            <form>
                <h5>E-mail</h5>
                <input  type="email" value={email} 
                onChange = {e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" 
                    onChange = {e => setPassword(e.target.value)} />

                <button type="submit" onClick={register} className="register__registerButton">Sign Up</button>
            </form>

            <p>
                By registering you agree to the e-shop Conditions of Use
                & Sale. Please see our Privacy Notice, our Cookies Notice
                and our Interest-Based Ads Notice.
            </p>

            </div>

            </div>
        
    )
}
