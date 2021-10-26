import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/HomePage/Home';
import Hoodies from './pages/Hoodies/Hoodies';
import Tshirts from './pages/T-Shirts/Tshirts';
import Signup from './pages/Sign Up/Signup';

function App() {
  return (
    //provider gives a way to pass data to other sections without having to pass the props manually through the component tree
    //especially useful for applications where info has to be customized for users
      <div className="App">
        <Router>
          <GlobalStyle />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Hoodies' exact component={Hoodies}/>
            <Route path='/Tshirts' exact component={Tshirts}/>
            <Route path='/Signup' exact component={Signup}/>
          </Switch>
          <Footer />
        </Router>
      </div>
  );
}

export default App;