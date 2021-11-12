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

function App() {

  const [user, setUser] = useState("")
  const [openModal, setOpenModal] = useState(false)

  return (
    //provider gives a way to pass data to other sections without having to pass the props manually through the component tree
    //especially useful for applications where info has to be customized for users
    <div className="App">
        <ProductCard/>
        {/*<AppContext.Provider value = {user}>
          <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/Hoodies' exact component={Hoodies}/>
              <Route path='/Tshirts' exact component={Tshirts}/>
            </Switch>
            <Footer />
          </Router>
  </AppContext.Provider>*/}
    </div>
  );
}

export default App;
