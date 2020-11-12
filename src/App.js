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

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      
        </div>
    </Router>

  );
}

export default App;
