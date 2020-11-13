import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {auth} from './firebase';
import React, {useEffect} from 'react'
import { useStateValue } from './stateProvider';
import Payment from './components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders';

const promise = loadStripe(
  'pk_test_51HmkvSAThxS0T2XkpUg68gVKtllFxjYKbwDlVbCf1lHZX3uHJRunoVSl25csVE4puQbpGtJogVFDXG8sRlJ0vCPM0024bcxgCk'
  );

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is loged in >>>>>', authUser)
      
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
     
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
        <div className="app">
        <Header/>
        <Switch>
        
        <Route path="/register">
          <Register/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

         <Route path="/checkout">
            <Checkout/>
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>

          <Route path="/orders">
            <Orders/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      
        </div>
    </Router>

  );
}

export default App;
