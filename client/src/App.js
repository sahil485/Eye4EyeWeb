import React, { useState, useEffect } from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer, ProductCard } from './components';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/HomePage/Home';
import Hoodies from './pages/Hoodies/Hoodies';
import Cart from './pages/Checkout/Cart'
import { AppContext } from './Context';

function App() 
{

  const calcPrice = (items) => {
    return items.map(el => el.price * el.quantity)
      .reduce((prev, curr) => prev+ curr)
  }

  const[items, setItems] = useState([
    {name: "Midnight Blue and Purple",  size: "small", quantity: 0, id : 1, price: 35.00},
    {name: "White and Red", size: "small", quantity: 0, id: 2, price: 35.00},
    {name: "Forest Green",  size: "small", quantity: 0, id : 3, price: 35.00}
  ]);

  const [price, setPrice] = useState(calcPrice(items))

  useEffect(()=>{
    setPrice(calcPrice(items))
  }, [items])

  function dispatchCartActions(item, actionType/*, num*/)
    {
        switch(actionType)
        {
            case "ADD":

              const contains = items.filter(el => el.name === item)
              const itemName = contains[0].name;

              const temp = [...items];
              const indToChange = items.findIndex(el => el.name == itemName)
              temp[indToChange].quantity++;
              setItems(temp);

              alert("1 " + items[indToChange].name + " sweatshirt added to cart.")
              return
            
            case "INCREMENT":
            
              const temp2 = [...items];
              temp2[item-1].quantity += 1;
              setItems(temp2)
              return
            
            case "DECREMENT":
            
              const temp3 = [...items];
              temp3[item-1].quantity -= 1;
              setItems(temp3)
              return

            case "DELETE":
              return
        }
    }


  return (
    //provider gives a way to pass data to other sections without having to pass the props manually through the component tree
    //especially useful for applications where info has to be customized for users
    <div className="App">
        <AppContext.Provider value = {{price, items, dispatchCartActions}}>
          {/*<Payment/>*/}
          <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/Hoodies' exact component={Hoodies}/>
              <Route path='/Cart' exact component={Cart}/>
            </Switch>
            <Footer />
          </Router>
      </AppContext.Provider>

    </div>
  );
}

export default App;
