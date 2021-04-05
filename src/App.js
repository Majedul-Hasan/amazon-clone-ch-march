import React, {useEffect, useState} from 'react';
import Header from './Header/Header.jsx';
import Cart from './Cart/Cart';
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom';

import db, { auth } from './firebase/firebase'

import Home from './Home/Home';
import Login from './login/login'


import './App.css';

function App() {

  const [user, setUser] =useState(JSON.parse(localStorage.getItem('user')));

  const [cartItems, setCartItems] = useState([]);

  const getCartItems = ()=>{

    db.collection('CartItems').onSnapshot((snapshot)=>{
      const tempItems = snapshot.docs.map((doc)=>({
        id:doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems)
    })
  }
  useEffect(()=>{
    getCartItems()

  }, [])
  console.log('user', user);

  


const signOut =()=> {
  auth.signOut().then(()=>{
    localStorage.removeItem('user')
    setUser(null)
  })
}




  return (
    <Router>

      {
        !user ? (
          <Login  setUser={setUser}/>
        ):(
        <div className="App">
        <Header 
        signOut={signOut} 
        user={user} 
        cartItems={cartItems}/>
        <Switch>
          {/* <Route path= '/login' >
            <Login  />
          </Route> */}



          <Route path= '/cart' >
            <Cart cartItems={cartItems} />
          </Route>
          <Route  path ="/">
            <Home />
          </Route>
        </Switch>
      </div>
         )


      } 



      
    </Router>
  );
}

export default App;
