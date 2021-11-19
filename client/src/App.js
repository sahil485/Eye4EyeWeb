import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer, ProductCard } from './components';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/HomePage/Home';
import Hoodies from './pages/Hoodies/Hoodies';
import Tshirts from './pages/T-Shirts/Tshirts';
import { AppContext } from './Context';
import axios from 'axios';
import Button from './globalStyles';
import ImageSlider from './components/ImageSlider/ImageSlider';

function App() 
{
  const[items, setItems] = useState([
    {name: "Midnight Blue and Purple",  quantity: 0, id : 1, price: 35},
    {name: "White and Red", quantity: 0, id: 2, price: 35},
    {name: "Forest Green", quantity: 0, id : 3, price: 35}
  ]);

  function dispatchCartActions(item, actionType, num)
    {
        switch(actionType)
        {
            case "ADD":

              const contains = items.filter(inside => inside.name === item.name)

              const itemName = contains[0].name;

              if(itemName === items[0].name && items[0].quantity < 5)
              {
                items[0].quantity++;
              }
              else if(itemName === items[1].name &&  items[1].quantity < 5)
              {
                items[1].quantity++;
              }
              else if(itemName === items[2].name && items[2].quantity < 5)
              {
                items[2].quantity++;
              }

              alert("1 " + itemName + " sweatshirt added to cart.")

              return
            
            case "INCREMENT":
            
              items[item-1].quantity = num;
              
              return

            case "DELETE":
              return
        }
    }


  return (
    //provider gives a way to pass data to other sections without having to pass the props manually through the component tree
    //especially useful for applications where info has to be customized for users
    <div className="App">
        <AppContext.Provider value = {{items, dispatchCartActions}}>
          {/*<Payment/>*/}
          <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Navbar />
            <ImageSlider />
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/Hoodies' exact component={Hoodies}/>
              {/*<Route path='/Tshirts' exact component={Tshirts}/>*/}
            </Switch>
            <Footer />
          </Router>
      </AppContext.Provider>

    </div>
  );
}

export default App;
